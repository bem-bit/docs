---
sidebar_position: 2
---

# Detalhes da ordem

### Obtendo todos os detalhes de uma ordem específica.

Para solicitar os detalhes de uma ordem, é necessário realizar uma request do tipo **GET** com a seguinte configuração:

**URL**

```
https://api.bembit.com/api/v1/orders/{id}
```

**Método**

```
GET
```

**Parametros**

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, e o *id* da ordem que esta sendo consultada deve estar incluso na ***URL*** da *request*.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma. |
| `id`      | `string` | `undefined`  | Secret obtído na plataforma. |

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/orders/{id}' \
  -H 'accept: */*' \
  -H 'api: [Seu API]' \
  -H 'secret: [Seu secret]'
```

---

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__id_).
