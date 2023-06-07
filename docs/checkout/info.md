---
sidebar_position: 1
---

# Informações

### Obtendo dados do link

Para obtener todas as informações relativas a um link de pagamento em especifico, é necessário realizar uma request do tipo **GET** incluindo o _Slug_ do link:

**URL**

```
https://api.bembit.com/api/v1/checkout/{slug}
```

**Método**

```
GET
```

**Parametros**

:::note Observação
Os parametros para essa solicitação devem ser passados ao **_end-point_** embutido no final da **URL** da **_request_**.
:::

| Parametro | Tipo     | Valor padrão | Descrição                                                          |
| --------- | -------- | ------------ | ------------------------------------------------------------------ |
| `slug`    | `string` | `undefined`  | Código gerado pelo sistema para identificação do link de pagamento |

---

# cURL

```cURL
curl -X 'GET' \
  'https://api.bembit.com/api/v1/checkouts/64807a180c9807b171a911c3' \
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
- **_Description:_** Descrição do *link / pagamento*.
- **_Slug:_** Código gerado automaticamente pelo sistema para identificação do link de pagamento.
- **_Active:_** Status do _Link de pagamento_ pudendo ser ***True*** ou ***False***.
- **_paymentMethodPix / expiryTimeInMinutes:_** Tempo de validade em *minutos* do **QR** gerado para pagamento.
- **_paymentMethodPix / enabled:_** Status do metodo **PIX**, ***true*** se estiver habilidato ou ***false*** se não.
- **_paymentMethodCrypto / highlightTokens:_** É um ***Array de strings*** com os *símbolos* dos **tokens** aceitos.
- **_paymentMethodCrypto / enabled:_** Define se o pagamento por ***Cryptomoedas*** é aceito.
- **_paymentMethodCrypto / allTokens:_** É ***true*** caso sejam aceitas *todas* as criptomoedas, caso contrario é ***false***.
- **_paymentMethodCrypto / expiryTimeInMinutes:_** Tempo de validade em *minutos* do **QR** gerado para pagamento.
- **_Logo:_** *URL* da imagem do logo utilizado no link de pagamento.
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


Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/BemPix/get_client_balance).
