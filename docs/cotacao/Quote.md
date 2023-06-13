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
  "to": "BNB",
  "amount": 1000
}
```

- ***network:*** Id da *Blockchain*(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- ***from:*** **Token** base do *swap* ou da *cotação*.
- ***to:*** **Token** do qual se deseja consultar o valor respeito ao **Token** base.
- ***amount:*** O valor da transação.

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

- fromToken / ***address:*** Endereço do contrato inteligente da moeda de venda, se for o caso.
- fromToken / ***decimais:*** Casas decimais que utiliza a moeda que estamos vendendo.
- fromToken / ***logoURI:*** Endereço da imagem que corresponde ao logo da moeda.
- fromToken / ***name:*** Nome da moeda de venda.
- fromToken / ***symbol:*** Simbolo da moeda de venda.
    <hr />
- toToken / ***address:*** Endereço do contrato inteligente da moeda de compra, se for o caso.
- toToken / ***symbol:*** Simbolo da moeda de compra.
- toToken / ***decimais:*** Casas decimais que utiliza a moeda que estamos comprando.
- toToken / ***name:*** Nome da moeda de compra.
- toToken / ***logoURI:*** Endereço da imagem que corresponde ao logo da moeda de compra.

    <hr />
- ***toTokenAmount:*** Valor da moeda que estamos comprando.
- ***fromTokenAmount:*** Valor da moeda que estamos vendendo.
- ***estimatedGas:*** Valor estimado do gas que a transação ira cobrar para ser realizada.


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/post_quotation).