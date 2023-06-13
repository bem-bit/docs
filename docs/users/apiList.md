---
sidebar_position: 3
---

# Lista de Chaves

### Obtendo uma lista das chaves de acesso.

Para listar todas as _chaves de acesso_ que se encontram disponiveis na conta utilizamos uma _request_ do tipo **_GET_** seguindo as indicações a continuação;

**URL**

```
https://api.bembit.com/api/v1/users/credentials
```

# cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/users/credentials' \
  -H 'accept: */*' \
  -H 'api: {Sua API}' \
  -H 'secret: {Seu secret}'
```

**Método**

```
GET
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
[
  {
    "key": "{Chave de acesso}",
    "expiresAt": "{Data de expiração}",
    "createdAt": "{Data de criação}",
    "updatedAt": "{Data de atualização}",
    "id": "{Id da chave de acesso}"
  },
  {
    "key": "xxxxxx",
    "expiresAt": "xxxxxxxxxx",
    "createdAt": "xxxxxxxxxx",
    "updatedAt": "xxxxxxxxxx",
    "id": "xxxxx"
  }
]
```

### Status 403:

    Unauthorized

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Users/get_users_credentials).
