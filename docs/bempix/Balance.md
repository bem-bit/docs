---
sidebar_position: 1
---

# Solicitando Balance

Para consultar o saldo é necessário fornecer via ***header*** os parametros requeridos pelo ***end-point.***

**URL**
```
https://api.bembit.com/api/v1/client/balance
``` 

**Método**

```
GET
```

**Parametros** 

:::note Observação
Os parametros para essa solicitação devem ser passados ao ***end-point*** via *headers* no momento da solicitação.
:::

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | API Key obtída na plataforma |
| `secret` | `string` | `undefined` | Secret obtído na plataforma. |


______________

# cURL

Exemplo de **cURL** da solicitação **GET** para consultar o saldo disponivel de um cliente utilizando a ***API** da **Bembit**
![Bembit API](/img/bembit_api_balance_curl.png "cURL")

**Response BODY:**

- ***Currency:*** O simbolo da *criptomoeda* que está sendo referida na consulta.
- ***Amount:*** O saldo disponivel para realizar transações na plataforma.
- ***Blocked:*** Valor retido no sistema enquanto é finalizada uma operação.
![Bembit API](/img/bembit_api_balance_response.png "Response Body")


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/get_client_balance).


