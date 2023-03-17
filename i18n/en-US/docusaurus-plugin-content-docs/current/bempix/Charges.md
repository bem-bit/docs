---
sidebar_position: 2
---

## Generating charges

Generates a charge and returns a **QR Code** with its value imbued in it.

**Full Endpoint URL**
```
https://api.bembit.com/api/v1/client/payments/charges
``` 

**Method**

```
POST
```

**Request Params** 

| Param | Type | Default Value | Description |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | Your API Public Key. |
| `secret` | `string` | `undefined` | Your API Private Key. |


:::note NOTE:
The required params for this request must be sent to the ***end-point*** via *headers*.
:::

______________

# cURL

This is an example of **cURL** format on a **POST** request used for generating a *charge* using **Bembit's** *API*. 
![Bembit API](/img/bembit_api_charge_curl.png "cURL")

**Request BODY:**

- ***Value:*** It's a *float* value that represents the local currency, for example, for **R$100** (*Brazilian Reais*) the *value* is 100, for **R$1,50** the *value* is 1.5
- ***Identifier:*** It's just a **TAG**, to make easier a further identification of the transaction.
- ***expiresIn:*** Charge's expiration time, required in milliseconds format ***(1000ms = 1s)***.
- ***address:*** The *Crypto Wallet* address that will receive the bought **Tokens**.
- ***token:*** **Token's** symbol of what's being negotiated.
- ***network:*** The Blockchain's *Id* that supports negotiating the chosen ***token***.

![Bembit API](/img/bembit_api_charge_request.png "Request Body")

SEE IT IN ACTION!!! in [Swagger](https://api.bembit.com/docs/#/BemPix/post_client_payments_charges).