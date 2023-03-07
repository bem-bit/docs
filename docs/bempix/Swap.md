---
sidebar_position: 5
---

## SWAP

Para realizar a troca de BRL por um **TOKEN** via **API** é necessario fornecer via **headers** o **API Key** e o **Secret** gerados na sua conta.

**URL**
```
https://api.bembit.com/api/v1/client/payments/swap
``` 

**Request BODY:**

```JSON
{
  "network": "[Id de Rede]",
  "addressToReceive": "[wallet address]",
  "tokenToReceive": "[token]",
  "amount": "[valor]"
}
```

**Método**

```
POST
```

**cURL**

```cURL
curl -X 'POST' \
  'https://api.bembit.com/api/v1/client/payments/swap' \
  -H 'accept: application/json' \
  -H 'api: [Seu API Key]' \
  -H 'secret: [Seu Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "network": [Id de Rede],
  "addressToReceive": "[Wallet Address]",
  "tokenToReceive": "[Token]",
  "amount": 1
}'
```

**Parametros**

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `id` | `string` | `undefined` | ID da transação gerada. |



Veja em execução em nosso [Swagger](https://api.bembit.com/api/v1/client/payments/charges).