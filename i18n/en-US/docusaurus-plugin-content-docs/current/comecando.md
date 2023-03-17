---
sidebar_position: 2
---

# Introduction

Get in touch with our ***Customer Relationship Department*** by sending an *E-mail* to [email](mailto:contato@bembit.com) in order to get **access** to our ***API*** or even to get more information regarding its implementation.

## Getting API Keys

Right after getting access, go to **menu** > __"API"__ then click on the __"Gerar chave"__ button.

**Well done!**, a new `API` Key was issued for you account, now you will see the following information:

| Key | Description |
| ------ | ------ | 
| `api` | It's a 10 digit **HASH** representing the ***Public Key*** ID. |
| `secret` | The 32 digits **HASH** that represents your ***Private Key***. |

You need to pass the **Keys** inside the requisition via `HEADER` to our `API`.

:::caution WARNING!
After the **API Keys** issuing process you will be shown your **Private keys** one only time, and after that, you will not be able to see the same ***Private Key*** any more, so make sure you write them down in a safe place so you don't lose that information, in case you miss that time to save the keys you will need to issue a new pair of keys in order to keep using our **API**.
:::

## Setting your requisition up

You can test our ***API's*** **end-points** by using [Postman](https://www.postman.com/), [Insominia](https://insomnia.rest/) or any other ***API*** software tool.

Once you've got the *Keys*, it will be required to set the `headers` of the application up by following this pattern:

```
headers: {
    api: <YOUR_API_ID>
    secret: <YOUR_API_SECRET>
}
```

:::note NOTE:
Not all of our *End-points* need a reference to your *Private key* inside the `Headers`, you can check where is specifically needed by consulting our [Swagger](https://api.bembit.com/docs).
:::