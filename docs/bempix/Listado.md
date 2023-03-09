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

**Parametros**

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | API Key obtída na plataforma |
| `secret` | `string` | `undefined` | Secret obtído na plataforma. |

______________

# cURL

Exemplo de **cURL** da solicitação **GET** para consultar o saldo disponivel de um cliente utilizando a ***API** da **Bembit**
![Bembit API](/img/bembit_api_charge_list_curl.png "cURL")

**Response BODY:**

- ***application:*** A função da *API* que esta sendo utilizada.
- meta/***identifier:*** Um nome qualquer criado pelo usuario para identificar o motivo da transação.
- ***amount:*** O valor da transação.
- ***fee:*** Valor da Taxa de transação, se houver.
- ***Total:*** O custo total da transação mais a taxa.
- ***code:*** Código identificador da transação, é gerado automaticamente pelo nosso *API*.
- ***brCode:*** Codigo gerado pelo nosso ***API*** em representação da rota do **QR Code** de pagamento.
- ***qrCodeImage:*** URL da image do ***QR Code*** gerada automaticamente pelo nosso *API* para a realização do pagamento via **PIX**.
- ***expiresAt:*** Data exata de expiração do ***QR Code***, após essa data o código não tem mais validade e *é necessario gerar um novo codigo*.
- ***status:*** Representa o estado atual da cobrança, pudendo ser ***ATIVE*** se ainda estiver dentro do prazo de validade, ou ***EXPIRED** caso o prazo tiver acabado.
- receiver/***address:*** Endereço da *Wallet*(carteira) à que irão ser transferidos os **Tokens** resultado da transação.
- receiver/***network:*** Id da *Blockchain*(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- receiver/***token:*** Refere-se ao *Token* que esta sendo negociado.
![Bembit API](/img/bembit_api_charge_list_response.png "Response Body")


Veja em execução em nosso [Swagger](https://api.bembit.com/api/v1/client/payments/charges).