---
sidebar_position: 7
---

# Webhooks

A chave `webhook` do payload não é obrigatória. Ao executar a integração com esse endpoint, você pode fornecer a URL e os Headers personalizados para que ocorram as chamadas nas mudanças de status do referido pedido.

| Evento                    | Descrição                                                                        |
| ------------------------- | -------------------------------------------------------------------------------- |
| `SWAP_STARTED`            | Disparado quando o pedido é registrado com sucesso                               |
| `SWAP_PAYMENT_IDENTIFIED` | Disparado quando o pagamento ref. ao pedido é identificado                       |
| `SWAP_PAYMENT_EXPIRED`    | Disparado quando o pagamento ref. ao pedido é expirado                           |
| `SWAP_PAYMENT_BLOCKED`    | Disparado quando o pagamento ref. ao pedido foi pago mas foi invalidado pelo KYC |
| `SWAP_COMPLETED`          | Disparado após a transferencia dos fundos na blockchain, retorna txId            |
| `SWAP_FAILED`             | Disparado após a transferencia dos fundos na blockchain falhar                   |

### Payload do webhook

Método: `POST`:`webhook.url`

````json
{
  "id": "id-do-pedido",
  "event": "SWAP_COMPLETED",
  "from": {
    "currency": "BRL",
    "amount": 10000, // R$ 100,00
  },
  "to": {
    "currency": "CAKE",
    "amount": "14497251241174891463",
    "network": 56,
    "address": "wallet-de-destino",
  },
  "txId": null
}
````

:::caution Atencão
Essa funcionalidade encontra-se disponível apenas em ambiente de homologação (sandbox), em breve estará disponível no ambiente de produção.
:::



Veja em execução em nosso [Swagger](https://api.bembit.com/docs/#/Checkouts/put_checkouts__id_).




