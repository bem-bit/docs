---
sidebar_position: 5
---

# Cotação da troca (USD)

Devolve o valor atual do **Dolar** respeito ao **Real Brasileiro**, representado com a *stablecoin* ***USDT***.

**URL**
```
https://api.bembit.com/api/v1/quotation/book/{valor}
``` 

**Método**

```
GET
```

**Parametros** 

:::note Observação
Os parametros para essa solicitação devem ser passados ao ***end-point*** via *path* no momento da solicitação.
:::

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `amount` | `number` | `0` | Valor escolhido |

### cURL

```c
curl -X 'GET' \
  'https://api.bembit.com/api/v1/quotation/book/{valor}' \
  -H 'accept: application/json'
```
### Response Body

```c
{
  "amount": 1,
  "buy": 5.071668,
  "sell": 5.0706299999999995,
  "currency": "BRL"
}
```
- ***amount:*** Valor inicial da troca.
- ***buy:*** Quantidade de tokens que estão sendo comprados.
- ***sell:*** Quantidade de tokens que estão sendo vendidos.
- ***currency:*** Moeda inicial da troca.

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_book__amount_).