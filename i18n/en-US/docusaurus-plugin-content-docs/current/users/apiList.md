---
sidebar_position: 3
---

# List of keys

### Obtaining a list of generated API Keys.

In order to get a list of all _API Keys_ previously generated, you must send a **GET** request following those settings:

**URL**

```
https://api.bembit.com/api/v1/users/credentials
```

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/users/credentials' \
  -H 'accept: */*' \
  -H 'api: {Your API}' \
  -H 'secret: {Your secret}'
```

**Methods**

```
GET
```

### Params

| Param    | Type     | Default values | Description                         |
| -------- | -------- | -------------- | ----------------------------------- |
| `api`    | `string` | `undefined`    | API Key obtained from the platform. |
| `secret` | `string` | `undefined`    | Secret obtained from the platform.  |

:::note Important
The parameters for this request should be passed to the end-point via _headers_.
:::

## Server responses:

### Status 200:

    Success

**_Response Body:_**

```c
[
  {
    "key": "{Access key}",
    "expiresAt": "{Expiration date}",
    "createdAt": "{Creation date}",
    "updatedAt": "{Date of update}",
    "id": "{Access key ID}"
  },
  {
    "key": "xxxxxx",
    "expiresAt": "xxxxxxxxxx",
    "createdAt": "xxxxxxxxxx",
    "updatedAt": "xxxxxxxxxx",
    "id": "xxxxx"
  }
]
```

### Status 403:

    Unauthorized

See this in action on [Swagger](https://api.bembit.com/docs/#/Users/get_users_credentials).
