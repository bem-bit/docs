---
sidebar_position: 1
---

# Listado de ordens

### Obtendo um listado com todas as ordens

Para obter um listado com todas as ordens criadas na sua conta, é necessário realizar uma request do tipo **GET** seguindo os parámetros a continuação:

**URL**

```
https://api.bembit.com/api/v1/orders
```

**Método**

```
GET
```

**Parametros**

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma. |

# cURL

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/orders' \
  -H 'accept: application/json' \
  -H 'api: [Seu API]' \
  -H 'secret: [Seu Secret]'
```
---

## Respostas do Server:

### Status 200:

    Success

_Response Example value:_

```json
[
  {
    "application": "CHECKOUT",
    "status": "created",
    "subtotal": 1000,
    "total": 1000,
    "fee": 0,
    "rate": 5,
    "discount": {
      "fixed": 0,
      "percentage": "0"
    }
  }
]
```

- **_application:_** Define a aplicação para a qual foi criada essa ordem em especifico, pudendo ser *Checkout*, *Swap*, *Exchange*.
- **_status:_** Mostra o ***estado*** da ordem ao momento da consulta.
- **_subtotal:_** Mostra o valor da ordem sem considerar as taxas.
- **_total:_** Mostra o valor da ordem considerando as taxas.
- **_fee:_** Refere-se à taxa aplicada a essa ordem.
- **_rate:_** Representa a cotação do **Dolar**, em **Reais Brasileiros**, no momento da criação da ordem.
- **_discount/fixed:_** Valor fixo de desconto, caso houver.
- **_discount/percentage:_** Percentage de desconto, caso houver.

### Status 403:

    Unauthorized

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Orders/get_orders).
