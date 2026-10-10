// BitMEX XBTUSD funding history (public REST API, GET /api/v1/funding and
// GET /api/v1/trade?symbol=.XBTUSDPI8H), retrieved 2026-10-10. Each row pairs the
// 8-hour premium index .XBTUSDPI8H published at `premiumAt` with the funding rate paid
// at `fundingAt` = premiumAt + 8h. Interest: .USDBON8H 0.06%/day − .XBTBON8H 0.03%/day.
// Rates are as published (6 decimals). One row is omitted: funding at 2021-04-10T20:00Z
// was 0.002997 although P = 0.003601 implies 0.003101 — a venue-side limit this
// library does not model (all 199 other rows, 122 outside the ±0.05% band, reproduce).

export const BITMEX_XBTUSD = [
 {
  "premiumAt": "2020-12-31T04:00:00.000Z",
  "premium": 0.000508,
  "fundingAt": "2020-12-31T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2020-12-31T12:00:00.000Z",
  "premium": 0.000762,
  "fundingAt": "2020-12-31T20:00:00.000Z",
  "fundingRate": 0.000262
 },
 {
  "premiumAt": "2020-12-31T20:00:00.000Z",
  "premium": -0.000214,
  "fundingAt": "2021-01-01T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-01T04:00:00.000Z",
  "premium": -0.000212,
  "fundingAt": "2021-01-01T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-01T12:00:00.000Z",
  "premium": 0.000357,
  "fundingAt": "2021-01-01T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-01T20:00:00.000Z",
  "premium": 0.000175,
  "fundingAt": "2021-01-02T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-02T04:00:00.000Z",
  "premium": -0.000095,
  "fundingAt": "2021-01-02T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-02T12:00:00.000Z",
  "premium": 0.00053,
  "fundingAt": "2021-01-02T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-02T20:00:00.000Z",
  "premium": 0.001595,
  "fundingAt": "2021-01-03T04:00:00.000Z",
  "fundingRate": 0.001095
 },
 {
  "premiumAt": "2021-01-03T04:00:00.000Z",
  "premium": 0.000877,
  "fundingAt": "2021-01-03T12:00:00.000Z",
  "fundingRate": 0.000377
 },
 {
  "premiumAt": "2021-01-03T12:00:00.000Z",
  "premium": 0.001021,
  "fundingAt": "2021-01-03T20:00:00.000Z",
  "fundingRate": 0.000521
 },
 {
  "premiumAt": "2021-01-03T20:00:00.000Z",
  "premium": 0.00134,
  "fundingAt": "2021-01-04T04:00:00.000Z",
  "fundingRate": 0.00084
 },
 {
  "premiumAt": "2021-01-04T04:00:00.000Z",
  "premium": 0.001139,
  "fundingAt": "2021-01-04T12:00:00.000Z",
  "fundingRate": 0.000639
 },
 {
  "premiumAt": "2021-01-04T12:00:00.000Z",
  "premium": 0.002168,
  "fundingAt": "2021-01-04T20:00:00.000Z",
  "fundingRate": 0.001668
 },
 {
  "premiumAt": "2021-01-04T20:00:00.000Z",
  "premium": 0.000345,
  "fundingAt": "2021-01-05T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-05T04:00:00.000Z",
  "premium": 0.000767,
  "fundingAt": "2021-01-05T12:00:00.000Z",
  "fundingRate": 0.000267
 },
 {
  "premiumAt": "2021-01-05T12:00:00.000Z",
  "premium": 0.000577,
  "fundingAt": "2021-01-05T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-05T20:00:00.000Z",
  "premium": 0.000393,
  "fundingAt": "2021-01-06T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-06T04:00:00.000Z",
  "premium": 0.001483,
  "fundingAt": "2021-01-06T12:00:00.000Z",
  "fundingRate": 0.000983
 },
 {
  "premiumAt": "2021-01-06T12:00:00.000Z",
  "premium": 0.002172,
  "fundingAt": "2021-01-06T20:00:00.000Z",
  "fundingRate": 0.001672
 },
 {
  "premiumAt": "2021-01-06T20:00:00.000Z",
  "premium": 0.001197,
  "fundingAt": "2021-01-07T04:00:00.000Z",
  "fundingRate": 0.000697
 },
 {
  "premiumAt": "2021-01-07T04:00:00.000Z",
  "premium": 0.000821,
  "fundingAt": "2021-01-07T12:00:00.000Z",
  "fundingRate": 0.000321
 },
 {
  "premiumAt": "2021-01-07T12:00:00.000Z",
  "premium": 0.001351,
  "fundingAt": "2021-01-07T20:00:00.000Z",
  "fundingRate": 0.000851
 },
 {
  "premiumAt": "2021-01-07T20:00:00.000Z",
  "premium": 0.001793,
  "fundingAt": "2021-01-08T04:00:00.000Z",
  "fundingRate": 0.001293
 },
 {
  "premiumAt": "2021-01-08T04:00:00.000Z",
  "premium": 0.001222,
  "fundingAt": "2021-01-08T12:00:00.000Z",
  "fundingRate": 0.000722
 },
 {
  "premiumAt": "2021-01-09T04:00:00.000Z",
  "premium": 0.000694,
  "fundingAt": "2021-01-09T12:00:00.000Z",
  "fundingRate": 0.000194
 },
 {
  "premiumAt": "2021-01-09T12:00:00.000Z",
  "premium": 0.000141,
  "fundingAt": "2021-01-09T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-09T20:00:00.000Z",
  "premium": 0.000531,
  "fundingAt": "2021-01-10T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-10T04:00:00.000Z",
  "premium": 0.001384,
  "fundingAt": "2021-01-10T12:00:00.000Z",
  "fundingRate": 0.000884
 },
 {
  "premiumAt": "2021-01-10T12:00:00.000Z",
  "premium": 0.00146,
  "fundingAt": "2021-01-10T20:00:00.000Z",
  "fundingRate": 0.00096
 },
 {
  "premiumAt": "2021-01-10T20:00:00.000Z",
  "premium": 0.00107,
  "fundingAt": "2021-01-11T04:00:00.000Z",
  "fundingRate": 0.00057
 },
 {
  "premiumAt": "2021-01-11T04:00:00.000Z",
  "premium": 0.00139,
  "fundingAt": "2021-01-11T12:00:00.000Z",
  "fundingRate": 0.00089
 },
 {
  "premiumAt": "2021-01-11T12:00:00.000Z",
  "premium": 0.00152,
  "fundingAt": "2021-01-11T20:00:00.000Z",
  "fundingRate": 0.00102
 },
 {
  "premiumAt": "2021-01-11T20:00:00.000Z",
  "premium": 0.001469,
  "fundingAt": "2021-01-12T04:00:00.000Z",
  "fundingRate": 0.000969
 },
 {
  "premiumAt": "2021-01-12T04:00:00.000Z",
  "premium": 0.000392,
  "fundingAt": "2021-01-12T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-12T12:00:00.000Z",
  "premium": 0.000759,
  "fundingAt": "2021-01-12T20:00:00.000Z",
  "fundingRate": 0.000259
 },
 {
  "premiumAt": "2021-01-12T20:00:00.000Z",
  "premium": 0.001074,
  "fundingAt": "2021-01-13T04:00:00.000Z",
  "fundingRate": 0.000574
 },
 {
  "premiumAt": "2021-01-13T04:00:00.000Z",
  "premium": 0.000704,
  "fundingAt": "2021-01-13T12:00:00.000Z",
  "fundingRate": 0.000204
 },
 {
  "premiumAt": "2021-01-13T12:00:00.000Z",
  "premium": 0.000764,
  "fundingAt": "2021-01-13T20:00:00.000Z",
  "fundingRate": 0.000264
 },
 {
  "premiumAt": "2021-01-13T20:00:00.000Z",
  "premium": 0.001153,
  "fundingAt": "2021-01-14T04:00:00.000Z",
  "fundingRate": 0.000653
 },
 {
  "premiumAt": "2021-01-14T04:00:00.000Z",
  "premium": 0.000958,
  "fundingAt": "2021-01-14T12:00:00.000Z",
  "fundingRate": 0.000458
 },
 {
  "premiumAt": "2021-01-14T12:00:00.000Z",
  "premium": 0.001086,
  "fundingAt": "2021-01-14T20:00:00.000Z",
  "fundingRate": 0.000586
 },
 {
  "premiumAt": "2021-01-14T20:00:00.000Z",
  "premium": 0.001045,
  "fundingAt": "2021-01-15T04:00:00.000Z",
  "fundingRate": 0.000545
 },
 {
  "premiumAt": "2021-01-15T04:00:00.000Z",
  "premium": 0.001392,
  "fundingAt": "2021-01-15T12:00:00.000Z",
  "fundingRate": 0.000892
 },
 {
  "premiumAt": "2021-01-15T12:00:00.000Z",
  "premium": 0.000895,
  "fundingAt": "2021-01-15T20:00:00.000Z",
  "fundingRate": 0.000395
 },
 {
  "premiumAt": "2021-01-15T20:00:00.000Z",
  "premium": 0.000716,
  "fundingAt": "2021-01-16T04:00:00.000Z",
  "fundingRate": 0.000216
 },
 {
  "premiumAt": "2021-01-16T04:00:00.000Z",
  "premium": -0.000243,
  "fundingAt": "2021-01-16T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-16T12:00:00.000Z",
  "premium": 0.000339,
  "fundingAt": "2021-01-16T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-01-16T20:00:00.000Z",
  "premium": 0.000667,
  "fundingAt": "2021-01-17T04:00:00.000Z",
  "fundingRate": 0.000167
 },
 {
  "premiumAt": "2021-01-17T04:00:00.000Z",
  "premium": 0.000563,
  "fundingAt": "2021-01-17T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-02-10T04:00:00.000Z",
  "premium": 0.000697,
  "fundingAt": "2021-02-10T12:00:00.000Z",
  "fundingRate": 0.000197
 },
 {
  "premiumAt": "2021-02-10T12:00:00.000Z",
  "premium": 0.001531,
  "fundingAt": "2021-02-10T20:00:00.000Z",
  "fundingRate": 0.001031
 },
 {
  "premiumAt": "2021-02-10T20:00:00.000Z",
  "premium": 0.000812,
  "fundingAt": "2021-02-11T04:00:00.000Z",
  "fundingRate": 0.000312
 },
 {
  "premiumAt": "2021-02-11T04:00:00.000Z",
  "premium": 0.000457,
  "fundingAt": "2021-02-11T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-02-11T12:00:00.000Z",
  "premium": 0.000605,
  "fundingAt": "2021-02-11T20:00:00.000Z",
  "fundingRate": 0.000105
 },
 {
  "premiumAt": "2021-02-11T20:00:00.000Z",
  "premium": 0.00181,
  "fundingAt": "2021-02-12T04:00:00.000Z",
  "fundingRate": 0.00131
 },
 {
  "premiumAt": "2021-02-12T04:00:00.000Z",
  "premium": 0.001528,
  "fundingAt": "2021-02-12T12:00:00.000Z",
  "fundingRate": 0.001028
 },
 {
  "premiumAt": "2021-02-12T12:00:00.000Z",
  "premium": 0.000907,
  "fundingAt": "2021-02-12T20:00:00.000Z",
  "fundingRate": 0.000407
 },
 {
  "premiumAt": "2021-02-12T20:00:00.000Z",
  "premium": 0.000641,
  "fundingAt": "2021-02-13T04:00:00.000Z",
  "fundingRate": 0.000141
 },
 {
  "premiumAt": "2021-02-13T04:00:00.000Z",
  "premium": 0.00137,
  "fundingAt": "2021-02-13T12:00:00.000Z",
  "fundingRate": 0.00087
 },
 {
  "premiumAt": "2021-02-13T12:00:00.000Z",
  "premium": 0.001496,
  "fundingAt": "2021-02-13T20:00:00.000Z",
  "fundingRate": 0.000996
 },
 {
  "premiumAt": "2021-02-13T20:00:00.000Z",
  "premium": 0.00055,
  "fundingAt": "2021-02-14T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-02-14T04:00:00.000Z",
  "premium": 0.000411,
  "fundingAt": "2021-02-14T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-02-14T12:00:00.000Z",
  "premium": 0.002233,
  "fundingAt": "2021-02-14T20:00:00.000Z",
  "fundingRate": 0.001733
 },
 {
  "premiumAt": "2021-02-14T20:00:00.000Z",
  "premium": 0.001599,
  "fundingAt": "2021-02-15T04:00:00.000Z",
  "fundingRate": 0.001099
 },
 {
  "premiumAt": "2021-02-15T04:00:00.000Z",
  "premium": 0.000918,
  "fundingAt": "2021-02-15T12:00:00.000Z",
  "fundingRate": 0.000418
 },
 {
  "premiumAt": "2021-02-15T12:00:00.000Z",
  "premium": 0.000342,
  "fundingAt": "2021-02-15T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-02-15T20:00:00.000Z",
  "premium": 0.001051,
  "fundingAt": "2021-02-16T04:00:00.000Z",
  "fundingRate": 0.000551
 },
 {
  "premiumAt": "2021-02-16T04:00:00.000Z",
  "premium": 0.00175,
  "fundingAt": "2021-02-16T12:00:00.000Z",
  "fundingRate": 0.00125
 },
 {
  "premiumAt": "2021-02-16T12:00:00.000Z",
  "premium": 0.002023,
  "fundingAt": "2021-02-16T20:00:00.000Z",
  "fundingRate": 0.001523
 },
 {
  "premiumAt": "2021-02-16T20:00:00.000Z",
  "premium": 0.001574,
  "fundingAt": "2021-02-17T04:00:00.000Z",
  "fundingRate": 0.001074
 },
 {
  "premiumAt": "2021-02-17T04:00:00.000Z",
  "premium": 0.001111,
  "fundingAt": "2021-02-17T12:00:00.000Z",
  "fundingRate": 0.000611
 },
 {
  "premiumAt": "2021-02-17T12:00:00.000Z",
  "premium": 0.002241,
  "fundingAt": "2021-02-17T20:00:00.000Z",
  "fundingRate": 0.001741
 },
 {
  "premiumAt": "2021-02-17T20:00:00.000Z",
  "premium": 0.002454,
  "fundingAt": "2021-02-18T04:00:00.000Z",
  "fundingRate": 0.001954
 },
 {
  "premiumAt": "2021-02-18T04:00:00.000Z",
  "premium": 0.002095,
  "fundingAt": "2021-02-18T12:00:00.000Z",
  "fundingRate": 0.001595
 },
 {
  "premiumAt": "2021-03-10T04:00:00.000Z",
  "premium": 0.000583,
  "fundingAt": "2021-03-10T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-10T12:00:00.000Z",
  "premium": 0.000555,
  "fundingAt": "2021-03-10T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-10T20:00:00.000Z",
  "premium": 0.001009,
  "fundingAt": "2021-03-11T04:00:00.000Z",
  "fundingRate": 0.000509
 },
 {
  "premiumAt": "2021-03-11T04:00:00.000Z",
  "premium": 0.001193,
  "fundingAt": "2021-03-11T12:00:00.000Z",
  "fundingRate": 0.000693
 },
 {
  "premiumAt": "2021-03-11T12:00:00.000Z",
  "premium": 0.000931,
  "fundingAt": "2021-03-11T20:00:00.000Z",
  "fundingRate": 0.000431
 },
 {
  "premiumAt": "2021-03-11T20:00:00.000Z",
  "premium": 0.001,
  "fundingAt": "2021-03-12T04:00:00.000Z",
  "fundingRate": 0.0005
 },
 {
  "premiumAt": "2021-03-12T04:00:00.000Z",
  "premium": 0.001338,
  "fundingAt": "2021-03-12T12:00:00.000Z",
  "fundingRate": 0.000838
 },
 {
  "premiumAt": "2021-03-12T12:00:00.000Z",
  "premium": 0.000848,
  "fundingAt": "2021-03-12T20:00:00.000Z",
  "fundingRate": 0.000348
 },
 {
  "premiumAt": "2021-03-12T20:00:00.000Z",
  "premium": 0.00045,
  "fundingAt": "2021-03-13T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-13T04:00:00.000Z",
  "premium": 0.000371,
  "fundingAt": "2021-03-13T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-13T12:00:00.000Z",
  "premium": 0.001669,
  "fundingAt": "2021-03-13T20:00:00.000Z",
  "fundingRate": 0.001169
 },
 {
  "premiumAt": "2021-03-13T20:00:00.000Z",
  "premium": 0.001714,
  "fundingAt": "2021-03-14T04:00:00.000Z",
  "fundingRate": 0.001214
 },
 {
  "premiumAt": "2021-03-14T04:00:00.000Z",
  "premium": 0.001679,
  "fundingAt": "2021-03-14T12:00:00.000Z",
  "fundingRate": 0.001179
 },
 {
  "premiumAt": "2021-03-14T12:00:00.000Z",
  "premium": 0.001364,
  "fundingAt": "2021-03-14T20:00:00.000Z",
  "fundingRate": 0.000864
 },
 {
  "premiumAt": "2021-03-14T20:00:00.000Z",
  "premium": 0.000943,
  "fundingAt": "2021-03-15T04:00:00.000Z",
  "fundingRate": 0.000443
 },
 {
  "premiumAt": "2021-03-15T04:00:00.000Z",
  "premium": 0.000902,
  "fundingAt": "2021-03-15T12:00:00.000Z",
  "fundingRate": 0.000402
 },
 {
  "premiumAt": "2021-03-15T12:00:00.000Z",
  "premium": 0.000565,
  "fundingAt": "2021-03-15T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-15T20:00:00.000Z",
  "premium": -0.000251,
  "fundingAt": "2021-03-16T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-16T04:00:00.000Z",
  "premium": -0.000093,
  "fundingAt": "2021-03-16T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-16T12:00:00.000Z",
  "premium": 0.000129,
  "fundingAt": "2021-03-16T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-16T20:00:00.000Z",
  "premium": 0.000308,
  "fundingAt": "2021-03-17T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-17T04:00:00.000Z",
  "premium": 0.000396,
  "fundingAt": "2021-03-17T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-17T12:00:00.000Z",
  "premium": 0.000188,
  "fundingAt": "2021-03-17T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-17T20:00:00.000Z",
  "premium": 0.000298,
  "fundingAt": "2021-03-18T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-03-18T04:00:00.000Z",
  "premium": 0.001194,
  "fundingAt": "2021-03-18T12:00:00.000Z",
  "fundingRate": 0.000694
 },
 {
  "premiumAt": "2021-04-10T04:00:00.000Z",
  "premium": 0.000872,
  "fundingAt": "2021-04-10T12:00:00.000Z",
  "fundingRate": 0.000372
 },
  {
  "premiumAt": "2021-04-10T20:00:00.000Z",
  "premium": 0.001828,
  "fundingAt": "2021-04-11T04:00:00.000Z",
  "fundingRate": 0.001328
 },
 {
  "premiumAt": "2021-04-11T04:00:00.000Z",
  "premium": 0.000995,
  "fundingAt": "2021-04-11T12:00:00.000Z",
  "fundingRate": 0.000495
 },
 {
  "premiumAt": "2021-04-11T12:00:00.000Z",
  "premium": 0.001407,
  "fundingAt": "2021-04-11T20:00:00.000Z",
  "fundingRate": 0.000907
 },
 {
  "premiumAt": "2021-04-11T20:00:00.000Z",
  "premium": 0.001567,
  "fundingAt": "2021-04-12T04:00:00.000Z",
  "fundingRate": 0.001067
 },
 {
  "premiumAt": "2021-04-12T04:00:00.000Z",
  "premium": 0.001414,
  "fundingAt": "2021-04-12T12:00:00.000Z",
  "fundingRate": 0.000914
 },
 {
  "premiumAt": "2021-04-12T12:00:00.000Z",
  "premium": 0.001805,
  "fundingAt": "2021-04-12T20:00:00.000Z",
  "fundingRate": 0.001305
 },
 {
  "premiumAt": "2021-04-12T20:00:00.000Z",
  "premium": 0.001241,
  "fundingAt": "2021-04-13T04:00:00.000Z",
  "fundingRate": 0.000741
 },
 {
  "premiumAt": "2021-04-13T04:00:00.000Z",
  "premium": 0.001231,
  "fundingAt": "2021-04-13T12:00:00.000Z",
  "fundingRate": 0.000731
 },
 {
  "premiumAt": "2021-04-13T12:00:00.000Z",
  "premium": 0.002201,
  "fundingAt": "2021-04-13T20:00:00.000Z",
  "fundingRate": 0.001701
 },
 {
  "premiumAt": "2021-04-13T20:00:00.000Z",
  "premium": 0.001782,
  "fundingAt": "2021-04-14T04:00:00.000Z",
  "fundingRate": 0.001282
 },
 {
  "premiumAt": "2021-04-14T04:00:00.000Z",
  "premium": 0.001516,
  "fundingAt": "2021-04-14T12:00:00.000Z",
  "fundingRate": 0.001016
 },
 {
  "premiumAt": "2021-04-14T12:00:00.000Z",
  "premium": 0.000991,
  "fundingAt": "2021-04-14T20:00:00.000Z",
  "fundingRate": 0.000491
 },
 {
  "premiumAt": "2021-04-14T20:00:00.000Z",
  "premium": 0.001191,
  "fundingAt": "2021-04-15T04:00:00.000Z",
  "fundingRate": 0.000691
 },
 {
  "premiumAt": "2021-04-15T04:00:00.000Z",
  "premium": 0.000755,
  "fundingAt": "2021-04-15T12:00:00.000Z",
  "fundingRate": 0.000255
 },
 {
  "premiumAt": "2021-04-15T12:00:00.000Z",
  "premium": 0.000876,
  "fundingAt": "2021-04-15T20:00:00.000Z",
  "fundingRate": 0.000376
 },
 {
  "premiumAt": "2021-04-15T20:00:00.000Z",
  "premium": 0.000786,
  "fundingAt": "2021-04-16T04:00:00.000Z",
  "fundingRate": 0.000286
 },
 {
  "premiumAt": "2021-04-16T04:00:00.000Z",
  "premium": 0.001164,
  "fundingAt": "2021-04-16T12:00:00.000Z",
  "fundingRate": 0.000664
 },
 {
  "premiumAt": "2021-04-16T12:00:00.000Z",
  "premium": 0.000378,
  "fundingAt": "2021-04-16T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-04-16T20:00:00.000Z",
  "premium": -0.000243,
  "fundingAt": "2021-04-17T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-04-17T04:00:00.000Z",
  "premium": 0.000031,
  "fundingAt": "2021-04-17T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-04-17T12:00:00.000Z",
  "premium": 0.000364,
  "fundingAt": "2021-04-17T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-04-17T20:00:00.000Z",
  "premium": 0.000201,
  "fundingAt": "2021-04-18T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-04-18T04:00:00.000Z",
  "premium": -0.000534,
  "fundingAt": "2021-04-18T12:00:00.000Z",
  "fundingRate": -0.000034
 },
 {
  "premiumAt": "2021-05-10T04:00:00.000Z",
  "premium": 0.000489,
  "fundingAt": "2021-05-10T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-10T12:00:00.000Z",
  "premium": 0.000979,
  "fundingAt": "2021-05-10T20:00:00.000Z",
  "fundingRate": 0.000479
 },
 {
  "premiumAt": "2021-05-10T20:00:00.000Z",
  "premium": 0.000557,
  "fundingAt": "2021-05-11T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-11T04:00:00.000Z",
  "premium": 0.000018,
  "fundingAt": "2021-05-11T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-11T12:00:00.000Z",
  "premium": -0.00002,
  "fundingAt": "2021-05-11T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-11T20:00:00.000Z",
  "premium": 0.000115,
  "fundingAt": "2021-05-12T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-12T04:00:00.000Z",
  "premium": 0.000067,
  "fundingAt": "2021-05-12T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-12T12:00:00.000Z",
  "premium": 0.00044,
  "fundingAt": "2021-05-12T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-12T20:00:00.000Z",
  "premium": 0.000022,
  "fundingAt": "2021-05-13T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-13T04:00:00.000Z",
  "premium": -0.0005667596371882084,
  "fundingAt": "2021-05-13T12:00:00.000Z",
  "fundingRate": -0.000067
 },
 {
  "premiumAt": "2021-05-13T12:00:00.000Z",
  "premium": -0.000276,
  "fundingAt": "2021-05-13T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-13T20:00:00.000Z",
  "premium": 0.000078,
  "fundingAt": "2021-05-14T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-14T04:00:00.000Z",
  "premium": -0.000208,
  "fundingAt": "2021-05-14T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-14T12:00:00.000Z",
  "premium": -0.000203,
  "fundingAt": "2021-05-14T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-14T20:00:00.000Z",
  "premium": -0.000217,
  "fundingAt": "2021-05-15T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-15T04:00:00.000Z",
  "premium": -0.000128,
  "fundingAt": "2021-05-15T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-15T12:00:00.000Z",
  "premium": -0.00008,
  "fundingAt": "2021-05-15T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-15T20:00:00.000Z",
  "premium": -0.000004,
  "fundingAt": "2021-05-16T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-16T04:00:00.000Z",
  "premium": 0.000322,
  "fundingAt": "2021-05-16T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-16T12:00:00.000Z",
  "premium": 0.00034,
  "fundingAt": "2021-05-16T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-16T20:00:00.000Z",
  "premium": 0.000045,
  "fundingAt": "2021-05-17T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-17T04:00:00.000Z",
  "premium": 0.000269,
  "fundingAt": "2021-05-17T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-17T12:00:00.000Z",
  "premium": 0.000135,
  "fundingAt": "2021-05-17T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-17T20:00:00.000Z",
  "premium": 0.000034,
  "fundingAt": "2021-05-18T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-05-18T04:00:00.000Z",
  "premium": -0.000115,
  "fundingAt": "2021-05-18T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-06-04T04:00:00.000Z",
  "premium": -0.000943,
  "fundingAt": "2021-06-04T12:00:00.000Z",
  "fundingRate": -0.000443
 },
 {
  "premiumAt": "2021-06-04T12:00:00.000Z",
  "premium": -0.000531,
  "fundingAt": "2021-06-04T20:00:00.000Z",
  "fundingRate": -0.000031
 },
 {
  "premiumAt": "2021-06-04T20:00:00.000Z",
  "premium": -0.001173,
  "fundingAt": "2021-06-05T04:00:00.000Z",
  "fundingRate": -0.000673
 },
 {
  "premiumAt": "2021-06-05T04:00:00.000Z",
  "premium": -0.000936,
  "fundingAt": "2021-06-05T12:00:00.000Z",
  "fundingRate": -0.000436
 },
 {
  "premiumAt": "2021-06-05T12:00:00.000Z",
  "premium": -0.000693,
  "fundingAt": "2021-06-05T20:00:00.000Z",
  "fundingRate": -0.000193
 },
 {
  "premiumAt": "2021-06-05T20:00:00.000Z",
  "premium": -0.00079,
  "fundingAt": "2021-06-06T04:00:00.000Z",
  "fundingRate": -0.00029
 },
 {
  "premiumAt": "2021-06-06T04:00:00.000Z",
  "premium": -0.000972,
  "fundingAt": "2021-06-06T12:00:00.000Z",
  "fundingRate": -0.000472
 },
 {
  "premiumAt": "2021-06-06T12:00:00.000Z",
  "premium": -0.000476,
  "fundingAt": "2021-06-06T20:00:00.000Z",
  "fundingRate": 0.000024
 },
 {
  "premiumAt": "2021-06-06T20:00:00.000Z",
  "premium": -0.000387,
  "fundingAt": "2021-06-07T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-06-07T04:00:00.000Z",
  "premium": -0.000598,
  "fundingAt": "2021-06-07T12:00:00.000Z",
  "fundingRate": -0.000098
 },
 {
  "premiumAt": "2021-06-07T12:00:00.000Z",
  "premium": -0.000784,
  "fundingAt": "2021-06-07T20:00:00.000Z",
  "fundingRate": -0.000284
 },
 {
  "premiumAt": "2021-06-07T20:00:00.000Z",
  "premium": -0.000776,
  "fundingAt": "2021-06-08T04:00:00.000Z",
  "fundingRate": -0.000276
 },
 {
  "premiumAt": "2021-06-08T04:00:00.000Z",
  "premium": -0.001281,
  "fundingAt": "2021-06-08T12:00:00.000Z",
  "fundingRate": -0.000781
 },
 {
  "premiumAt": "2021-06-08T12:00:00.000Z",
  "premium": -0.00058,
  "fundingAt": "2021-06-08T20:00:00.000Z",
  "fundingRate": -0.00008
 },
 {
  "premiumAt": "2021-06-08T20:00:00.000Z",
  "premium": -0.000418,
  "fundingAt": "2021-06-09T04:00:00.000Z",
  "fundingRate": 0.000082
 },
 {
  "premiumAt": "2021-06-09T04:00:00.000Z",
  "premium": -0.000536,
  "fundingAt": "2021-06-09T12:00:00.000Z",
  "fundingRate": -0.000036
 },
 {
  "premiumAt": "2021-06-09T12:00:00.000Z",
  "premium": -0.001154,
  "fundingAt": "2021-06-09T20:00:00.000Z",
  "fundingRate": -0.000654
 },
 {
  "premiumAt": "2021-06-09T20:00:00.000Z",
  "premium": -0.000797,
  "fundingAt": "2021-06-10T04:00:00.000Z",
  "fundingRate": -0.000297
 },
 {
  "premiumAt": "2021-06-10T04:00:00.000Z",
  "premium": -0.000664,
  "fundingAt": "2021-06-10T12:00:00.000Z",
  "fundingRate": -0.000164
 },
 {
  "premiumAt": "2021-06-10T12:00:00.000Z",
  "premium": -0.000241,
  "fundingAt": "2021-06-10T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-06-10T20:00:00.000Z",
  "premium": -0.000598,
  "fundingAt": "2021-06-11T04:00:00.000Z",
  "fundingRate": -0.000098
 },
 {
  "premiumAt": "2021-06-11T04:00:00.000Z",
  "premium": -0.000719,
  "fundingAt": "2021-06-11T12:00:00.000Z",
  "fundingRate": -0.000219
 },
 {
  "premiumAt": "2021-06-11T12:00:00.000Z",
  "premium": -0.000492,
  "fundingAt": "2021-06-11T20:00:00.000Z",
  "fundingRate": 0.000008
 },
 {
  "premiumAt": "2021-06-11T20:00:00.000Z",
  "premium": -0.000326,
  "fundingAt": "2021-06-12T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-06-12T04:00:00.000Z",
  "premium": -0.000673,
  "fundingAt": "2021-06-12T12:00:00.000Z",
  "fundingRate": -0.000173
 },
 {
  "premiumAt": "2021-10-15T04:00:00.000Z",
  "premium": 0.000328,
  "fundingAt": "2021-10-15T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-15T12:00:00.000Z",
  "premium": 0.000764,
  "fundingAt": "2021-10-15T20:00:00.000Z",
  "fundingRate": 0.000264
 },
 {
  "premiumAt": "2021-10-15T20:00:00.000Z",
  "premium": 0.000893,
  "fundingAt": "2021-10-16T04:00:00.000Z",
  "fundingRate": 0.000393
 },
 {
  "premiumAt": "2021-10-16T04:00:00.000Z",
  "premium": 0.000531,
  "fundingAt": "2021-10-16T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-16T12:00:00.000Z",
  "premium": 0.000616,
  "fundingAt": "2021-10-16T20:00:00.000Z",
  "fundingRate": 0.000116
 },
 {
  "premiumAt": "2021-10-16T20:00:00.000Z",
  "premium": 0.00063,
  "fundingAt": "2021-10-17T04:00:00.000Z",
  "fundingRate": 0.00013
 },
 {
  "premiumAt": "2021-10-17T04:00:00.000Z",
  "premium": 0.000688,
  "fundingAt": "2021-10-17T12:00:00.000Z",
  "fundingRate": 0.000188
 },
 {
  "premiumAt": "2021-10-17T12:00:00.000Z",
  "premium": 0.000618,
  "fundingAt": "2021-10-17T20:00:00.000Z",
  "fundingRate": 0.000118
 },
 {
  "premiumAt": "2021-10-17T20:00:00.000Z",
  "premium": 0.000719,
  "fundingAt": "2021-10-18T04:00:00.000Z",
  "fundingRate": 0.000219
 },
 {
  "premiumAt": "2021-10-18T04:00:00.000Z",
  "premium": 0.000809,
  "fundingAt": "2021-10-18T12:00:00.000Z",
  "fundingRate": 0.000309
 },
 {
  "premiumAt": "2021-10-18T12:00:00.000Z",
  "premium": 0.00069,
  "fundingAt": "2021-10-18T20:00:00.000Z",
  "fundingRate": 0.00019
 },
 {
  "premiumAt": "2021-10-18T20:00:00.000Z",
  "premium": -0.000039,
  "fundingAt": "2021-10-19T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-19T04:00:00.000Z",
  "premium": 0.000115,
  "fundingAt": "2021-10-19T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-19T12:00:00.000Z",
  "premium": 0.000301,
  "fundingAt": "2021-10-19T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-19T20:00:00.000Z",
  "premium": 0.000185,
  "fundingAt": "2021-10-20T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-20T04:00:00.000Z",
  "premium": 0.000225,
  "fundingAt": "2021-10-20T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-20T12:00:00.000Z",
  "premium": 0.000267,
  "fundingAt": "2021-10-20T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-20T20:00:00.000Z",
  "premium": 0.001219,
  "fundingAt": "2021-10-21T04:00:00.000Z",
  "fundingRate": 0.000719
 },
 {
  "premiumAt": "2021-10-21T04:00:00.000Z",
  "premium": 0.001054,
  "fundingAt": "2021-10-21T12:00:00.000Z",
  "fundingRate": 0.000554
 },
 {
  "premiumAt": "2021-10-21T12:00:00.000Z",
  "premium": 0.000468,
  "fundingAt": "2021-10-21T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-21T20:00:00.000Z",
  "premium": 0.000563,
  "fundingAt": "2021-10-22T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-22T04:00:00.000Z",
  "premium": 0.000007,
  "fundingAt": "2021-10-22T12:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-22T12:00:00.000Z",
  "premium": -0.00011,
  "fundingAt": "2021-10-22T20:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-22T20:00:00.000Z",
  "premium": 0.000338,
  "fundingAt": "2021-10-23T04:00:00.000Z",
  "fundingRate": 0.0001
 },
 {
  "premiumAt": "2021-10-23T04:00:00.000Z",
  "premium": 0.000329,
  "fundingAt": "2021-10-23T12:00:00.000Z",
  "fundingRate": 0.0001
 }
];
