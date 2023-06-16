---
sidebar_position: 6
---

# Checkout links

### Creating a checkout payment link.

To _generate_ an order associated with your **_payment link_** on the platform via **API**, you need to make a **POST** request with the following configuration:

**URL**

```
https://api.bembit.com/api/v1/orders/{checkoutid}/checkout
```

**Method**

```
POST
```

### Params

:::note Important
The parameter **_checkoutid_** is embedded in the **URI** of the request as shown in the link above.
:::

| Params       | Type     | Default values | Descrption                |
| ------------ | -------- | -------------- | ------------------------- |
| `checkoutid` | `string` | `undefined`    | Payment's link **alias**. |

**Request Body:**

```c
{
  "network": 56,
  "currency": "BRL",
  "amount": 1000,
  "requester": {
    "name": "string",
    "email": "string",
    "document": "string"
  }
}
```

- **_network:_** Identifier number of the blockchain being used in this operation.
- **_currency:_** Symbol of the currency accepted in the order being created.
- **_amount:_** The amount to charge.
- **_requester / name:_** Customer's name.
- **_requester / email:_** Customer's e-mail.
- **_requester / document:_** Customer's ID.

:::note Important
The information shown in the ***Request body*** should be provided to the request as demonstrated in the following ***cURL***.
:::

```c
curl -X 'POST' \
  'https://api-sandbox.bembit.com/api/v1/orders/{checkoutid}/checkout' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "network": {blockchain id number},
  "currency": "currency symbol",
  "amount": {integer},
  "requester": {
    "name": "string",
    "email": "string",
    "document": "string"
  }
}'
```

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Checkout not found

See and test our API on [Swagger](https://api.bembit.com/docs/#/Orders/post_orders__checkoutId__checkout).
