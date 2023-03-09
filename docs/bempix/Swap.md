---
sidebar_position: 5
---

## SWAP

Para realizar a troca de BRL por um **TOKEN** via **API** é necessario fornecer via **headers** o **API Key** e o **Secret** gerados na sua conta.

**URL**
```
https://api.bembit.com/api/v1/client/payments/swap
``` 

# cURL

- ***network:*** Numero de identificação da ***Blockchain*** que da suporte à negociação com o *Token* escolhido.
- ***addressToReceive:*** Endereço da *Wallet*(carteira) à que irão ser transferidos os **Tokens** resultado da transação.
- ***tokenToReceive:*** Refere-se ao *Token* que esta sendo negociado.

Exemplo do **REQUEST BODY** da solicitação **POST** para a realização de uma troca de *Reais Brasileiros* a um *Token* especificado na hora da criação da cobrança utilizando a ***API** da **Bembit**.
![Bembit API](/img/bembit_api_swap_request.png "Request Body")

**Método**

```
POST
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

- ***application:*** A função da *API* que esta sendo utilizada.

Exemplo de **cURL** da solicitação **POST** para a realização de uma troca de *Reais Brasileiros* a um *Token* especificado na hora da criação da cobrança utilizando a ***API** da **Bembit**.
![Bembit API](/img/bembit_api_swap_curl.png "cURL")




Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/post_client_payments_swap).