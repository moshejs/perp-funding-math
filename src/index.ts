/**
 * perp-funding-math — perpetual-futures funding math.
 *
 * Funding payments with the standard sign convention (positive rate → longs
 * pay shorts), annualization of any funding interval to APR/APY, cumulative
 * funding over a rate history, TWAP funding, cross-venue funding-arbitrage
 * carry net of fees, and breakeven holding period.
 *
 * Rates are decimals per funding interval (0.0001 = 1 bp per interval, the
 * classic "0.01%" default). Position sides: "long" | "short".
 */

export type Side = "long" | "short";

const HOURS_PER_YEAR = 24 * 365;

function check(cond: boolean, msg: string): void {
  if (!cond) throw new RangeError(msg);
}

function checkNotional(notional: number): void {
  check(Number.isFinite(notional) && notional >= 0, `notional must be ≥ 0, got ${notional}`);
}

function checkInterval(hours: number): void {
  check(Number.isFinite(hours) && hours > 0, `intervalHours must be positive, got ${hours}`);
}

/**
 * Funding paid (negative) or received (positive) for one interval.
 * Convention: positive rate → longs PAY (returns negative for a long),
 * shorts RECEIVE (positive for a short).
 *
 * ```ts
 * fundingPayment(100_000, 0.0001, "long");  // -10 (long pays $10)
 * fundingPayment(100_000, 0.0001, "short"); // +10
 * fundingPayment(100_000, -0.0003, "long"); // +30 (negative funding pays longs)
 * ```
 */
export function fundingPayment(notional: number, rate: number, side: Side): number {
  checkNotional(notional);
  check(Number.isFinite(rate), `rate must be finite, got ${rate}`);
  check(side === "long" || side === "short", `side must be "long"|"short", got ${side}`);
  const sign = side === "long" ? -1 : 1;
  return sign * notional * rate;
}

/**
 * Annualize a per-interval funding rate to a simple APR (decimal).
 * `fundingApr(0.0001, 8)` → 0.1095 (1 bp per 8h ≈ 10.95% APR).
 */
export function fundingApr(ratePerInterval: number, intervalHours: number): number {
  check(Number.isFinite(ratePerInterval), `rate must be finite`);
  checkInterval(intervalHours);
  return ratePerInterval * (HOURS_PER_YEAR / intervalHours);
}

/**
 * Annualize with compounding to an APY (decimal):
 * `(1 + r)^(intervals/year) − 1`.
 */
export function fundingApy(ratePerInterval: number, intervalHours: number): number {
  check(Number.isFinite(ratePerInterval) && ratePerInterval > -1, `rate must be > -1`);
  checkInterval(intervalHours);
  return Math.pow(1 + ratePerInterval, HOURS_PER_YEAR / intervalHours) - 1;
}

/** Convert an APR (decimal) back to a per-interval rate. */
export function ratePerIntervalFromApr(apr: number, intervalHours: number): number {
  check(Number.isFinite(apr), `apr must be finite`);
  checkInterval(intervalHours);
  return apr / (HOURS_PER_YEAR / intervalHours);
}

export interface FundingObservation {
  /** Funding time (ISO string or epoch ms) — used only for ordering/reporting. */
  time: string | number;
  /** Rate for that interval, decimal. */
  rate: number;
}

/**
 * Total funding paid/received over a rate history for a constant notional.
 * Returns the same sign convention as {@link fundingPayment}.
 */
export function cumulativeFunding(
  notional: number,
  history: readonly FundingObservation[],
  side: Side,
): number {
  checkNotional(notional);
  let total = 0;
  for (const h of history) {
    check(Number.isFinite(h.rate), `rate at ${h.time} must be finite`);
    total += fundingPayment(notional, h.rate, side);
  }
  return total;
}

/** Simple average of the rates in a history (equal intervals assumed). */
export function averageFundingRate(history: readonly FundingObservation[]): number {
  check(history.length > 0, "history must be non-empty");
  let sum = 0;
  for (const h of history) {
    check(Number.isFinite(h.rate), `rate at ${h.time} must be finite`);
    sum += h.rate;
  }
  return sum / history.length;
}

export interface VenueLeg {
  /** Rate per interval at this venue (decimal). */
  ratePerInterval: number;
  /** Funding interval in hours (8 typical; 1 for hourly venues). */
  intervalHours: number;
  /** Round-trip fee for this leg as a decimal of notional (entry + exit). */
  roundTripFee?: number;
}

export interface FundingArbResult {
  /** Net carry APR (decimal): receive-leg APR − pay-leg APR. */
  netCarryApr: number;
  /** Total round-trip fees across both legs (decimal of notional). */
  totalFees: number;
  /** Hours of positive carry needed to cover the fees; Infinity if carry ≤ 0. */
  breakevenHours: number;
  /** Daily net carry in currency per unit notional after annualized carry. */
  dailyCarryPerNotional: number;
}

/**
 * Cross-venue funding arbitrage: long the venue where funding is paid TO
 * longs (negative/lower rate), short the venue where shorts receive
 * (positive/higher rate). Pass the SHORT leg (receiving) and LONG leg
 * (paying/receiving less); the carry is shortLeg APR − longLeg APR.
 *
 * ```ts
 * fundingArb(
 *   { ratePerInterval: 0.0003, intervalHours: 8, roundTripFee: 0.0008 }, // short here, receive
 *   { ratePerInterval: 0.0000, intervalHours: 8, roundTripFee: 0.0008 }, // long here
 * );
 * ```
 */
export function fundingArb(shortLeg: VenueLeg, longLeg: VenueLeg): FundingArbResult {
  const shortApr = fundingApr(shortLeg.ratePerInterval, shortLeg.intervalHours);
  const longApr = fundingApr(longLeg.ratePerInterval, longLeg.intervalHours);
  const netCarryApr = shortApr - longApr;
  const totalFees = (shortLeg.roundTripFee ?? 0) + (longLeg.roundTripFee ?? 0);
  check(totalFees >= 0, "fees must be ≥ 0");
  const carryPerHour = netCarryApr / HOURS_PER_YEAR;
  const breakevenHours = carryPerHour > 0 ? totalFees / carryPerHour : Infinity;
  return {
    netCarryApr,
    totalFees,
    breakevenHours,
    dailyCarryPerNotional: carryPerHour * 24,
  };
}
