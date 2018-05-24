MobX toJS() Issue
=================

```bash
$ yarn install
$ yarn test
```

Output:

```
FAIL  src/order.test.ts
  ✕ Order is serialized correctly (14ms)

  ● Order is serialized correctly

    expect(received).toEqual(expected)

    Expected value to equal:
      {"id": "o100", "quantity": 10000, "symbol": "AAPL"}
    Received:
      {"id": "o100", "quantity": 10000, "serialize": [Function anonymous], "symbol": "AAPL"}

    Difference:

    - Expected
    + Received

      Object {
        "id": "o100",
        "quantity": 10000,
    +   "serialize": [Function anonymous],
        "symbol": "AAPL",
      }

      4 |     const order = new Order('o100', 'AAPL', 10000);
      5 |     const jsOrder = order.serialize();
    > 6 |     expect(jsOrder).toEqual({
      7 |         id: 'o100',
      8 |         symbol: 'AAPL',
      9 |         quantity: 10000

      at Object.<anonymous> (src/order.test.ts:6:21)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.27s
Ran all test suites.
error Command failed with exit code 1.

```
