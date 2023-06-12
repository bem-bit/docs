---
sidebar_position: 6
---

# Link de pagamento

### Criando um pedido pelo link de pagamento.

Para cancelar uma _ordem_ na plataforma via **_API_**, é necessário realizar uma request do tipo **POST** com a seguinte configuração:

**URL**

```
https://api.bembit.com/api/v1/orders/{checkoutid}/checkout
```

**Método**

```
POST
```

### Parametros

:::note Observação
O parametro *checkoutid* vai embutido no ***URI*** da solicitação como mostra o link acima.
:::

| Parametro    | Tipo     | Valor padrão | Descrição                                                       |
| ------------ | -------- | ------------ | --------------------------------------------------------------- |
| `checkoutid` | `string` | `undefined`  | Alias correspondente ao link de pagamento, criado na plataforma |


**Request Body:**

```c
{
  "network": 56,
  "currency": "BRL",
  "amount": 1000,
  "requester": {
    "name": "string",
    "email": "string",
    "document": "string"
  }
}
```

- **_network:_** Número identificador da blockchain sendo utilizada nessa operação.
- **_currency:_** Simbolo da moeda que é aceita no pedido que esta sendo criado.
- **_amount:_** Valor do pedido.
- **_requester / name:_** Nome do pagador.
- **_requester / email:_** Email do pagador.
- **_requester / document:_** Documento de identificação do pagador.

:::note Observação
As informações mostradas no **Request body** devem ser fornecidas à *request* como mostra o seguinte ***cURL***.
:::

```c
curl -X 'POST' \
  'https://api-sandbox.bembit.com/api/v1/orders/{checkoutid}/checkout' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "network": {blockchain id number},
  "currency": "currency symbol",
  "amount": {valor inteiro},
  "requester": {
    "name": "string",
    "email": "string",
    "document": "string"
  }
}'
```

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Checkout not found

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/post_orders__checkoutId__checkout).