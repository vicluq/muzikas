Feature: Página inicial
    As um usuário utilizando Muzikas
    I want to visualizar os itens disponíveis para compra
    So that I can descobrir quais itens estão à venda e escolher quais comprar


    Scenario: Visualizar a página inicial
        Given Eu estou na página "Home"
        And O item "The Gods We Can Touch" está cadastrado para venda na loja
        When Eu visualizo a página
        Then O item "The Gods We Can Touch" aparece na página

    Scenario: Clicar no item à venda
        Given Estou na página "Home"
        And O item "The Gods We Can Touch" está visível na página
        When Eu clico na foto do item
        Then Eu sou redirecionado para a página do produto "The Gods We Can Touch"
