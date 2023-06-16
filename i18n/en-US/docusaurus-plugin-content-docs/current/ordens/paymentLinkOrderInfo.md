---
sidebar_position: 7
---

# Checkout link details

### Retrieving all information abour a checkout link.

To retrieve information about a specific order associated with your **_checkout page_** using this **API** endpoint, you will need to make a **GET** request with the following configuration;

**URL**

```
https://api-sandbox.bembit.com/api/v1/orders/{checkoutId}/checkout/{orderId}
```

**Method**

```
GET
```

**cURL**

```s
curl -X 'GET' \
  'https://api-sandbox.bembit.com/api/v1/orders/{checkoutId}/checkout/{orderId}' \
  -H 'accept: */*'
```

### Params

:::note Important
The parameter **checkoutid** should be included in the **_URI_** of the request, as shown in the link above.
:::

| Params       | Type     | Default values | Description                |
| ------------ | -------- | -------------- | -------------------------- |
| `checkoutId` | `string` | `undefined`    | Checkout's link **Alias**. |
| `orderId`    | `string` | `undefined`    | Order **Id**.              |

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Checkout not found

See and test our API on [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__checkoutId__checkout__orderId_).