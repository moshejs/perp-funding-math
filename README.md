# perp-funding-math

**Perpetual-futures funding math** — payments with the exchange sign convention (positive rate → longs pay shorts), APR/APY annualization for any funding interval, cumulative funding over a rate history, **cross-venue funding-arbitrage** carry with breakeven, and the **funding-rate formula** itself (premium index, time-weighted average, interest, clamp, caps). Zero dependencies.

```
npm install perp-funding-math
```

## Why

ccxt and the exchange SDKs *fetch* funding rates but compute nothing with them — no payments, no annualization, no arb math. Every perps dashboard and funding-arb bot rebuilds this arithmetic (and gets a sign or an interval wrong once first). This is the missing math layer.

```ts
import { fundingPayment, fundingApr, fundingArb } from "perp-funding-math";

fundingPayment(100_000, 0.0001, "long");   // -10  — long pays $10 this interval
fundingApr(0.0001, 8);                     // 0.1095 — the classic 0.01%/8h ≈ 10.95% APR

fundingArb(
  { ratePerInterval: 0.0003, intervalHours: 8, roundTripFee: 0.0008 },  // short leg (receives)
  { ratePerInterval: 0.0,    intervalHours: 8, roundTripFee: 0.0008 },  // long leg
);
// { netCarryApr: 0.3285, totalFees: 0.0016, breakevenHours: ~43, ... }
```

## API

Rates are decimals **per funding interval** (`0.0001` = 1 bp). Sides: `"long" | "short"`.

- **`fundingPayment(notional, rate, side)`** — one interval; positive = received. Long/short payments are exact opposites (zero-sum, enforced in tests).
- **`fundingApr(rate, intervalHours)`** / **`fundingApy(rate, intervalHours)`** — simple and compounded annualization; **`ratePerIntervalFromApr`** inverts.
- **`cumulativeFunding(notional, history, side)`** / **`averageFundingRate(history)`** — over `{ time, rate }[]`.
- **`fundingArb(shortLeg, longLeg)`** — net carry APR across venues (mixed intervals normalize through APR), total round-trip fees, breakeven hours, daily carry per notional.

- **`premiumIndex({ impactBid, impactAsk, indexPrice })`** — `[max(0, impactBid − index) − max(0, index − impactAsk)] / index`.
- **`averagePremiumIndex(samples, weighting?)`** — `"linear"` (default; sample *i* weighted *i*, oldest first) or `"equal"`.
- **`interestPerInterval(intervalHours, dailyRate = 0.0003)`** — `dailyRate × hours/24` (0.01% per 8 h).
- **`fundingRate({ premium, interestRate = 0.0001, clampBound = 0.0005, scale = 1, cap?, floor? })`** — `clamp(scale × [P + clamp(I − P, −0.05%, +0.05%)], floor, cap)`; `floor` defaults to `−cap`.

`fundingPayment`'s `notional` is the position value: size × mark price on Binance/Bybit, size × oracle price on Hyperliquid, and the coin value (contracts / mark) for inverse contracts.

Invalid inputs throw `RangeError`.

### Venue recipes

All venues use the same core formula; they differ in sampling, interval scaling and caps (per their public docs, October 2026):

| Venue | Premium | Call |
| --- | --- | --- |
| BitMEX (8 h) | `.XXXPI8H` index published at the previous funding time | `fundingRate({ premium, interestRate: interestPerInterval(8, quoteRate − baseRate) })` |
| Binance, *N*-hour interval | 5-second samples, `"linear"` weights (`"equal"` for 1 h) | `fundingRate({ premium, scale: N / 8, cap, floor })` — cap ±0.75 × MMR on majors, ±2% otherwise |
| Bybit, *N*-hour interval | 1-minute samples, `"linear"` weights | `fundingRate({ premium, interestRate: interestPerInterval(N), cap })` — cap min(0.75 × (IMR − MMR), MMR) |
| Hyperliquid (paid hourly) | 5-second samples, `"equal"` weights over the hour | `fundingRate({ premium, scale: 1 / 8, cap: 0.04 })` |

Venues change caps and intervals per symbol and in volatile markets; pass the current values. Checked against BitMEX's own XBTUSD history: 199 of 200 published 8-hour rates from 2021 (122 outside the ±0.05% band) are reproduced to the published 6 decimals; the exception is a period where BitMEX applied a limit this library doesn't model.

## Related

By the same author: a fixed-income & markets toolkit ([`compounded-sofr`](https://github.com/moshejs/compounded-sofr) · [`fx-forward-math`](https://github.com/moshejs/fx-forward-math) · [`hagan-sabr`](https://github.com/moshejs/hagan-sabr) · [`32nds`](https://github.com/moshejs/32nds)) and cap-table math ([`exit-waterfall`](https://github.com/moshejs/exit-waterfall) · [`safe-stack-conversion`](https://github.com/moshejs/safe-stack-conversion)).

## Author

Built by **[Moshe Malka](https://moshemalka.com)** — engineering leader in New York City. Studio work at [Quentin.Code](https://www.quentin.software/).

MIT © Moshe Malka
