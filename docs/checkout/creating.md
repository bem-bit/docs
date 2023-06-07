---
sidebar_position: 3
---

# Gerar link

### Criando um link de pagamento

Para gerar um novo link de pagamento é necessário realizar uma request do tipo **POST** seguindo os parámetros definidos a continuação:

**URL**

```
https://api.bembit.com/api/v1/checkouts
```

**Método**

```
POST
```

### Parametros

:::note Observação
Os parametros para essa solicitação devem ser passados ao ***end-point*** via *headers*, junto com o ***request body*** no momento da solicitação.
:::

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `api` | `string` | `undefined` | API Key obtída na plataforma |
| `secret` | `string` | `undefined` | Secret obtído na plataforma. |


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

```cURL
curl -X 'POST' \
  'https://api-sandbox.bembit.com/api/v1/checkouts' \
  -H 'accept: */*' \
  -H 'api: [Seu API]' \
  -H 'secret: [Seu secret]' \
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

## Respostas do Server:

### Status 201:

    Created

### Status 403:

    Unauthenticated
    

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Checkouts/post_checkouts).