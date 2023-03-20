---
sidebar_position: 4
---

# Simulação de SWAP

Para receber uma lista com as redes disponiveis é necessário realizar uma solicitação do tipo **GET** ao ***end-point*** seguindo a seguinte estrutura.

**URL**
```
https://api.bembit.com/api/v1/integrations/quotation/book/{amount}
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
| `amount` | `string` | `0` | Valor do investimento |

# cURL

Exemplo de **cURL** da solicitação **GET** mostrar a simulação de um *SWAP* entre dois **Tokens** utilizando a ***API** da **Bembit**.
![Bembit API](/img/bembit_api_swap_value_curl.png "cURL")

# Valores de exemplo

- ***amount:*** Valor inicial da troca.
- ***buy:*** Quantidade de tokens que estão sendo comprados.
- ***sell:*** Quantidade de tokens que estão sendo vendidos.
- ***currency:*** Moeda inicial da troca.
![Bembit API](/img/bembit_api_swap_value_example_values.png "cURL")

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/get_quotation_book__amount_).