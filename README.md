# perp-funding-math

**Perpetual-futures funding math** — payments with the exchange sign convention (positive rate → longs pay shorts), APR/APY annualization for any funding interval, cumulative funding over a rate history, and **cross-venue funding-arbitrage** carry with breakeven. Zero dependencies.

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

Invalid inputs throw `RangeError`.

## Related

By the same author: a fixed-income & markets toolkit ([`compounded-sofr`](https://github.com/moshejs/compounded-sofr) · [`fx-forward-math`](https://github.com/moshejs/fx-forward-math) · [`hagan-sabr`](https://github.com/moshejs/hagan-sabr) · [`32nds`](https://github.com/moshejs/32nds)) and cap-table math ([`exit-waterfall`](https://github.com/moshejs/exit-waterfall) · [`safe-stack-conversion`](https://github.com/moshejs/safe-stack-conversion)).

## Author

Built by **[Moshe Malka](https://moshemalka.com)** — engineering leader in New York City. Studio work at [Quentin.Code](https://www.quentin.software/).

MIT © Moshe Malka
