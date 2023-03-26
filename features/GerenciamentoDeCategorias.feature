Feature: Gerenciamento de Categorias
	As Um fornecedor de itens para o sistema Muzikas
	I want to Criar, remover e editar categorias
	So that I can Melhor identificar meus itens para o meu público alvo

    Background: 
        Given Eu estou logado como "Fornecedor"

    Scenario: Criar categoria
        Given Eu estou na página "Criar categorias"
        And A categoria com nome "Djent" não existe no sistema
        When Eu crio a categoria com nome "Djent"
        And Eu forneço a descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"
        And Eu confirmo a criação da categoria
        Then Eu estou na página "Minhas categorias"
        And Eu vejo a categoria de nome "Djent"

    Scenario: Criar categoria já existente
        Given Eu estou na página "Criar categorias"
        And A categoria com nome "Djent" já existe no sistema
        When Eu crio a categoria com nome "Djent"
        And Eu forneço a descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"
        And Eu confirmo a criação da categoria
        Then Eu ainda estou na página "Criar categorias"
        And Eu vejo uma mensagem de erro
        
    Scenario: Criar categoria sem todas as informações obrigatórias
        Given Eu estou na página "Criar categorias"
        And A categoria com nome "Djent" não existe no sistema
        When Eu crio a categoria com nome "Djent"
        And Eu confirmo a criação da categoria
        Then Eu ainda estou na página "Criar categorias"
        And Eu vejo uma mensagem de erro

    Scenario: Remover categoria
        Given Eu estou na página "Editar categorias"
        And Eu vejo a categoria de nome "Djent"
        When Eu removo a categoria de nome "Djent"
        Then Eu estou na página "Minhas categorias"
        And Eu não vejo a categoria de nome "Djent" na página "Minhas categorias"

    Scenario: Editar uma categoria
        Given Eu estou na página "Editar categorias"
        And Eu vejo a categoria de nome "Djent"
        And A categoria de nome "Djent" possui descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"
        When Eu altero a descrição da categoria de nome "Djent" para "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo, tendo como berço, assim como sendo mais evidente, lugares como o norte da Europa, o nordeste dos Estados Unidos e ainda a Austrália."
        And Eu confirmo a edição da categoria
        Then Eu estou na página "Minhas categorias"
        And A categoria de nome "Djent" agora possui a descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo, tendo como berço, assim como sendo mais evidente, lugares como o norte da Europa, o nordeste dos Estados Unidos e ainda a Austrália."

    Scenario: Editar uma categoria retirando informação obrigatória
        Given Eu estou na página "Editar categorias"
        And Eu vejo a categoria de nome "Djent"
        And A categoria de nome "Djent" possui descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"
        When Eu altero descrição da categoria de nome "Djent" para vazio
        And Eu confirmo a edição da categoria
        Then Eu ainda estou na página "Editar categorias"
        And Uma mensagem de erro é exibida
        And Eu vejo a categoria de nome "Djent"
        And A categoria de nome "Djent" segue com descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"

    Scenario: Editar uma categoria gerando categorias repetidas
        Given Eu estou na página "Editar Categorias"
        And Eu vejo a categoria de nome "Djent"
        And A categoria de nome "Pop" já existe no sistema
        When Eu altero o nome da categoria de nome "Djent" para "Pop"
        And Eu confirmo a edição da categoria
        Then Eu ainda estou na página "Editar categorias" 
        And Uma mensagem de erro é exibida
        And A categoria de nome "Djent" segue com o nome "Djent"
        And Eu vejo a categoria de nome "Djent"