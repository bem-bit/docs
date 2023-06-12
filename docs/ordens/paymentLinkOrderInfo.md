---
sidebar_position: 7
---

# Link de pagamento (info)

### Obtendo informações do pedido feito pelo link de pagamento.

Para consultas as informações de um pedido atrelado ao seu link de pagamento na plataforma via **_API_**, é necessário realizar uma request do tipo **GET** com a seguinte configuração:

**URL**

```
https://api-sandbox.bembit.com/api/v1/orders/{checkoutId}/checkout/{orderId}
```

**Método**

```
GET
```

**cURL**
```s
curl -X 'GET' \
  'https://api-sandbox.bembit.com/api/v1/orders/{checkoutId}/checkout/{orderId}' \
  -H 'accept: */*'
```

### Parametros

:::note Observação
O parametro _checkoutid_ vai embutido no **_URI_** da solicitação como mostra o link acima.
:::

| Parametro    | Tipo     | Valor padrão | Descrição                                                       |
| ------------ | -------- | ------------ | --------------------------------------------------------------- |
| `checkoutId` | `string` | `undefined`  | Alias correspondente ao link de pagamento, criado na plataforma |
| `orderId`    | `string` | `undefined`  | Id da ordem gerada ao momento da sua criação                    |

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Checkout not found

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__checkoutId__checkout__orderId_).
