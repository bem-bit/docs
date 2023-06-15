---
sidebar_position: 1
---

# Info

### Retrieving payment info

In order to get detailed information about a particular payment you need to send a **GET** request with the _slug_ of the payment on it:

**URL**

```
https://api.bembit.com/api/v1/checkouts/{slug}
```

**Method**

```
GET
```

**Params**

:::note Important
Params for this request must be included on the **URL**.
:::

| Params | Type     | Default values | Description                                                  |
| ------ | -------- | -------------- | ------------------------------------------------------------ |
| `slug` | `string` | `undefined`    | Checkout link alias (Defined when the link is created). |

---

# cURL

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/checkouts/{slug}' \
  -H 'accept: application/json'
```

## Server Responses:

### Status 200:

_Response Body:_

```json
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
    "highlightTokens": ["string"],
    "enabled": true,
    "allTokens": true,
    "expiryTimeInMinutes": 0
  },
  "logo": "string",
  "createdAt": "2023-06-07T12:55:04.759Z",
  "updatedAt": "2023-06-07T12:55:04.759Z",
  "id": "string"
}
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

### Status 404:

_Response Body:_

```json
{
  "httpCode": 404,
  "description": "Checkout not found."
}
```

See and test our API on [Swagger](https://api.bembit.com/docs/#/Checkouts/get_checkouts__slug_).
