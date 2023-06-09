---
sidebar_position: 4
---

# Ativação do link

### Ativando um link de pagamento

Para ativar um link de pagamento é necessário realizar uma request do tipo **PATCH** seguindo os parámetros definidos a continuação:

**URL**

```
https://api.bembit.com/api/v1/checkouts/{id}/activate
```

**Método**

```
PATCH
```

### Parametros

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, assim como o **_id_** deve ser **incluso no url** no momento da solicitação.
:::

| Parametro | Tipo     | Valor padrão | Descrição                                         |
| --------- | -------- | ------------ | ------------------------------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma                      |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma.                      |
| `id`      | `string` | `undefined`  | String identificador do link gerado pelo sistema. |

### cURL:

```cURL
curl -X 'PATCH' \
  'https://api.bembit.com/api/v1/checkouts/{id}/activate' \
  -H 'accept: */*' \
  -H 'api: [Seu API]' \
  -H 'secret: [Seu Secret]'
```

## Respostas do Server:

### Status 200:

***Response headers (example)***
    
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

### Status 403:

    Unauthorized

### Status 404:

    Not found


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Checkouts/patch_checkouts__id__activate).
