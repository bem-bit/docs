---
sidebar_position: 10
---

# Bembit's Offramp endpoint.

### Sell your Cryptos and receive via PIX.

In order to sell your _TOKENS_ and receive your money via **_PIX_** using our **API**, it's required to send a **POST** request with the following specifications:

**URL**

```
https://api.bembit.com/api/v1/orders/swap/crypto-to-fiat
```

**Method**

```
POST
```

### Params

:::note Note
The params being passed to this request must be sent via _headers_ altogether with the **_request body_**.
:::

| Param    | Type     | Default value | Description                            |
| -------- | -------- | ------------- | -------------------------------------- |
| `api`    | `string` | `undefined`   | API Key obtained via Dashboard or API. |
| `secret` | `string` | `undefined`   | Secret obtained via Dashboard or API.  |

# cURL

```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/orders/swap/crypto-to-fiat' \
  -H 'accept: */*' \
  -H 'api: [Your API key]' \
  -H 'secret: [Your Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "amount": number,
  "currency": string,
  "network": number
}'
```

## Request Body:

```json
{
  "amount": number,
  "currency": string,
  "network": number
}
```

- **_amount:_** Quantity of _tokens_ being sold.
- **_currency:_** _token_ symbol.
- **_network:_** Blockchain ID number.

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Unable to do swap

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_swap_fiat_to_crypto).
