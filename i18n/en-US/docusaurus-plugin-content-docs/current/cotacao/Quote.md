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
  "to": "WBNB",
  "amount": 2500
}
```

- **_network:_** The _ID_ of the network (_Blockchain_) supporting the trading pair being quoted.
- **_from:_** Quotation's base **Token**.
- **_to:_** **Token** Quote **Token**.
- **_amount:_** Transaction value.

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

- fromToken / **_address:_** Base token _Smartcontract address_.
- fromToken / **_decimais:_** Number of decimals used by the base token.
- fromToken / **_logoURI:_** Token logo _URL_.
- fromToken / **_name:_** Base token name.
- fromToken / **_symbol:_** Base token _symbol_.
    <hr />
- toToken / **_address:_** Quote token _Smartcontract address_.
- toToken / **_symbol:_** Quote token _symbol_.
- toToken / **_decimais:_** Number of decimals used by the Quote token.
- toToken / **_name:_** Quote token name.
- toToken / **_logoURI:_** Token logo _URL_.

    <hr />

- **_toTokenAmount:_** Quantity of tokens being bought.
- **_fromTokenAmount:_** Quantity of tokens being sold.
- **_estimatedGas:_** Estimated transaction fee.

See and test our API on [Swagger](https://api.bembit.com/docs/#/Quotation/post_quotation).
