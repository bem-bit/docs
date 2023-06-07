---
sidebar_position: 2
---

# Listado de pagamentos

### Listando todos os pagamentos

Para listar todos os pagamentos é necessário realizar uma request do tipo **GET** passando os parámetros definidos a continuação:

**URL**

```
https://api.bembit.com/api/v1/checkouts
```

**Método**

```
GET
```

**Parametros**

:::note Observação
Os parametros para essa solicitação devem ser passados ao ***end-point*** via *headers* no momento da solicitação.
:::

| Parametro | Tipo     | Valor padrão | Descrição                    |
| --------- | -------- | ------------ | ---------------------------- |
| `api`     | `string` | `undefined`  | API Key obtída na plataforma |
| `secret`  | `string` | `undefined`  | Secret obtído na plataforma. |

---

# cURL

```cURL
curl -X 'GET' \
  'https://api-sandbox.bembit.com/api/v1/checkouts' \
  -H 'accept: application/json' \
  -H 'api: [Sua API]' \
  -H 'secret: [Seu secret]'
```

**Respostas do Server:**

### Status 200:

_Response Body:_

```json
[
  {
    "title": "string",
    "description": "string",
    "slug": "string",
    "active": true,
    "paymentMethodPix": {
      "expiryTimeInMinutes": 0,
      "enabled": true
    },
    "paymentMethodCrypto": {
      "highlightTokens": [
        "string"
      ],
      "enabled": true,
      "allTokens": true,
      "expiryTimeInMinutes": 0
    },
    "logo": "string",
    "createdAt": "2023-06-07T15:58:10.961Z",
    "updatedAt": "2023-06-07T15:58:10.961Z",
    "id": "string"
  }
]
```

- **_Title:_** Título ou nome do _Link de pagamento_, definido ao momento da criação.
- **_Description:_** Descrição do _link / pagamento_.
- **_Slug:_** Alias do link de pagamento (definido no momento da criação).
- **_Active:_** Status do _Link de pagamento_ podendo ser **_True_** ou **_False_**.
- **_paymentMethodPix / expiryTimeInMinutes:_** Tempo de validade em _minutos_ do **QR** gerado para pagamento.
- **_paymentMethodPix / enabled:_** Status do metodo **PIX**, **_true_** se estiver habilidato ou **_false_** se não.
- **_paymentMethodCrypto / highlightTokens:_** É um **_Array de strings_** com os _símbolos_ dos **tokens** aceitos.
- **_paymentMethodCrypto / enabled:_** Define se o pagamento por **_Cryptomoedas_** é aceito.
- **_paymentMethodCrypto / allTokens:_** É **_true_** caso sejam aceitas _todas_ as criptomoedas, caso contrario é **_false_**.
- **_paymentMethodCrypto / expiryTimeInMinutes:_** Tempo de validade em _minutos_ do **QR** gerado para pagamento.
- **_Logo:_** _URL_ da imagem do logo utilizado no link de pagamento.
- **_CreatedAt:_** Data de criação do link de pagamento.
- **_UpdatedAt:_** Data de atualização do link de pagamento (caso tenha sido atualizado).
- **_Id:_** Identificador do link de pagamento.

### Status 401:

_Response Body:_

```json
{
  "error": true
}
```

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Checkouts/get_checkouts).
