---
sidebar_position: 4
---

# Deleting a key

### Deleting an API Key.

In order to eliminate an **API** key it´s sent a **DELETE** request as shown below:

**URL**

```
https://api.bembit.com/api/v1/users/credentials/{id}
```

### cURL

```c
curl -X 'DELETE' \
  'https://api.bembit.com/api/v1/users/credentials/{id}' \
  -H 'accept: */*' \
  -H 'api: {Your API}' \
  -H 'secret: {Your secret}'
```

**Method**

```
DELETE
```

### Params

| Param    | Type     | Default values | Description                                          |
| -------- | -------- | -------------- | ---------------------------------------------------- |
| `api`    | `string` | `undefined`    | API Key obtained from the platform.                       |
| `secret` | `string` | `undefined`    | Secret obtained from the platform.                       |
| `id`     | `string` | `undefined`    | Identificador da chave, obtido na criação do acesso. |

:::note Important
The parameters for this request should be passed to the endpoint via *headers*, except for the **Key ID**, which should be directly _embedded_ in the **URI** path as shown [here](#curl).
:::

## Server response:

### Status 200:

    Success

### Status 403:

    Unauthorized

See this in action on [Swagger](https://api.bembit.com/docs/#/Users/delete_users_credentials__id_).
