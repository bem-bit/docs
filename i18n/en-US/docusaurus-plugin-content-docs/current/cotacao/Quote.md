---
sidebar_position: 1
---

# Requesting a Quote

In order to successfully request a **Quote** you need to submit the desired *pair* to be negotiated, and the *Network ID* of a **Blockchain** that supports the cryptocurrencies previously pointed on the *pair* data.

**Full Endpoint URL**
```
api/v1/integrations/quotation
```

**Method**
```
POST
```

**Request BODY:**

- ***network:*** The Blockchain's *Id* that supports negotiating the chosen ***token***.
- ***from:*** Base **Token** of the *quotation*.
- ***to:*** Quote **Token** of the *quotation*.
- ***amount:*** Resulting value of the *query*.

![Bembit API](/img/bembit_api_swap_request.png "Request Body")
Exemplo do **REQUEST BODY** da solicitação **POST** para a realização de uma troca de *Reais Brasileiros* a um *Token* especificado na hora da criação da cobrança utilizando a ***API** da **Bembit**.

:::note NOTE:
In a negotiation, the *pair* is build considering the ***Base currency / Quote currency*** schema, where the *Base currency* represents the token that is gonna be the *base unit* on that transaction, and the *quote currency* is the token we want to convert or trade into that *base currency*, at the end, the result value will represent the quantity of **Quote currencies** we need to *BUY* **ONE** *Base currency*.
:::
----------------

# Response BODY:

![Bembit API](/img/bembit_api_quote_response.png "Response Body")
- ***network:*** The Blockchain's *Id* that supports negotiating the chosen ***token***..
- from / ***symbol:*** Bse **Token** symbol.
- from / ***name:*** **Token** name.
- from / ***decimals:*** **Token** decimals.
- To / ***symbol:*** Quote **Token** symbol.
- To / ***name:*** **Token** name.
- To / ***decimals:*** **Token** decimals.
- ***amount*** Quote result.
- ***fee*** Negotiation fee.

SEE IT IN ACTION!!! in [Swagger](https://api.bembit.com/docs/#/Quotation/post_integrations_quote).