MobX toJS() Issue
=================

```bash
$ yarn install
$ yarn test
```

Output:

```
FAIL  src/order.test.ts
    Expected value to equal:
      {"id": "o100", "quantity": 10000, "symbol": "AAPL"}
    Received:
      {"id": "o100", "quantity": 10000, "serialize": [Function anonymous], "symbol": "AAPL"}
```

Fix
---
The `serialize()` function was changed to use `JSON.stringify()` followed by `JSON.parse()`:

```typescript jsx
serialize(): JsOrder {
    // return toJS(this);
    return JSON.parse(JSON.stringify(this));
}
```

See https://github.com/mobxjs/mobx/issues/1553 for a detailed explanation.
