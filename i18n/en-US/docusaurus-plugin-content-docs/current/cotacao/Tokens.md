---
sidebar_position: 3
---

# Available Token listing

Retrieves a list with all available **Tokens** for the specified **Network**

**Full Endpoint URL**
```
https://api.bembit.com/api/v1/integrations/quotation/tokens/{network}
``` 

**Method**

```
GET
```

# cURL

This is an example of **cURL** used in a **GET** request used for retrieving a list of **Tokens** by providing the **Blockchain's ID** and using **Bembit's** *API*.

![Bembit API](/img/bembit_api_tokens_by_network_curl.png "cURL")

- ***ID:*** Blockchain **ID** that identifies the network to be queried.

## Sample Values (response)

- ***symbol:*** **Token** symbol.
- ***name:*** **Token** name.
- ***address:*** **Smart Contract's** address of the listed **Token**.
![Bembit API](/img/bembit_api_tokens_by_network_example_values.png "cURL")

SEE IT IN ACTION!!! in [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_tokens__network_).