---
sidebar_position: 1
---

# Requesting a quote

To generate a quotation, it is necessary to provide the _currency pair_ for the transaction, the _amount_ and on which network the transaction will be executed if the quotation is carried out.

URL
```
api/v1/integrations/quotation
```

Method
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

- ***network:*** The _ID_ of the network (_Blockchain_) supporting the trading pair being quoted.
- ***from:*** Quotation's base **Token**.
- ***to:*** **Token** Quote **Token**.
- ***amount:*** Transaction value.

## Server Responses:

### Status 200:

    Success

# Response BODY:

```c
{
  "fromToken": {
    "address": "",
    "decimals": 2,
    "logoURI": "",
    "name": "Brazilian Real",
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

- fromToken / ***address:*** Base token _Smartcontract address_.
- fromToken / ***decimais:*** Number of decimals used by the base token.
- fromToken / ***logoURI:*** Token logo _URL_.
- fromToken / ***name:*** Base token name.
- fromToken / ***symbol:*** Base token _symbol_.
    <hr />
- toToken / ***address:*** Quote token _Smartcontract address_.
- toToken / ***symbol:*** Quote token _symbol_.
- toToken / ***decimais:*** Number of decimals used by the Quote token.
- toToken / ***name:*** Quote token name.
- toToken / ***logoURI:*** Token logo _URL_.

    <hr />
- ***toTokenAmount:*** Quantity of tokens being bought.
- ***fromTokenAmount:*** Quantity of tokens being sold.
- ***estimatedGas:*** Estimated transaction fee.


See and test our API on [Swagger](https://api.bembit.com/docs/#/Quotation/post_quotation).