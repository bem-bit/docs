---
sidebar_position: 3
---

# Lista de Tokens

## Obtendo uma lista dos tokens negociados numa blockchain especifica.

Traz uma lista de tokens disponíveis para trade através da rede fornecendo o ***id*** da ***blockchain***.

### URL
```
https://api.bembit.com/api/v1/integrations/quotation/tokens/{network}
``` 

### Método

```
GET
```

### cURL

Exemplo de **cURL** da solicitação do tipo **GET** Para obter uma lista de tokens suportados numa **blockchain** especifica, gerada utilizando a ***API** da **Bembit**.

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/quotation/tokens/network/{id}' \
  -H 'accept: application/json'
```

### Response Body

```c
[
  {
    "symbol": "BNB",
    "name": "BNB",
    "decimals": 18,
    "logoURI": "",
    "networks": [
      {
        "id": 56,
        "address": ""
      }
    ],
    "highlight": true
  },
]
```

- ***symbol:*** Simbolo do **Token** de cotação na operação.
- ***name:*** Nome do **Token**.
- ***decimals:*** Casas decimais do ***token***.
- ***logoURI:*** **URI** da logo do ***token***.
- networks / ***id:*** *id* da blockchain que negocia o **token**.
- networks / ***address:*** É o address do contrato inteligente do **token**.
- **highlight**: Aparece como ***true*** caso o token esteja na lista dos mais negociados, caso contrario aparece como ***false***.

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_tokens_network__network_).