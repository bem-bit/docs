---
sidebar_position: 1
---

# Orders list

### Retrieving the orders list.

To obtain a list of all orders created in your account, it is necessary to make a **GET** request following the parameters provided below:

**URL**

```
https://api.bembit.com/api/v1/orders
```

**Method**

```
GET
```

**Params**

:::note Important!
The parameters for this request must be passed to the **end-point** via _headers_.
:::

| Params   | Type     | Default values | Description  |
| -------- | -------- | -------------- | ------------ |
| `api`    | `string` | `undefined`    | Your API Key |
| `secret` | `string` | `undefined`    | Your Secret  |

# cURL

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/orders' \
  -H 'accept: application/json' \
  -H 'api: [Your API]' \
  -H 'secret: [Your Secret]'
```

---

## Server Responses:

### Status 200:

    Success

_Response Example value:_

```json
[
  {
    "application": "CHECKOUT",
    "status": "created",
    "subtotal": 1000,
    "total": 1000,
    "fee": 0,
    "rate": 5,
    "discount": {
      "fixed": 0,
      "percentage": "0"
    }
  }
]
```

- **_application:_** States what application is using this order, values can be _Checkout_, _Swap_, _Exchange_.
- **_status:_** Shows the **_status_** of the current order.
- **_subtotal:_** Displays the cost of this order without fee values.
- **_total:_** Represents the total cost of the order including fees.
- **_fee:_** Fee values when applies.
- **_rate:_** It's the base **US Dollar** quotation regarding **Brazilian Real**, at the momment the order was created.
- **_discount/fixed:_** Discount values when applies.
- **_discount/percentage:_** Discount percent, when applies.

### Status 403:

    Unauthorized

See and test our API on [Swagger](https://api.bembit.com/docs/#/Orders/get_orders).
