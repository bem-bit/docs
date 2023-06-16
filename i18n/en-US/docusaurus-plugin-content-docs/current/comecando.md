---
sidebar_position: 2
---

# Start HERE!

Get in touch with our **_Customer Relationship Department_** by sending an _E-mail_ to [email](mailto:contato@bembit.com) in order to get **access** to our **_API_** or even to get more information regarding its implementation.

## Getting API Keys

Right after getting access, go to **menu** > **"API"** then click on the **"Gerar chave"** button.

**Well done!**, a new `API` Key was issued for you account, now you will see the following information:

| Key      | Description                                                    |
| -------- | -------------------------------------------------------------- |
| `api`    | It's a 10 digit **HASH** representing the **_Public Key_** ID. |
| `secret` | The 32 digits **HASH** that represents your **_Private Key_**. |

You need to pass the **Keys** inside the requisition via `HEADER` to our `API`.

:::caution WARNING!
After the **API Keys** issuing process you will be shown your **Private keys** one only time, and after that, you will not be able to see the same **_Private Key_** any more, so make sure you write them down in a safe place so you don't lose that information, in case you miss that time to save the keys you will need to issue a new pair of keys in order to keep using our **API**. 
The **rate limit** for all our end-points is ***100reqs/sec*** **API**.
:::

## Setting your requisition up

You can test our **_API's_** **end-points** by using [Postman](https://www.postman.com/), [Insominia](https://insomnia.rest/) or any other **_API_** software tool.

Once you've got the _Keys_, it will be required to set the `headers` of the application up by following this pattern:

```
headers: {
    api: <YOUR_API_ID>
    secret: <YOUR_API_SECRET>
}
```

:::note NOTE:
Not all of our _End-points_ need a reference to your _Private key_ inside the `Headers`, you can check where is specifically needed by consulting our [Swagger](https://api.bembit.com/docs).
:::
