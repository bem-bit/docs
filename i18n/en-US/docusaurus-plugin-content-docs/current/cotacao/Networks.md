---
sidebar_position: 2
---

# Listing available Networks

In order to get a list with the available networks on ***Bembit's*** Platform by using our ***API***, you need to make a **POST** request to this *Endpoint* with the following structure:

**Full Endpoint URL**
```
api/v1/integrations/quotation/networks
```

**Method**
```
POST
```

:::note NOTE:
This request doesn't need *any* parameters.
:::

## Sample Values (response)

- ***network:*** The Blockchain's *Id* that supports negotiating the chosen ***token***.
- ***name:*** **Token** name.

![Bembit API](/img/bembit_api_networks_value.png "Example value")

SEE IT IN ACTION!!! in [Swagger](https://api.bembit.com/docs/#/Quotation/post_integrations_quote).