---
sidebar_position: 1
---

## Balance request

In order to get the user's *Balance* you need to make a request and provide via ***headers*** the required params.

**Full Endpoint URL**
```
https://api.bembit.com/api/v1/client/balance
``` 

**Method**

```
GET
```

**Params** 

| Param | Type | Default Value | Description |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | Your API Public Key. |
| `secret` | `string` | `undefined` | Your API Private Key. |


:::note NOTE:
The required params for this request must be sent to the ***end-point*** via *headers*.
:::

______________

# cURL

This is an example of **cURL** format on a **GET** request used for retrieving the available user's balance using **Bembit's** *API*. 
![Bembit API](/img/bembit_api_balance_curl.png "cURL")

**Response BODY:**

- ***Currency:*** Is the symbol of the *cryptocurrency* which balance is being consulted.
- ***Amount:*** Represents the user's current balance.
- ***Blocked:*** It's the amount of the balance being temporarily *held* in the platform by a transaction created by the account's owner (client).

![Bembit API](/img/bembit_api_balance_response.png "Response Body")


SEE IT IN ACTION!!! [Swagger](https://api.bembit.com/docs/#/BemPix/get_client_balance).


