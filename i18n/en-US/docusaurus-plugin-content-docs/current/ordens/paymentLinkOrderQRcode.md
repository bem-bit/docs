---
sidebar_position: 8
---

# Checkout's QR Code

### Getting the QR Code image.

To obtain the ***QR code*** image of an order associated with your _payment link_, you need to make a **GET** request with the following configuration:

**URL**

```
https://api-sandbox.bembit.com/api/v1/orders/{orderId}/qrcode.png
```

**Method**

```
GET
```

**cURL**
```s
curl -X 'GET' \
  'https://api-sandbox.bembit.com/api/v1/orders/{orderId}/qrcode.png' \
  -H 'accept: image/png'
```

### Params

:::note Important
The parameter ***checkoutid*** should be embedded in the ***URI*** of the request, as shown in the link above.
:::

| Params    | Type     | Default values | Description                                                       |
| ------------ | -------- | ------------ | --------------------------------------------------------------- |
| `orderId`    | `string` | `undefined`  | Order **ID**.|

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

See and test our API on [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__id__qrcode_png).