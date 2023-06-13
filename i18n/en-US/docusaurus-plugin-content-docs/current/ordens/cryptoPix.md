---
sidebar_position: 9
---

# Cripto com PIX

### Compra de Crypto usando PIX.

Para realizar um *SWAP* ou comprar *criptomoedas* utilizando ***PIX***, é necessário realizar uma request do tipo **POST** com a seguinte configuração:

**URL**

```
https://api.bembit.com/api/v1/orders/swap/fiat-to-crypto
```

**Método**

```
POST
```

### Parametros

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, junto com o **_request body_** no momento da solicitação.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma. |

# cURL

```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/orders/swap/fiat-to-crypto' \
  -H 'accept: */*' \
  -H 'api: {Sua API}' \
  -H 'secret: {Seu secret}' \
  -H 'Content-Type: application/json' \
  -d '{
  "amount": 1,
  "recipient": {
    "tokenToReceive": "string",
    "walletToReceive": "string",
    "network": integer
  }
}'
```

## Request Body:

```json
{
  "amount": 1000,
  "recipient": {
    "tokenToReceive": "string",
    "walletToReceive": "string",
    "network": 0
  }
}
```

- **_amount:_** Valor da troca.
- **_recipient / tokenToReceive:_** Simbolo do *token* que esta sendo comprado.
- **_recipient / walletToReceive:_** Endereço da *wallet* donde ira ser enviado o *token* ao finalizar a operação.
- **_recipient / network:_** Número de identificação da **blockchain** donde se encontra o *token* que esta sendo comprado.

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Unable to do swap

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_swap_fiat_to_crypto).
