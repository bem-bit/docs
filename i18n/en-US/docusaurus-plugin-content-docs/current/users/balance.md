---
sidebar_position: 1
---

# Balance

### Getting the account balance.

To obtain the account balance information, it is necessary to make a GET request, providing the corresponding credentials through HEADERS.

**URL**

```
https://api.bembit.com/api/v1/users/balance
```

**Method**

```
GET
```

### Params

:::note Important
The parameters for this request should be passed to the end-point via headers.

:::

| Param    | Type     | Default values | Description                         |
| -------- | -------- | -------------- | ----------------------------------- |
| `api`    | `string` | `undefined`    | API Key obtained from the platform. |
| `secret` | `string` | `undefined`    | Secret obtained from the platform.  |

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/users/balance' \
  -H 'accept: application/json' \
  -H 'api: {Your API}' \
  -H 'secret: {Your secret}'
```

## Server responses:

### Status 200:

    Success

**_Example value:_**

```c
[
  {
    "currency": "BRL",
    "amount": 0,
    "blocked": 0
  }
]
```

### Status 403:

    Unauthorized

See this in action on [Swagger](https://api.bembit.com/docs/#/Users/get_users_balance).
