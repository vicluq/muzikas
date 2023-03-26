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

    Scenario: editar um item com sucesso
        Given eu estou na página "Editar item"
        And o campo "Descrição" tem valor "WIP."
        When eu altero o valor do campo "Descrição" para "The Gods We Can Touch é o quarto álbum de estúdio da cantora pop norueguesa Aurora, lançado em 21 de janeiro de 2022 pela Decca Records e Glassnote Records."
        Then eu estou na página "Meus itens"
        And eu vejo o item "The Gods We Can Touch" com o campo "Descrição" tendo o valor "The Gods We Can Touch é o quarto álbum de estúdio da cantora pop norueguesa Aurora, lançado em 21 de janeiro de 2022 pela Decca Records e Glassnote Records."

    Scenario: tentar editar um campo obrigatório para vazio
        Given eu estou na página "Editar item"
        And o campo obrigatório "Preço" tem valor "69.69"
        When eu altero o valor do campo "Preço" para que ele fique vazio
        Then eu estou na página "Editar item"
        And eu vejo uma mensagem de erro
        And o campo obrigatório "Preço" ainda tem valor "69.69"

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
