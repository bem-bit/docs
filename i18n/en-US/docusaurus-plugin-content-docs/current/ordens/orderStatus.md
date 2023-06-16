---
sidebar_position: 3
---

# Order status

### Retrieving the status of an order.

To obtain the status of an order, it is necessary to make a GET request with the following configuration:

**URL**

```
https://api.bembit.com/api/v1/orders/{id}/status
```

**Method**

```
GET
```

**Params**

:::note Important!
For this request, the **id** of the order being queried must be included in the _URL_ of the request.
:::

| Params | Type     | Default values | Description |
| ------ | -------- | -------------- | ----------- |
| `id`   | `string` | `undefined`    | Order Id.   |

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/orders/{id}/status' \
  -H 'accept: application/json'
```

---

## Server Responses:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

See and _test_ our **API** on [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__id__status).
