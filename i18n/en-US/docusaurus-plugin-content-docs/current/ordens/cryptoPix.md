---
sidebar_position: 9
---

# Using PIX

### Buy cryptocurrencies using PIX as payment.

To perform a **SWAP** or purchase _cryptocurrencies_ using **PIX**, you need to make a **POST** request with the following configuration:

**URL**

```
https://api.bembit.com/api/v1/orders/swap/fiat-to-crypto
```

**Method**

```
POST
```

### Params

:::note Important!
The _parameters_ for this request should be passed to the endpoint via _headers_, along with the **request body** at the time of the request.
:::

| Params   | Type     | Default values | Description  |
| -------- | -------- | -------------- | ------------ |
| `api`    | `string` | `undefined`    | Your API.    |
| `secret` | `string` | `undefined`    | Your Secret. |

# cURL

```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/orders/swap/fiat-to-crypto' \
  -H 'accept: */*' \
  -H 'api: {Your API}' \
  -H 'secret: {Your secret}' \
  -H 'Content-Type: application/json' \
  -d '{
  "amount": 1,
  "recipient": {
    "tokenToReceive": "string",
    "walletToReceive": "string",
    "network": integer,
  }
}'
```

## Request Body:

```json
{
  "amount": 1000,
  "recipient": {
    "tokenToReceive": "string",
    "walletToReceive": "string",
    "network": 0
  }
}
```

- **_amount:_** Swap **value**.
- **_recipient / tokenToReceive:_** Symbol of the _token_ being purchased.
- **_recipient / walletToReceive:_** _Address_ of the **wallet** where the **token** will be sent upon completing the operation.
- **_recipient / network:_** Identification number of the **blockchain** where the **token** being purchased is located.

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Unable to do swap

See and test our API on [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_swap_fiat_to_crypto).