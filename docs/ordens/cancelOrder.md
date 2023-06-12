---
sidebar_position: 5
---

# Cancelamento

### Cancelando uma ordem.

Para cancelar uma _ordem_ na plataforma via **_API_**, é necessário realizar uma request do tipo **DELETE** com a seguinte configuração:

**URL**

```
https://api-sandbox.bembit.com/api/v1/orders/{id}/cancel
```

**Método**

```
DELETE
```

### Parametros

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, junto com o **_request body_** no momento da solicitação.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtida na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtido na plataforma. |
| `id`      | `string` | `undefined`  | Id da ordem.                 |

### cURL:

```c
curl -X 'DELETE' \
  'https://api-sandbox.bembit.com/api/v1/orders/{id}/cancel' \
  -H 'accept: */*' \
  -H 'api: [Sua API]' \
  -H 'secret: [Seu secret]'
```

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/delete_orders__id__cancel).
