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

**Parametros**

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `id` | `string` | `undefined` | ID da transação gerada. |

______________

# cURL

Exemplo de **cURL** da solicitação **GET** para consultar o saldo disponivel de um cliente utilizando a ***API** da **Bembit**
![Bembit API](/img/bembit_api_qrCode_curl.png "cURL")

**Response BODY:**

:::note Observação
A resposta dessa consulta, caso for ***Status 200*** é uma imagem do ***QR Code*** gerado pela plataforma para realizar o pagamento da transação via *PIX*.
:::

:::caution Atencão
A imagem a continuação é a representação de um ***QR Code** e não tem validade nenhuma e nem utilidade mais do que ilustrar ao usuario.
:::

![Bembit API](/img/qrCode_example.png "QR Code")

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/get_client_payments_charges_qrcode__id__qrcode_png).