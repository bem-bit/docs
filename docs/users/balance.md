---
sidebar_position: 1
---

# Balance

### Obtendo o balance da conta.

Para obter as informações do _balance_ da conta é necessario realizar uma request do tipo **_GET_** fornecendo as _credenciais_ correspondentes a traves de **_HEADERS_**.

**URL**

```
https://api.bembit.com/api/v1/users/balance
```

**Método**

```
GET
```

### Parametros

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma. |

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/users/balance' \
  -H 'accept: application/json' \
  -H 'api: {Sua API}' \
  -H 'secret: {Seu secret}'
```

## Respostas do Server:

### Status 200:

    Success

**_Example value:_**

```c
[
  {
    "currency": "BRL",
    "amount": 0,
    "blocked": 0
  }
]
```

### Status 403:

    Unauthorized

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Users/get_users_balance).
