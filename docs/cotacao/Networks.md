---
sidebar_position: 2
---

## Listado das Redes disponiveis

Para receber uma lista com as redes disponiveis é necessário realizar uma solicitação do tipo **POST** ao ***end-point*** seguindo a seguinte estrutura.

URL
```
api/v1/integrations/quotation/networks
```

Método
```
POST
```

:::note Observação
Não possui parametros.
:::

# Valores de exemplo:

- ***network:*** Id da *Blockchain*(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- ***name:*** Nome do **Token**.

![Bembit API](/img/bembit_api_networks_value.png "Example value")

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/post_integrations_quote).