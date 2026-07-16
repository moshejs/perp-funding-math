import { describe, expect, it } from "vitest";
import {
  averageFundingRate,
  cumulativeFunding,
  fundingApr,
  fundingApy,
  fundingArb,
  fundingPayment,
  ratePerIntervalFromApr,
} from "../src/index.js";

describe("funding payments — exchange sign convention", () => {
  it("positive rate: longs pay, shorts receive", () => {
    expect(fundingPayment(100_000, 0.0001, "long")).toBeCloseTo(-10, 10);
    expect(fundingPayment(100_000, 0.0001, "short")).toBeCloseTo(10, 10);
  });

  it("negative rate: longs receive, shorts pay", () => {
    expect(fundingPayment(100_000, -0.0003, "long")).toBeCloseTo(30, 10);
    expect(fundingPayment(100_000, -0.0003, "short")).toBeCloseTo(-30, 10);
  });

  it("long and short payments are exact opposites (zero-sum)", () => {
    for (const r of [0.0001, -0.00025, 0.00375]) {
      expect(fundingPayment(1e6, r, "long") + fundingPayment(1e6, r, "short")).toBeCloseTo(0, 10);
    }
  });
});

describe("annualization", () => {
  it("the classic 0.01% per 8h ≈ 10.95% APR (Binance's default rate)", () => {
    // 0.0001 × 3 × 365 = 0.1095
    expect(fundingApr(0.0001, 8)).toBeCloseTo(0.1095, 10);
  });

  it("hourly venues annualize with 8760 intervals", () => {
    expect(fundingApr(0.0000125, 1)).toBeCloseTo(0.0000125 * 8760, 12);
  });

  it("APY compounds above APR for positive rates", () => {
    const apr = fundingApr(0.0001, 8);
    const apy = fundingApy(0.0001, 8);
    expect(apy).toBeGreaterThan(apr);
    expect(apy).toBeCloseTo(Math.pow(1.0001, 1095) - 1, 10);
  });

  it("APR round-trips through ratePerIntervalFromApr", () => {
    const r = ratePerIntervalFromApr(fundingApr(0.00042, 8), 8);
    expect(r).toBeCloseTo(0.00042, 12);
  });
});

describe("history math", () => {
  const HIST = [
    { time: "2026-07-10T00:00:00Z", rate: 0.0001 },
    { time: "2026-07-10T08:00:00Z", rate: 0.0003 },
    { time: "2026-07-10T16:00:00Z", rate: -0.0001 },
  ];

  it("cumulative funding sums the interval payments", () => {
    // long: -(10) - (30) + (10) = -30 on 100k
    expect(cumulativeFunding(100_000, HIST, "long")).toBeCloseTo(-30, 8);
    expect(cumulativeFunding(100_000, HIST, "short")).toBeCloseTo(30, 8);
  });

  it("average rate", () => {
    expect(averageFundingRate(HIST)).toBeCloseTo(0.0001, 12);
  });

  it("empty history throws", () => {
    expect(() => averageFundingRate([])).toThrow(RangeError);
  });
});

describe("funding arbitrage", () => {
  it("computes net carry, fees, and breakeven", () => {
    const arb = fundingArb(
      { ratePerInterval: 0.0003, intervalHours: 8, roundTripFee: 0.0008 },
      { ratePerInterval: 0.0, intervalHours: 8, roundTripFee: 0.0008 },
    );
    expect(arb.netCarryApr).toBeCloseTo(0.0003 * 3 * 365, 10); // 32.85%
    expect(arb.totalFees).toBeCloseTo(0.0016, 12);
    // breakeven: fees / hourly carry
    expect(arb.breakevenHours).toBeCloseTo(0.0016 / (arb.netCarryApr / 8760), 6);
    expect(arb.breakevenHours).toBeLessThan(48); // this trade covers fees fast
    expect(arb.dailyCarryPerNotional).toBeCloseTo(arb.netCarryApr / 365, 10);
  });

  it("mixed intervals normalize through APR", () => {
    const arb = fundingArb(
      { ratePerInterval: 0.0000375, intervalHours: 1 }, // hourly venue
      { ratePerInterval: 0.0001, intervalHours: 8 },
    );
    expect(arb.netCarryApr).toBeCloseTo(0.0000375 * 8760 - 0.0001 * 1095, 10);
  });

  it("negative carry has no breakeven", () => {
    const arb = fundingArb(
      { ratePerInterval: 0.0, intervalHours: 8, roundTripFee: 0.001 },
      { ratePerInterval: 0.0002, intervalHours: 8 },
    );
    expect(arb.netCarryApr).toBeLessThan(0);
    expect(arb.breakevenHours).toBe(Infinity);
  });
});

describe("validation", () => {
  it("rejects bad inputs", () => {
    expect(() => fundingPayment(-1, 0.0001, "long")).toThrow(RangeError);
    expect(() => fundingPayment(1, Number.NaN, "long")).toThrow(RangeError);
    expect(() => fundingPayment(1, 0.1, "sideways" as never)).toThrow(RangeError);
    expect(() => fundingApr(0.0001, 0)).toThrow(RangeError);
    expect(() => fundingApy(-1.5, 8)).toThrow(RangeError);
  });
});
