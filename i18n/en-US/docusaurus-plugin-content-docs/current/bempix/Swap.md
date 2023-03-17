---
sidebar_position: 5
---

## SWAP

In order to make a **SWAP** between two **TOKENs**, you need to make a request and provide via ***headers*** the required params.

**Full Endpoint URL**
```
https://api.bembit.com/api/v1/client/payments/swap
``` 

**Method**

```
POST
```

**Request Params** 

| Param | Type | Default value | Description |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | Your API Public Key. |
| `secret` | `string` | `undefined` | Your API Private Key. |


:::note NOTE:
The required params for this request must be sent to the ***end-point*** via *headers*.
:::

# cURL
This is an example of **cURL** used in a **POST** request used for swapping two **Tokens** using **Bembit's** *API*.
![Bembit API](/img/bembit_api_swap_curl.png "cURL")

- ***network:*** The Blockchain's *Id* that supports negotiating the chosen ***tokens***.
- ***addressToReceive:*** The *Crypto Wallet* address that will receive the bought **Tokens**.
- ***tokenToReceive:*** It refers to the *Token* chosen for buy.
- ***Amount:*** Represents amount of tokens to receive.


**Request BODY:**

This is an example of a **REQUEST BODY** setting, used in a **POST** request for completing a *Crypto Swap*, trading from a local currency to a *Crypto Token*, using **Bembit's** ***API*** 

![Bembit API](/img/bembit_api_swap_request.png "Request Body")


SEE IT IN ACTION!!! in [Swagger](https://api.bembit.com/docs/#/BemPix/post_client_payments_swap).