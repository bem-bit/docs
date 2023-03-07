---
sidebar_position: 4
---

## QR Code

Para gera um codigo QR e utilizar na cobrança gerada é necessario fornecer o ***id*** da cobrança para o **end-point**

**URL**
```
https://api.bembit.com/api/v1/client/payments/charges/qrcode/{id}/qrcode.png
``` 

**Método**

```
GET
```

**cURL**

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/client/payments/charges/qrcode/{id}/qrcode.png' \
  -H 'accept: image/png'
```

**Parametros**

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `id` | `string` | `undefined` | ID da transação gerada. |

Veja em execução em nosso [Swagger](https://api.bembit.com/api/v1/client/payments/charges).