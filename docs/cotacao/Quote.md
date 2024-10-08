---
sidebar_position: 1
---

# Gerando uma cotação

Faz a cotação de um token para outro (deve refazer a cotação a cada 30 segudos).

URL

```
https://api.bembit.com/api/v1/quotation
```

Método

```
POST
```

# Request BODY:

```c
{
  "network": 56,
  "from": "BRL",
  "to": "WBNB",
  "amount": 2500
}
```

- **_network:_** Id da _Blockchain_(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- **_from:_** **Token** base do _swap_ ou da _cotação_.
- **_to:_** **Token** do qual se deseja consultar o valor respeito ao **Token** base.
- **_amount:_** O valor da transação.

## Respostas do Server:

### Status 200:

    Success

# Response BODY:

```c
{
  "fromToken": {
    "address": "",
    "decimals": 2,
    "logoURI": "",
    "name": "Real Brasileiro",
    "symbol": "BRL"
  },
  "toToken": {
    "address": "",
    "symbol": "BNB",
    "decimals": 18,
    "name": "BNB",
    "logoURI": ""
  },
  "toTokenAmount": "8251275588511292",
  "fromTokenAmount": "1972141528764670400",
  "estimatedGas": 0
}
```

- fromToken / **_address:_** Endereço do contrato inteligente da moeda de venda, se for o caso.
- fromToken / **_decimais:_** Casas decimais que utiliza a moeda que estamos vendendo.
- fromToken / **_logoURI:_** Endereço da imagem que corresponde ao logo da moeda.
- fromToken / **_name:_** Nome da moeda de venda.
- fromToken / **_symbol:_** Simbolo da moeda de venda.
    <hr />
- toToken / **_address:_** Endereço do contrato inteligente da moeda de compra, se for o caso.
- toToken / **_symbol:_** Simbolo da moeda de compra.
- toToken / **_decimais:_** Casas decimais que utiliza a moeda que estamos comprando.
- toToken / **_name:_** Nome da moeda de compra.
- toToken / **_logoURI:_** Endereço da imagem que corresponde ao logo da moeda de compra.

    <hr />

- **_toTokenAmount:_** Valor da moeda que estamos comprando.
- **_fromTokenAmount:_** Valor da moeda que estamos vendendo.
- **_estimatedGas:_** Valor estimado do gas que a transação ira cobrar para ser realizada.

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/post_quotation).
