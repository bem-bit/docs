---
sidebar_position: 9
---

# Cripto com PIX

### Compra de Crypto usando PIX.

Para realizar um _SWAP_ ou comprar _criptomoedas_ utilizando **_PIX_**, é necessário realizar uma request do tipo **POST** com a seguinte configuração:

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
  },
  "webhook": {
    "url": "https://URL",
    "headers": [
      {
        "key": "content-type",
        "value": "application/json",
      },
      {
        "key": "SUA-CHAVE",
        "value": "SEU-VALOR",
      },
    ]
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
  },
  "webhook": {
    "url": "string",
    "headers": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  }
}
```

- **_amount:_** Valor da troca.
- **_recipient / tokenToReceive:_** Simbolo do _token_ que esta sendo comprado.
- **_recipient / walletToReceive:_** Endereço da _wallet_ donde ira ser enviado o _token_ ao finalizar a operação.
- **_recipient / network:_** Número de identificação da **blockchain** donde se encontra o _token_ que esta sendo comprado.

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Unable to do swap

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_swap_fiat_to_crypto).
