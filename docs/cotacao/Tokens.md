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

# cURL

Exemplo de **cURL** da solicitação do tipo **GET** para obter um listado de tokens suportados numa **blockchain** especifica, gerada utilizando a ***API** da **Bembit**.
![Bembit API](/img/bembit_api_tokens_by_network_curl.png "cURL")

# Valores de exemplo

- ***symbol:*** Simbolo do **Token** de cotação na operação.
- ***name:*** Nome do **Token**.
- ***address:*** Address do **Smart Contract** do **Token** listado.
![Bembit API](/img/bembit_api_tokens_by_network_example_values.png "cURL")


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_tokens__network_).