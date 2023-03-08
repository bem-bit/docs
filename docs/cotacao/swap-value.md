---
sidebar_position: 4
---

## Valor do SWAP

Para receber uma lista com as redes disponiveis é necessário realizar uma solicitação do tipo **GET** ao ***end-point*** seguindo a seguinte estrutura.

**URL**
```
https://api.bembit.com/api/v1/integrations/quotation/book/{amount}
``` 

**Método**

```
GET
```

**Example Value:**

```JSON
{
  "amount": "0.0000",
  "buy": 0,
  "sell": 0,
  "currency": "BRL"
}
```

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_book__amount_).