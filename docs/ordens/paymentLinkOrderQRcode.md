---
sidebar_position: 8
---

# Link de pagamento (QR Code)

### Obtendo o QR Code do pedido.

Para obter a imagem do QR code de um pedido atrelado ao seu link de pagamento é necessário realizar uma request do tipo **GET** com a seguinte configuração:

**URL**

```
https://api-sandbox.bembit.com/api/v1/orders/{orderId}/qrcode.png
```

**Método**

```
GET
```

**cURL**
```s
curl -X 'GET' \
  'https://api-sandbox.bembit.com/api/v1/orders/{orderId}/qrcode.png' \
  -H 'accept: image/png'
```

### Parametros

:::note Observação
O parametro _checkoutid_ vai embutido no **_URI_** da solicitação como mostra o link acima.
:::

| Parametro    | Tipo     | Valor padrão | Descrição                                                       |
| ------------ | -------- | ------------ | --------------------------------------------------------------- |
| `orderId`    | `string` | `undefined`  | Id da ordem gerada ao momento da sua criação                    |

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Order not found

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/get_orders__id__qrcode_png).
