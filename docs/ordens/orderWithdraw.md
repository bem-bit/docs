---
sidebar_position: 4
---

# Ordem de saque

### Criando uma ordem de saque.

Para realizar um _pedido de saque_ na plataforma via **_API_**, é necessário realizar uma request do tipo **POST** com a seguinte configuração:

**URL**

```
https://api.bembit.com/api/v1/orders/withdraw
```

**Método**

```
POST
```

### Parametros

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, junto com o **_request body_** no momento da solicitação.
:::

| Parametro  | Tipo      | Valor padrão | Descrição                    |
| ---------- | --------- | ------------ | ---------------------------- |
| `api`      | `string`  | `undefined`  | API Key obtída na plataforma |
| `secret`   | `string`  | `undefined`  | Secret obtído na plataforma. |
| `currency` | `string`  | `undefined`  | Moeda escolhida pra saque.   |
| `amount`   | `integer` | `0`          | Valor da operação.           |

## cURL:

```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/orders/withdraw' \
  -H 'accept: */*' \
  -H 'api: [Seu API]' \
  -H 'secret: [Seu Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "currency": "BRL",
  "amount": 1000
}'
```

## Request Body:

```json
{
  "currency": "BRL",
  "amount": 1000
}
```

- **_currency:_** Moeda escolhida pra saque.
- **_amount:_** Valor da operação.

## Respostas do Server:

### Status 200:

    Success

### Status 401:

    Error: response status is 401

### Status 403:

    Unauthorized

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_withdraw).
