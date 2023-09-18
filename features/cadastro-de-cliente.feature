#language:pt

Funcionalidade: Cadastro de cliente
    Para que eu possa me cadastrar no sistema
    Sendo que eu ainda não possuo cadastro
    Posso me cadastrar no sistema

@new_customer
Esquema do Cenario: Novo cliente
    O cliente efetua seu próprio cadastro através da tela de cadastro
    e um novo registro é inserido na base de dados

    Dado que <codigo> é um novo cliente
    Quando eu faço o meu cadastro
    Então devo ver uma mensagem de sucesso

       Exemplos:
        |  codigo   |
        |  0001     |
        |  0002     |
       
       