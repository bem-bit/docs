---
sidebar_position: 3
---

# Payment's link creation

### Generating a new payment link for your request.

To generate a new payment link, you need to make a _POST_ request with the following parameters:

**URL**

```
https://api.bembit.com/api/v1/checkouts
```

**Method**

```
POST
```

### Params

:::note Important
To generate a new payment link, you need to send a **POST** request to the designated end-point. The required parameters for this request should be included in the request headers, while the additional data should be included in the request body.
:::

| Params   | Type     | Default values | Description     |
| -------- | -------- | -------------- | --------------- |
| `api`    | `string` | `undefined`    | Your _API Key_. |
| `secret` | `string` | `undefined`    | Your _secret_.  |

## Request Body:

```json
{
  "slug": "string",
  "title": "string",
  "description": "short description",
  "logo": "string",
  "paymentMethodPix": {
    "enabled": true,
    "expiryTimeInMinutes": 5
  },
  "paymentMethodCrypto": {
    "enabled": true,
    "expiryTimeInMinutes": 30,
    "allTokens": true,
    "highlightTokens": ["string"]
  }
}
```

- **_Slug:_** Payment's alias (defined when the link is first created).
- **_Title:_** It's _Checkout's_ title, defined when the link is first created.
- **_Description:_** Payment description.
- **_Logo:_** The **_URL_** of the _payment's logo_ image.

- **_paymentMethodPix / enabled:_** Indicate the instances in which the **PIX** payment method is accessible for the ongoing payment process.
- **_paymentMethodPix / expiryTimeInMinutes:_** Time in _minutes_ for the **QR Code's** lifetime.

- **_paymentMethodCrypto / enabled:_** Indicate the instances in which the **Crypto** payment method is accessible for the ongoing payment process.
- **_paymentMethodCrypto / expiryTimeInMinutes:_** Time in _minutes_ for the current's **payment** lifetime.
- **_paymentMethodCrypto / allTokens:_** It will appear as **true** when all cryptocurrencies are accepted on the current payment.
- **_paymentMethodCrypto / highlightTokens:_** It's an **_Array of strings_** that contains all the symbols from the accepted cryptocurrencies for the ongoing payment.

### cURL:

```c
curl -X 'POST' \
  'https://api-sandbox.bembit.com/api/v1/checkouts' \
  -H 'accept: */*' \
  -H 'api: [API]' \
  -H 'secret: [Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "slug": "string",
  "title": "string",
  "description": "Short description",
  "logo": "string",
  "paymentMethodPix": {
    "enabled": true,
    "expiryTimeInMinutes": 5
  },
  "paymentMethodCrypto": {
    "enabled": true,
    "expiryTimeInMinutes": 30,
    "allTokens": true,
    "highlightTokens": [
      "string"
    ]
  }
}'
```

## Respostas do Server:

### Status 201:

    Created

### Status 403:

    Unauthenticated

See and test our API on [Swagger](https://api.bembit.com/docs/#/Checkouts/post_checkouts).