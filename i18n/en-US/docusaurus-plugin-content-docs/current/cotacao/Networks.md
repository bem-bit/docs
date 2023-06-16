---
sidebar_position: 2
---

## Available Networks

To receive a list of available networks, it is necessary to make a _GET_ request to the _end-point_ following the following structure.

### URL

```
https://api.bembit.com/api/v1/quotation/networks
```

### Method
```
GET
```

:::note Important
This end-point does not require any parameters.
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

- ***id:*** The _ID_ of the *Blockchain*(_network_) supporting the trading pair.
- ***name:*** **Token** name.


See and test our **API** on [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_networks).