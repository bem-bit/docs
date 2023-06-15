---
sidebar_position: 1
---

# Info

### Retrieving payment info

In order to get detailed informations about a particular payment you need to send a **GET** request with the _slug_ of the payment on it:

**URL**

```
https://api.bembit.com/api/v1/checkouts/{slug}
```

**Method**

```
GET
```

**Params**

:::note Important
Params for this request must be included on the **URL**.
:::

| Parametro | Tipo     | Valor padrão | Descrição                                                   |
| --------- | -------- | ------------ | ----------------------------------------------------------- |
| `slug`    | `string` | `undefined`  | Alias do link de pagamento (definido no momento da criação) |

---

# cURL

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/checkouts/{slug}' \
  -H 'accept: application/json'
```

**Respostas do Server:**

### Status 200:

_Response Body:_

```json
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
    "highlightTokens": ["string"],
    "enabled": true,
    "allTokens": true,
    "expiryTimeInMinutes": 0
  },
  "logo": "string",
  "createdAt": "2023-06-07T12:55:04.759Z",
  "updatedAt": "2023-06-07T12:55:04.759Z",
  "id": "string"
}
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

### Status 404:

_Response Body:_

```json
{
  "httpCode": 404,
  "description": "Checkout não encontrado."
}
```

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Checkouts/get_checkouts__slug_).