---
sidebar_position: 4
---

# Withdrawals

### Making a withdraw request order.

To make a _withdrawal_ request on the platform via _API_, it is necessary to make a **POST** request with the following configuration:

**URL**

```
https://api.bembit.com/api/v1/orders/withdraw
```

**Method**

```
POST
```

### Params

:::note Important!
The parameters for this _request_ should be passed to the _endpoint_ via _headers_, along with the request _body_ at the time of the request.
:::

| Params     | Type      | Default values | Description                        |
| ---------- | --------- | -------------- | ---------------------------------- |
| `api`      | `string`  | `undefined`    | Your API Key                       |
| `secret`   | `string`  | `undefined`    | Your Secret                        |
| `currency` | `string`  | `undefined`    | The selected currency to withdraw. |
| `amount`   | `integer` | `0`            | Withdrawal value.                  |

## cURL:

```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/orders/withdraw' \
  -H 'accept: */*' \
  -H 'api: [Your API]' \
  -H 'secret: [Your Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "currency": "BRL",
  "amount": 1000
}'
```

## Request Body:

```json
{
  "currency": "BRL",
  "amount": 1000
}
```

- **_currency:_** Currency to wihdraw.
- **_amount:_** Withdrawal value.

## Server Responses:

### Status 200:

    Success

### Status 401:

    Error: response status is 401

### Status 403:

    Unauthorized

See and test our **API** on [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_withdraw).
