---
sidebar_position: 10
---

# Offramp da Bembit

### Venda de Cryptos e recebendo por PIX.

Para vender seus _TOKENS_ e receber via **_PIX_** utilizando a nossa **API**, é necessário realizar uma request do tipo **POST** com a seguinte configuração:

**URL**

```
https://api.bembit.com/api/v1/orders/swap/crypto-to-fiat
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
  'https://api.bembit.com/api/v1/orders/swap/crypto-to-fiat' \
  -H 'accept: */*' \
  -H 'api: [Seu API Key]' \
  -H 'secret: [Seu Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "amount": number,
  "currency": string,
  "network": number
}'
```

## Request Body:

```json
{
  "amount": number,
  "currency": string,
  "network": number
}
```

- **_amount:_** Valor da troca.
- **_currency:_** Simbolo do _token_ que esta sendo vendido.
- **_network:_** Número de identificação da **blockchain** donde se encontra o _token_ que esta sendo comprado.

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

### Status 404:

    Unable to do swap

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/post_orders_swap_fiat_to_crypto).
