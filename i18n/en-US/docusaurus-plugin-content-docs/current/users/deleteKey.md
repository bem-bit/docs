---
sidebar_position: 4
---

# Eliminação

### Eliminando uma chave de acesso.

Para eliminar uma chave de acesso **API** utilizamos uma _request_ do tipo **DELETE** como se mostra a continuação;

**URL**

```
https://api.bembit.com/api/v1/users/credentials/{id}
```

### cURL

```c
curl -X 'DELETE' \
  'https://api.bembit.com/api/v1/users/credentials/{id}' \
  -H 'accept: */*' \
  -H 'api: {Sua API}' \
  -H 'secret: {Seu secret}'
```

**Método**

```
DELETE
```

### Parametros

| Parametro | Tipo     | Valor padrão | Descrição                                            |
| --------- | -------- | ------------ | ---------------------------------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma                         |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma.                         |
| `id`      | `string` | `undefined`  | Identificador da chave, obtido na criação do acesso. |

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, já o ID da chave a ser eliminada é embutida diretamente no **URI** como foi mostrado [aqui](#curl).
:::

## Respostas do Server:

### Status 200:

    Success

### Status 403:

    Unauthorized

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Users/delete_users_credentials__id_).
