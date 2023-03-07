---
sidebar_position: 2
---

## Criar cobrança

Para consultar o saldo é necessário fornecer via ***header*** os parametros requeridos pelo ***end-point.***

**URL**
```
https://api.bembit.com/api/v1/client/payments/charges

``` 

**Método**

```
POST
```

**Request BODY:**

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

**Parametros**

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | API Key obtída na plataforma |
| `secret` | `string` | `undefined` | Secret obtído na plataforma. |



Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/post_client_payments_charges).