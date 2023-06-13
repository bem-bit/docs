---
sidebar_position: 2
---

## Listado das Redes disponiveis

Para receber uma lista com as redes disponiveis é necessário realizar uma solicitação do tipo **GET** ao ***end-point*** seguindo a seguinte estrutura.

### URL

```
https://api.bembit.com/api/v1/quotation/networks
```

### Método
```
GET
```

:::note Observação
Não possui parametros.
:::

### Response Body:

```c
[
  {
    "id": 56,
    "name": "BSC"
  }
]
```

- ***id:*** Id da *Blockchain*(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- ***name:*** Nome do **Token**.


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_networks).