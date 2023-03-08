---
sidebar_position: 3
---
## Listado de cobranças

Para solicitar um listado das cobranças realizadas é necessário fornecer via ***header*** os parametros requeridos pelo ***end-point.***

**URL**
```
https://api.bembit.com/api/v1/client/payments/charges
``` 

**Método**

```
GET
```

**cURL**

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/client/payments/charges' \
  -H 'accept: application/json' \
  -H 'api: [Seu API Key]' \
  -H 'secret: [Seu Secret]'
```

**Parametros**

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | API Key obtída na plataforma |
| `secret` | `string` | `undefined` | Secret obtído na plataforma. |


**Request BODY:**

```JSON
{
  "value": 100,
  "identifier": "my-identifier-charge-id",
  "expiresIn": 3600,
  "receiver": {
    "address": "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "token": "USDC", // To
    "network": 56
  }
}
```

Veja em execução em nosso [Swagger](https://api.bembit.com/api/v1/client/payments/charges).