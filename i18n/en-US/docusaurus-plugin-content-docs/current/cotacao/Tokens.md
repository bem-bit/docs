---
sidebar_position: 3
---

# Tokens listing

## Retrieving a token list.

This end-point returns all the available _tokens_ on a _network_ when it's ***id*** is input on the _URI_. 

### URL
```
https://api.bembit.com/api/v1/integrations/quotation/tokens/{network}
``` 

### Method

```
GET
```

### cURL

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

- ***symbol:*** Token **symbol** (ex. _BTC_, _ETH_).
- ***name:*** Token name.
- ***decimals:*** Number of decimal places allowed by the _token_.
- ***logoURI:*** This is the **URI** with the image logo of the ***token***.
- networks / ***id:*** The _id_ of the blockchain that supports the listed **token**.
- networks / ***address:*** Smartcontract address for the listed **token**.
- **highlight**: When set to "_true_", the listed token is at the top of the negotiation list on that particular _blockchain_.

See and test our _API_ on [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_tokens_network__network_).