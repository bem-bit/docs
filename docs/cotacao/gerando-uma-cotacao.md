# Gerando uma cotação

Para gerar uma cotacão é necessário informar o par de moedas para a transação e em qual rede será feita a transação se a cotação for executada.

URL
```
api/v1/integrations/quote
```

Método
```
POST
```

| Parametro | Tipo | Valor padrão | Descrição |
| --------- | ---- | ------------ | --------- |
| `network` | `number` | `56` | ID da rede |
| `from` | `string` | `BRL` | Símbolo da moeda vendedora |
| `to` | `string` | `BNB` | Símbolo da moeda compradora |
| `amount` | `string` | `1000000000000000000` | 18 posições equivalem a uma unidade inteira da moeda vendedora `from` |

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/post_integrations_quote).