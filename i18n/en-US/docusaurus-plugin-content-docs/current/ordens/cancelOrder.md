---
sidebar_position: 5
---

# Cancel order

### Need to cancel?, here is what you need to know:

To cancel an order on the platform via API, it is necessary to make a DELETE request with the following configuration:

:::caution Warning
**Only** when an order is created but **_has not yet entered the processing stage_**, it can be **canceled**.
:::

**URL**

```
https://api-sandbox.bembit.com/api/v1/orders/{id}/cancel
```

**Method**

```
DELETE
```

### Params

:::note Important
The parameters for this _request_ should be passed to the **endpoint** via **_headers_**, along with the **_request body_** at the time of the request.
:::

| Params   | Type     | Default values | Description      |
| -------- | -------- | -------------- | ---------------- |
| `api`    | `string` | `undefined`    | Your **API Key** |
| `secret` | `string` | `undefined`    | Your **Secret**  |
| `id`     | `string` | `undefined`    | Order **ID**.    |

### cURL:

```c
curl -X 'DELETE' \
  'https://api-sandbox.bembit.com/api/v1/orders/{id}/cancel' \
  -H 'accept: */*' \
  -H 'api: [Your API]' \
  -H 'secret: [Your secret]'
```

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

See and test our API on [Swagger](https://api.bembit.com/docs/#/Orders/delete_orders__id__cancel).
