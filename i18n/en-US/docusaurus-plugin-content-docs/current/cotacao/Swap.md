---
sidebar_position: 4
---

# SWAP Simulation

In order to simulate a ***SWAP*** you need to make a **GET** request to this *Endpoint* following this pattern:

**Full Endpoint URL**
```
https://api.bembit.com/api/v1/integrations/quotation/book/{amount}
``` 

**Method**

```
GET
```

**Request Params** 

:::note NOTE:
The required params for this request must be sent to the ***end-point*** via *headers*.
:::


| Params | Type | Default value | Description |
| --------- | ---- | ------------ | --------- |
| `amount` | `string` | `0` | Input value |

# cURL

This is an example of **cURL** format on a **GET** request used for simulating a *SWAP* using **Bembit's** *API*.
![Bembit API](/img/bembit_api_swap_value_curl.png "cURL")

## Sample Values (response)

- ***amount:*** Input currency value.
- ***buy:*** **Tokens** being bought.
- ***sell:*** **Tokens** being sold.
- ***currency:*** Base currency.
![Bembit API](/img/bembit_api_swap_value_example_values.png "cURL")

SEE IT IN ACTION!!! in [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_book__amount_).