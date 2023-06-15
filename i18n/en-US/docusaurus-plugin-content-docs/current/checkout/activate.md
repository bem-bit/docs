---
sidebar_position: 4
---

# Activation

### Making your checkout link live!

To activate a payment link, it is necessary to make a _PATCH_ request following the defined parameters below:

**URL**

```
https://api.bembit.com/api/v1/checkouts/{id}/activate
```

**Method**

```
PATCH
```

### Params

:::note Important
The parameters for this request should be passed to the endpoint via _headers_, and the **ID** should be included in the **URL** when making the request.
:::

| Params   | Type     | Default values | Description          |
| -------- | -------- | -------------- | -------------------- |
| `api`    | `string` | `undefined`    | Your _API Key_.      |
| `secret` | `string` | `undefined`    | Your _Secret_.       |
| `id`     | `string` | `undefined`    | Payment's link _ID_. |

### cURL:

```cURL
curl -X 'PATCH' \
  'https://api.bembit.com/api/v1/checkouts/{id}/activate' \
  -H 'accept: */*' \
  -H 'api: [Your API Key]' \
  -H 'secret: [Your Secret]'
```

## Server Responses:

**_Response headers (example)_**

```text
access-control-allow-origin: *
alt-svc: h3=":443"; ma=86400
cf-cache-status: DYNAMIC
cf-ray: 7d497ba0fe9251cc-GRU
date: Fri,09 Jun 2023 12:47:25 GMT
nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
ratelimit-limit: 100
ratelimit-remaining: 99
ratelimit-reset: 2
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=w5oSnLcDAlObIGFVcw34h9UkyT6ZClM8Ccnb70RzEGJDEjS2vecJyliBy9EIk1m4cBciVpzrSAlI2q3w7jLYiVoOsPd%2BVDopzi2L%2FCFa1kU%2F5YE8QGJAKw0GADYtSC%2Fi3yIqiyhKDFsG%2B8xFOA%3D%3D"}],"group":"cf-nel","max_age":604800}
server: cloudflare
via: 1.1 vegur
```

### Status 200:

    Activated

### Status 403:

    Unauthorized

### Status 404:

    Not found

See and test our API on [Swagger](https://api.bembit.com/docs/#/Checkouts/patch_checkouts__id__activate).
