Feature: Cadastro e manutenção de itens no menu (inserir, remover, atualizar)
    In order to mostrar meus itens e seus respectivos detalhes para que os clientes possam comprá-los
    As a fornecedor de produtos
    I want to cadastrar e gerenciar meus itens cadastrados

    Background:
        Given eu estou logado como "fornecedor"

    [WIP]
    Scenario: tentar cadastrar um item sem fornecer todos os dados obrigatórios
        Given eu estou na página "Cadastrar item"
        When eu cadastro

    Scenario: tentar modificar um item sem que algum campo tenha sido modificado
        Given eu estou na página "Modificar item"
        And eu vejo "The Gods We Can Touch" no campo "Nome"
        When eu tento aplicar a modificação
        Then eu ainda estou na página "Modificar item"
        And eu consigo ver uma mensagem de aviso
        And eu vejo "The Gods We Can Touch" no campo "Nome"

    Scenario: tentar cadastrar um item que excede o limite de quantidade de imagens ou tamanho de imagens
        Given o limite de quantidade de imagens é "1"
        And eu estou na página "Cadastrar item"
        And o item tem "0" imagens
        When eu adiciono uma imagem "2" vezes
        And eu tento cadastrar o item
        Then eu ainda estou na página "Cadastrar item"
        And eu vejo uma mensagem de erro
        And o item tem "0" imagens

    Scenario: excluir item com sucesso
        Given eu estou na página "Meus itens"
        And o item de nome "The Gods We Can Touch" aparece na lista de itens cadastrados
        When eu peço a remoção do item de nome "The Gods We Can Touch"
        And eu confirmo a remoção do item
        Then eu ainda estou na página "Meus itens"
        And eu vejo uma mensagem de confirmação
        And eu não vejo o item de nome "The Gods We Can Touch" na lista de itens cadastrados
