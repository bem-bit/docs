---
sidebar_position: 3
---

## Listado dos Tokens

Traz uma lista de tokens disponíveis para trade através da rede fornecendo o nome da rede.

**URL**
```
https://api.bembit.com/api/v1/integrations/quotation/tokens/{network}
``` 

**Método**

```
GET
```

**Example Value:**

```JSON
[
  {
    "symbol": "string",
    "name": "string",
    "address": "string"
  }
]
```

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_tokens__network_).