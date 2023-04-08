Feature: Link de compartilhamento
    As Um usuário usando o Muzikas
    I want to Fornecer links para outros usuários do Muzikas
    So that I can acessar locais desejados mais facilmente

    Scenario: Compartilhar link de busca de um produto
        Given Eu realizei a busca do item "The Gods We Can Touch"
        And Eu vejo a página resultante
        When Eu compartilho o link da página com outros usuários
        And Os outros usuários utilizam do link
        Then Os outros usuários conseguem visualizar a página resultante da busca do item "The Gods We Can Touch"
        And A página é igual a visualizada inicialmente

    Scenario: Compartilhar link da página de um produto
        Given Eu estou na página do item "The Gods We Can Touch"
        When Eu compartilho o link da página com outros usuários
        And Os outros usuários utilizam do link
        Then Os outros usuários visualizam a página do item "The Gods We Can Touch"
        And A página é igual a visualizada inicialmente 