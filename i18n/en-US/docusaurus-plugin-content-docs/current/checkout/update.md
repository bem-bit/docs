---
sidebar_position: 6
---

# Update

### Updating a payment link.

To update a *payment link*, you need to make a **PUT** request with the following *parameters*:

**URL**

```
https://api.bembit.com/api/v1/checkouts/{id}
```

**Method**

```
PUT
```

| Params   | Type     | Default values | Description          |
| -------- | -------- | -------------- | -------------------- |
| `api`    | `string` | `undefined`    | Your _API Key_.      |
| `secret` | `string` | `undefined`    | Your _Secret_.       |
| `id`     | `string` | `undefined`    | Payment's link _ID_. |

:::note Important
The parameters for this request should be passed to the endpoint via _headers_, and the **ID** must be included in the **URL** at the time of the request.
:::

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
    "highlightTokens": [
      "string"
    ]
  }
}
```
<br />

- **Slug**: Alias of the payment link, a string that identifies your payment link.

- **Title**: Title or name of the payment link, defined at the time of creation.

- **Description**: Description of the link/payment.

- **Logo**: URL of the image of the logo used in the payment link.

- **paymentMethodPix** / *enabled*: Status of the PIX payment method, true if enabled or false if not.

- **paymentMethodPix** / *expiryTimeInMinutes*: Expiry time in minutes for the generated QR code for payment.

- **paymentMethodCrypto** / *enabled*: Defines whether cryptocurrency payment is accepted.

- **paymentMethodCrypto** / *expiryTimeInMinutes*: Expiry time in minutes for the generated QR code for payment.

- **paymentMethodCrypto** / *allTokens*: true if all cryptocurrencies are accepted, otherwise false.

- **paymentMethodCrypto** / *highlightTokens*: An array of strings containing the symbols of the accepted tokens.

<br />

### cURL:

```c
curl -X 'PUT' \
  'https://api.bembit.com/api/v1/checkouts/648079c90c9807b171a911a2' \
  -H 'accept: */*' \
  -H 'api: [Your API]' \
  -H 'secret: [Your Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
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
    "highlightTokens": [
      "string"
    ]
  }
}'
```

See and test our API on [Swagger](https://api.bembit.com/docs/#/Checkouts/put_checkouts__id_).

