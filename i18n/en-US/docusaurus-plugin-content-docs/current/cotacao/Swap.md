---
sidebar_position: 5
---

# Base Quote (USD/BRL)

Returns the **Dolar vs Brazilian Real** quote valid at the momment of the request.

**URL**

```
https://api.bembit.com/api/v1/quotation/book/{value}
```

**Method**

```
GET
```

**Params**

:::note Important!
Params for this _request_ must be passed through the _URI_ when the _request_ is made.
:::

| Params   | Type     | Default values | Description   |
| -------- | -------- | -------------- | ------------- |
| `amount` | `number` | `0`            | Desired value |

### cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/quotation/book/{value}' \
  -H 'accept: application/json'
```

### Response Body

```c
{
  "amount": 1,
  "buy": 5.071668,
  "sell": 5.0706299999999995,
  "currency": "BRL"
}
```

- **_amount:_** The amount to be quoted.
- **_buy:_** How many _tokens_ will be **bought**.
- **_sell:_** How many _tokens_ will be **sold**.
- **_currency:_** Currency being quoted.

See and test our _API_ on [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_book__amount_).
