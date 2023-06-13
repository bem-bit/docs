---
sidebar_position: 2
---

# API Key

### Criando uma nova Chave de acesso API.

:::caution Atencão
Esse *end-point* é utilitario, para poder utilizar ele é necessario ter criado uma primeira chave de acesso à **API** desde a interface da plataforma, e no caso de precisar mais chaves adicionais então podera utilizar esse **end-point** para isto.
:::

Para criar uma chave de acesso à **API** é necessario realizar uma request do tipo **POST** ao **URL** detalhado mais embaixo;

**URL**

```
https://api.bembit.com/api/v1/users/credentials
```

# cURL
```c
curl -X 'POST' \
  'https://api.bembit.com/api/v1/users/credentials' \
  -H 'accept: application/json' \
  -H 'api: {Sua API}' \
  -H 'secret: {Seu secret}' \
  -d ''
```

**Método**

```
POST
```

### Parametros

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma. |

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_.
:::

## Respostas do Server:

### Status 200:

    Success

**_Response Body:_**

```c
{
  "key": "{ Nova chave API }",
  "secret": "{ Novo secret }",
  "expiresAt": "{ Data da geração da chave de acesso}"
}
```

### Status 403:

    Unauthorized

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Users/post_users_credentials).