---
sidebar_position: 2
---

# Começando

Primeiro é necessário realizar o [cadastro/login](https://app.bembit.com/signin) na plataforma.

Acesse [app.bembit.com](https://app.bembit.com) e para realizar o cadastro ou efetuar a entrada no sistema.

## Gerando as chaves

Após, acesse o menu __"API"__  e em seguida clique no botão __"Gerar chave"__.

Pronto, uma chave de `API` foi gerada, e nela contêm duas informações:

| Chave | Descrição |
| ------ | ------ | 
| `api` | Hash de 10 dígitos referente a identificação da chave. |
| `secret` | Hash de 32 dígitos referente a sua chave privada. |

Você irá utilizar essas chaves no `HEADER` das requisições para a nossa `API`.

:::caution Atencão
Certifique de copiar e guarda a chave `secret`, pois após a criação você não terá mais acesso a mesma na plataformas
:::



## Configurando sua requisição

Você pode testar usando o [Postman](https://www.postman.com/), [Insominia](https://insomnia.rest/) ou outra aplicação similar de sua preferência para realizar os testes de integração a nossa `API`.

Com posse das chaves, será necessário configurar os `headers` da aplicação, da seguinte forma:

```
headers: {
    api: <SUA_API>
    secret: <SUA_API_SECRET>
}
```

:::note Observação
Nem todos os endpoints da nossa API precisam da referencia da chave de api/secret nos headers, você pode conferir a necessidade dos mesmos através do nosso [Swagger](https://api.bembit.com/docs).
:::