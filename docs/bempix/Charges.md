---
sidebar_position: 2
---

## Criar cobrança

Faz a solicitação de cobrança e retorna um código **QRCode** com o valor informado para pagamento

**URL**
```
https://api.bembit.com/api/v1/client/payments/charges
``` 

**Método**

```
POST
```

**cURL**

```cURL
curl -X 'POST' \
  'https://api.bembit.com/api/v1/client/payments/charges' \
  -H 'accept: application/json' \
  -H 'api: [Seu API Key]' \
  -H 'secret: [Seu Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "value": 100,
  "identifier": "my-identifier-charge-id",
  "expiresIn": 3600,
  "receiver": {
    "address": "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "token": "USDC",
    "network": 56
  }
}'
```


  **Parametros**
  
  | Parametro | Tipo | Valor padrão | Descrição |
  | --------- | ---- | ------------ | --------- |
  | `api` | `string` | `undefined` | API Key obtída na plataforma |
  | `secret` | `string` | `undefined` | Secret obtído na plataforma. |


**Request BODY:**

- ***Value:*** Valor *float* que representa a moeda local, por exemplo, para **R$100** o *value* = 100, se for **R$1,50** o *value* = 1.5.
- ***Identifier:*** É um nome qualquer, para você poder identificar facilmente sua transação.
- ***expiresIn:*** Tempo de expiração, notado em milisegundos ***(1000ms = 1s)***.
- ***address:*** Endereço da *Wallet* que irá receber os tokens comprados.
- ***token:*** Simbolo do **token** que esta sendo negociado na operação.
- ***network:*** *Id* da blockchain que negocia o ***token*** escolhido.

```JSON
{
  "value": 100,
  "identifier": "my-identifier-charge-id",
  "expiresIn": 3600,
  "receiver": {
    "address": "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "token": "USDC",
    "network": 56
  }
}
```




Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/post_client_payments_charges).