Feature: Cadastro e manutenção de itens no menu (inserir, remover, atualizar)
    In order to mostrar meus itens e seus respectivos detalhes para que os clientes possam comprá-los
    As a fornecedor de produtos
    I want to cadastrar e gerenciar meus itens cadastrados

    Background:
        Given eu estou logado como "fornecedor"

    Scenario: tentar cadastrar um item sem fornecer todos os dados obrigatórios
        Given eu estou na página "Cadastrar item"
        When eu tento cadastrar um item com pelo menos um campo obrigatório em branco
        Then eu vejo uma mensagem de erro
        And eu ainda estou na página "Cadastrar item"

    Scenario: cadastrar um item com sucesso
        Given eu estou na página "Cadastrar item"
        When eu preencho corretamente todos os campos obrigatórios para o item "The Gods We Can Touch"
        And eu tento cadastrar o item "The Gods We Can Touch"
        Then eu estou na página "Meus itens"
        And eu vejo o item "The Gods We Can Touch"

    Scenario: tentar modificar um item sem que algum campo tenha sido modificado
        Given eu estou na página "Modificar item"
        And eu vejo "The Gods We Can Touch" no campo "Nome"
        When eu tento aplicar a modificação
        Then eu ainda estou na página "Modificar item"
        And eu consigo ver uma mensagem de aviso
        And eu vejo "The Gods We Can Touch" no campo "Nome"

    Scenario: tentar cadastrar um item que excede o limite de quantidade de imagens
        Given o limite de quantidade de imagens é "1"
        And eu estou na página "Cadastrar item"
        And o item "The Gods We Can Touch" tem "1" imagens
        When eu tento adicionar a imagem "12984_2.png"
        Then eu ainda estou na página "Cadastrar item"
        And eu vejo uma mensagem de erro
        And a imagem "12984_2.png" não foi adicionada

    Scenario: excluir item com sucesso
        Given eu estou na página "Meus itens"
        And eu vejo o item "The Gods We Can Touch"
        When eu peço a remoção do item "The Gods We Can Touch"
        And eu confirmo a remoção do item "The Gods We Can Touch"
        Then eu ainda estou na página "Meus itens"
        And eu vejo uma mensagem de confirmação
        And eu não vejo o item "The Gods We Can Touch"

    Scenario: excluir item que não está na lista
        Given eu estou na página "Meus itens"
        And eu vejo o item "The Gods We Can Touch"
        When eu peço a remoção do item "The Gods We Can Touch"
        Then eu vejo uma mensagem de aviso
        And eu não vejo o item "The Gods We Can Touch"
        And eu ainda estou na página "Meus itens"
