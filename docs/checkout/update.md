---
sidebar_position: 6
---

# Atualização

### Atualizando um link de pagamento

Para atualizar um link de pagamento é necessário realizar uma request do tipo **PUT** seguindo os parámetros definidos a continuação:

**URL**

```
https://api.bembit.com/api/v1/checkouts/{id}
```

**Método**

```
PUT
```

### Parametros

| Parametro | Tipo     | Valor padrão | Descrição                                         |
| --------- | -------- | ------------ | ------------------------------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma                      |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma.                      |
| `id`      | `string` | `undefined`  | String identificador do link gerado pelo sistema. |

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** via _headers_, assim como o **_id_** deve ser **incluso no url** no momento da solicitação.
:::

## Request Body:
```json
{
  "slug": "string",
  "title": "string",
  "description": "Uma breve descrição",
  "logo": "string",
  "paymentMethodPix": {
    "enabled": true,
    "expiryTimeInMinutes": 5
  },
  "paymentMethodCrypto": {
    "enabled": true,
    "expiryTimeInMinutes": 30,
    "allTokens": true,
    "highlightTokens": [
      "string"
    ]
  }
}
```

- **_Slug:_** Alias do link de pagamento, string que identifica seu link de pagamento.
- **_Title:_** Título ou nome do _Link de pagamento_, definido ao momento da criação.
- **_Description:_** Descrição do *link / pagamento*.
- **_Logo:_** *URL* da imagem do logo utilizado no link de pagamento.

- **_paymentMethodPix / enabled:_** Status do metodo **PIX**, ***true*** se estiver habilidato ou ***false*** se não.
- **_paymentMethodPix / expiryTimeInMinutes:_** Tempo de validade em *minutos* do **QR** gerado para pagamento.

- **_paymentMethodCrypto / enabled:_** Define se o pagamento por ***Cryptomoedas*** é aceito.
- **_paymentMethodCrypto / expiryTimeInMinutes:_** Tempo de validade em *minutos* do **QR** gerado para pagamento.
- **_paymentMethodCrypto / allTokens:_** É ***true*** caso sejam aceitas *todas* as criptomoedas, caso contrario é ***false***.
- **_paymentMethodCrypto / highlightTokens:_** É um ***Array de strings*** com os *símbolos* dos **tokens** aceitos.

### cURL:

```c
curl -X 'PUT' \
  'https://api.bembit.com/api/v1/checkouts/648079c90c9807b171a911a2' \
  -H 'accept: */*' \
  -H 'api: [Sua API]' \
  -H 'secret: [Seu Secret]' \
  -H 'Content-Type: application/json' \
  -d '{
  "slug": "string",
  "title": "string",
  "description": "Uma breve descrição",
  "logo": "string",
  "paymentMethodPix": {
    "enabled": true,
    "expiryTimeInMinutes": 5
  },
  "paymentMethodCrypto": {
    "enabled": true,
    "expiryTimeInMinutes": 30,
    "allTokens": true,
    "highlightTokens": [
      "string"
    ]
  }
}'
```


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Checkouts/put_checkouts__id_).




