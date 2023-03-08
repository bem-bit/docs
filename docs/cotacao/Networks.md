---
sidebar_position: 2
---

## Listado das Redes disponiveis

Para receber uma lista com as redes disponiveis é necessário realizar uma solicitação do tipo **POST** ao ***end-point*** seguindo a seguinte estrutura.

**URL**
```
https://api.bembit.com/api/v1/integrations/quotation/networks
``` 

**Método**

```
POST
```

**Example Value:**

```JSON
[
  {
    "network": 56,
    "name": "string"
  }
]
```

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/post_client_payments_charges).