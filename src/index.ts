/**
 * perp-funding-math — perpetual-futures funding math.
 *
 * Funding payments with the standard sign convention (positive rate → longs
 * pay shorts), annualization of any funding interval to APR/APY, cumulative
 * funding over a rate history, cross-venue funding-arbitrage carry net of
 * fees, breakeven holding period, and the funding-rate formula itself
 * (premium index, time-weighted average, interest component, clamp, caps)
 * as used by BitMEX, Binance, Bybit and Hyperliquid.
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
 * `notional` is the position value: size × mark price on Binance/Bybit,
 * size × oracle price on Hyperliquid; for inverse contracts (e.g. BitMEX
 * XBTUSD) pass the value in the settlement coin (contracts / mark price).
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
  const shortFee = shortLeg.roundTripFee ?? 0;
  const longFee = longLeg.roundTripFee ?? 0;
  check(Number.isFinite(shortFee) && shortFee >= 0, `shortLeg.roundTripFee must be ≥ 0, got ${shortFee}`);
  check(Number.isFinite(longFee) && longFee >= 0, `longLeg.roundTripFee must be ≥ 0, got ${longFee}`);
  const totalFees = shortFee + longFee;
  const carryPerHour = netCarryApr / HOURS_PER_YEAR;
  const breakevenHours = carryPerHour > 0 ? totalFees / carryPerHour : Infinity;
  return {
    netCarryApr,
    totalFees,
    breakevenHours,
    dailyCarryPerNotional: carryPerHour * 24,
  };
}

// ---------------------------------------------------------------------------
// Funding-rate formula
// ---------------------------------------------------------------------------

function clamp(x: number, lo: number, hi: number): number {
  return Math.min(Math.max(x, lo), hi);
}

export interface PremiumIndexInput {
  /** Average fill price to sell the impact notional into the bids. */
  impactBid: number;
  /** Average fill price to buy the impact notional from the asks. */
  impactAsk: number;
  /** Spot index price (Binance/Bybit "price index", Hyperliquid oracle price). */
  indexPrice: number;
}

/**
 * Instantaneous premium index (Binance, Bybit, Hyperliquid):
 * `[max(0, impactBid − index) − max(0, index − impactAsk)] / index`.
 * Zero while the index lies inside the impact bid/ask.
 */
export function premiumIndex({ impactBid, impactAsk, indexPrice }: PremiumIndexInput): number {
  for (const [v, name] of [
    [impactBid, "impactBid"],
    [impactAsk, "impactAsk"],
    [indexPrice, "indexPrice"],
  ] as const) {
    check(Number.isFinite(v) && v > 0, `${name} must be positive, got ${v}`);
  }
  check(impactBid <= impactAsk, `impactBid (${impactBid}) must be ≤ impactAsk (${impactAsk})`);
  return (Math.max(0, impactBid - indexPrice) - Math.max(0, indexPrice - impactAsk)) / indexPrice;
}

/**
 * Average of the premium-index samples taken over a funding interval, oldest
 * first. `"linear"` weights sample i by i (Binance for intervals over 1 h,
 * Bybit); `"equal"` is a plain mean (Binance 1 h intervals, Hyperliquid).
 */
export function averagePremiumIndex(
  samples: readonly number[],
  weighting: "linear" | "equal" = "linear",
): number {
  check(samples.length > 0, "samples must be non-empty");
  check(weighting === "linear" || weighting === "equal", `weighting must be "linear"|"equal"`);
  let sum = 0;
  let weights = 0;
  for (let i = 0; i < samples.length; i++) {
    const v = samples[i]!;
    check(Number.isFinite(v), `sample ${i} must be finite, got ${v}`);
    const w = weighting === "linear" ? i + 1 : 1;
    sum += w * v;
    weights += w;
  }
  return sum / weights;
}

/**
 * Interest component per funding interval from a daily rate:
 * `dailyRate × intervalHours / 24`. The venues' default daily rate is 0.03%
 * (0.01% per 8 h). On BitMEX `dailyRate` is quote rate − base rate.
 */
export function interestPerInterval(intervalHours: number, dailyRate = 0.0003): number {
  checkInterval(intervalHours);
  check(Number.isFinite(dailyRate), `dailyRate must be finite, got ${dailyRate}`);
  return (dailyRate * intervalHours) / 24;
}

export interface FundingRateParams {
  /** Premium index for the interval (usually {@link averagePremiumIndex}). */
  premium: number;
  /** Interest component per (8 h) interval. Default 0.0001 (0.01%). */
  interestRate?: number;
  /** Bound of the clamp on `interestRate − premium`. Default 0.0005 (±0.05%). */
  clampBound?: number;
  /**
   * Multiplier applied after the clamp, before the cap: Binance uses
   * `intervalHours / 8` for non-8 h intervals; Hyperliquid pays 1/8 of the
   * 8 h rate every hour. Default 1.
   */
  scale?: number;
  /** Funding-rate cap (upper limit), decimal. Default none. */
  cap?: number;
  /** Funding-rate floor (lower limit). Default `−cap`. */
  floor?: number;
}

/**
 * The standard perpetual funding-rate formula (BitMEX, Binance, Bybit,
 * Hyperliquid):
 * `F = clamp(scale × [P + clamp(I − P, −c, +c)], floor, cap)`.
 *
 * With the defaults (I = 0.01%, c = 0.05%) the rate equals the interest rate
 * whenever the premium is within ±0.05% of it.
 *
 * ```ts
 * fundingRate({ premium: 0.0003 });   // 0.0001 — inside the band
 * fundingRate({ premium: 0.000762 }); // 0.000262 — P − 0.05%
 * // Binance 4 h contract: scale by 4/8, cap/floor ±0.75 × MMR
 * fundingRate({ premium: 0.001, scale: 4 / 8, cap: 0.75 * 0.004 });
 * // Hyperliquid hourly payment, capped at 4%/h
 * fundingRate({ premium: hourlyAvgPremium, scale: 1 / 8, cap: 0.04 });
 * ```
 */
export function fundingRate(params: FundingRateParams): number {
  const { premium, interestRate = 0.0001, clampBound = 0.0005, scale = 1, cap } = params;
  check(Number.isFinite(premium), `premium must be finite, got ${premium}`);
  check(Number.isFinite(interestRate), `interestRate must be finite, got ${interestRate}`);
  check(Number.isFinite(clampBound) && clampBound >= 0, `clampBound must be ≥ 0, got ${clampBound}`);
  check(Number.isFinite(scale) && scale > 0, `scale must be positive, got ${scale}`);
  // P + clamp(I − P, −c, c), written so that the in-band case returns I exactly
  const gap = interestRate - premium;
  const unscaled = gap > clampBound ? premium + clampBound : gap < -clampBound ? premium - clampBound : interestRate;
  const raw = scale * unscaled;
  if (cap === undefined && params.floor === undefined) return raw;
  const hi = cap ?? Infinity;
  const lo = params.floor ?? (cap !== undefined ? -cap : -Infinity);
  check(!Number.isNaN(hi) && !Number.isNaN(lo) && lo <= hi, `floor (${lo}) must be ≤ cap (${hi})`);
  return clamp(raw, lo, hi);
}
