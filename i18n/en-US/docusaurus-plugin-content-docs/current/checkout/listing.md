---
sidebar_position: 2
---

# Payments list

### Listing all payments

To list all payments, it is necessary to make a **GET** request passing the defined parameters as follows:

**URL**

```
https://api.bembit.com/api/v1/checkouts
```

**Method**

```
GET
```

**Params**

:::note Important
The parameters for this request should be passed to the end-point via _headers_ at the time of the request.
:::

| Params | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | Your _API Key_. |
| `secret`  | `string` | `undefined`  | Your _secret_. |

---

# cURL

```cURL
curl -X 'GET' \
  'https://api-sandbox.bembit.com/api/v1/checkouts' \
  -H 'accept: application/json' \
  -H 'api: [API]' \
  -H 'secret: [Secret]'
```

**Server Responses:**

### Status 200:

_Response Body:_

```json
[
  {
    "title": "string",
    "description": "string",
    "slug": "string",
    "active": true,
    "paymentMethodPix": {
      "expiryTimeInMinutes": 0,
      "enabled": true
    },
    "paymentMethodCrypto": {
      "highlightTokens": [
        "string"
      ],
      "enabled": true,
      "allTokens": true,
      "expiryTimeInMinutes": 0
    },
    "logo": "string",
    "createdAt": "2023-06-07T15:58:10.961Z",
    "updatedAt": "2023-06-07T15:58:10.961Z",
    "id": "string"
  }
]
```


- **_Title:_** It's _Checkout's_ title, defined when the link is first created.
- **_Description:_** Payment description.
- **_Slug:_** Payment's alias (defined when the link is first created).
- **_Active:_** _Checkout's link_ status.
- **_paymentMethodPix / expiryTimeInMinutes:_** Time in _minutes_ for the **QR Code's** lifetime.
- **_paymentMethodPix / enabled:_** Indicate the instances in which the **PIX** payment method is accessible for the ongoing payment process.
- **_paymentMethodCrypto / highlightTokens:_** It's an **_Array of strings_** that contains all the symbols from the accepted cryptocurrencies for the ongoing payment.
- **_paymentMethodCrypto / enabled:_** Indicate the instances in which the **Crypto** payment method is accessible for the ongoing payment process.
- **_paymentMethodCrypto / allTokens:_** It will appear as **true** when all cryptocurrencies are accepted on the current payment.
- **_paymentMethodCrypto / expiryTimeInMinutes:_** Time in _minutes_ for the current's **payment** lifetime.
- **_Logo:_** The **_URL_** of the _payment's logo_ image.
- **_CreatedAt:_** Payment creation date.
- **_UpdatedAt:_** Payment update date.
- **_Id:_** The ongoing payment ID.

### Status 401:

_Response Body:_

```json
{
  "error": true
}
```

See and test our API on [Swagger](https://api.bembit.com/docs/#/Checkouts/get_checkouts).
