---
sidebar_position: 2
---

# API Key

### Creating a new API Access Key.

:::caution Warning
This end-point is utility-oriented. To use it, you need to have already created an initial API access key through the platform's interface, and in case you need additional keys, you can use this end-point for that purpose.
:::

To create an API access key, it is necessary to make a POST request to the URL provided below:

**URL**

```
https://api.bembit.com/api/v1/users/credentials
```

# cURL

```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/users/credentials' \
  -H 'accept: application/json' \
  -H 'api: {Your API}' \
  -H 'secret: {Your secret}' \
  -d ''
```

**Methods**

```
POST
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
{
  "key": "{ New API key }",
  "secret": "{ New secret }",
  "expiresAt": "{ API Key expiration date }"
}
```

### Status 403:

    Unauthorized

See this in action on [Swagger](https://api.bembit.com/docs/#/Users/post_users_credentials).
