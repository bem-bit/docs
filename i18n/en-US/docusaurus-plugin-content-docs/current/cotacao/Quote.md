---
sidebar_position: 1
---

# Gerando uma cotação

Para gerar uma cotacão é necessário informar o par de moedas para a transação e em qual rede será feita a transação se a cotação for executada.

URL
```
api/v1/integrations/quotation
```

Método
```
POST
```

# Request BODY:

- ***network:*** Id da *Blockchain*(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- ***from:*** **Token** base do *swap* ou da *cotação*.
- ***to:*** **Token** do qual se deseja consultar o valor respeito ao **Token** base.
- ***amount:*** O valor da transação.

![Bembit API](/img/bembit_api_swap_request.png "Request Body")
Exemplo do **REQUEST BODY** da solicitação **POST** para a realização de uma troca de *Reais Brasileiros* a um *Token* especificado na hora da criação da cobrança utilizando a ***API** da **Bembit**.


# Response BODY:

![Bembit API](/img/bembit_api_quote_response.png "Response Body")
- ***network:*** Id da *Blockchain*(rede) que da suporte à negociação dos **Tokens** inclusos na transação.
- from / ***symbol:*** Simbolo do **Token** base na cotação.
- from / ***name:*** Nome do **Token**.
- from / ***decimals:*** Casas decimais do **Token**.
- To / ***symbol:*** Simbolo do **Token** de cotação na operação.
- To / ***name:*** Nome do **Token**.
- To / ***decimals:*** Casas decimais do **Token**.
- ***amount*** Valor final da cotação.
- ***fee*** Taxa de negociação de uma possivel operação de troca.

Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Quotation/post_integrations_quote).