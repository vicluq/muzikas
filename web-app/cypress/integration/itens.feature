Feature: Cadastro e manutenção de itens no menu
    As a fornecedor de produtos
    I want to cadastrar e gerenciar meus itens cadastrados
    In order to mostrar meus itens e seus respectivos detalhes para que os clientes possam comprá-los

    Background:
        Given eu estou logado como "fornecedor"

    Scenario: tentar cadastrar um item sem fornecer todos os dados obrigatórios
        Given eu estou na página "Cadastrar item"
        And o item de nome "The Gods We Can Touch" não foi cadastrado por mim
        When eu crio o item de nome "The Gods We Can Touch"
        And eu confirmo a criação do item
        Then eu ainda estou na página "Cadastrar item"
        And eu vejo uma mensagem de erro

    Scenario: cadastrar um item com sucesso
        Given eu estou na página "Cadastrar item"
        And o item de nome "The Gods We Can Touch" não foi cadastrado por mim
        When eu crio o item de nome "The Gods We Can Touch"
        And eu preencho todos os campos obrigatórios corretamente
        And eu confirmo a criação do item
        Then eu estou na página "Meus itens"
        And eu vejo o item de nome "The Gods We Can Touch"

    Scenario: editar um item com sucesso
        Given eu estou na página "Editar item"
        And eu vejo o item de nome "Neyslutrans"
        And o campo "Preço" tem valor "69.68"
        When eu altero o valor do campo "Preço" para "69.69"
        And eu confirmo a edição do item
        Then eu estou na página "Meus itens"
        And eu vejo o item de nome "Neyslutrans" com o campo "Preço" possuindo o valor "69.69"

    Scenario: tentar editar um campo obrigatório para vazio
        Given eu estou na página "Editar item"
        And eu vejo o item de nome "consolation"
        And o campo obrigatório "Preço" tem valor "69.69"
        When eu removo o valor do campo Preço
        And eu confirmo a edição do item
        Then eu ainda estou na página "Editar item"
        And eu vejo uma mensagem de erro
        And o campo obrigatório "Preço" ainda tem valor "69.69"

    Scenario: tentar editar um item sem que algum campo tenha sido modificado
        Given eu estou na página "Editar item"
        And eu vejo o item de nome "Pedra Preta"
        When eu confirmo a edição da categoria
        Then eu ainda estou na página "Modificar item"
        And eu consigo ver uma mensagem de aviso
        And eu ainda vejo o item de nome "Pedra Preta"
        And ele não possui nenhuma modificação

    Scenario: excluir item com sucesso
        Given eu estou na página "Editar item"
        And eu vejo o item de nome "The Gods We Can Touch"
        When eu removo o item de nome "The Gods We Can Touch"
        Then eu estou na página "Meus itens"
        And eu vejo uma mensagem de confirmação
        And eu não vejo o item de nome "The Gods We Can Touch"