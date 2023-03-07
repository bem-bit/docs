---
sidebar_position: 1
---

## Solicitando Balance

Para consultar o saldo é necessário fornecer via ***header*** os parametros requeridos pelo ***end-point.***

**URL**
```
https://api.bembit.com/api/v1/client/balance
``` 

**Método**

```
GET
```

**cURL**

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/client/balance' \
  -H 'accept: application/json' \
  -H 'api: [Seu API Key]' \
  -H 'secret: [Seu Secret]'
```

**Parametros**


| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | API Key obtída na plataforma |
| `secret` | `string` | `undefined` | Secret obtído na plataforma. |

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/get_client_balance).


