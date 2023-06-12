---
sidebar_position: 3
---

# Status da ordem

### Obtendo o status de uma ordem.

Para obter o status de uma ordem, é necessário realizar uma request do tipo **GET** com a seguinte configuração:

**URL**

```
https://api.bembit.com/api/v1/orders/{id}/status
```

**Método**

```
GET
```

**Parametros**

:::note Observação
Para essa solicitação, o *id* da ordem que esta sendo consultada deve estar incluso na ***URL*** da *request*.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `id`      | `string` | `undefined`  | Secret obtído na plataforma. |

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/orders/{id}/status' \
  -H 'accept: application/json'
```

---

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__id__status).
