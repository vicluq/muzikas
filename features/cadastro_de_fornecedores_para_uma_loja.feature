Feature: Cadastro de fornecedores para uma loja
  As a "Loja" cadastrada
  I want to realizar um cadastro de um fornecedor no sistema
  So that eu posso criar um login para um fornecedor

    
  Background:
    Given eu estou logado como "loja/empresa"

  Scenario: Cadastro completo de fornecedores para loja
    Given eu sou uma loja cadastrada
    And estou na página "MainPage"
    And eu quero criar um cadastro para um fornecedor
    Then eu clico em "CadastroDeFornecedor"
    And entro na página "CadastroDeFornecedor"
    When eu preencho o campo "Nome do funcionário" com "Fulano"
    And preencho o campo "E-mail" com "fulano@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And preencho o campo "Foto de perfil" com um arquivo jpg
    And seleciono "Cadastrar"
    Then eu sou redirecionado para a página "CadastroSucedido"
    And seleciono o botão "Feito"
    Then volto para a "MainPage"

  Scenario: Cadastro de fornecedores para loja preenchendo apenas as obrigatórias
    Given eu sou uma loja cadastrada
    And estou na página "CadastroDeFornecedor"
    When eu preencho o campo "Nome do funcionário" com "Fulano"
    And preencho o campo "E-mail" com "fulano@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And seleciono "Cadastrar"
    Then eu sou redirecionado para a página "CadastroSucedido"
    And seleciono o botão "Feito"
    Then volto para a "MainPage"

  Scenario: Cadastro de fornecedores para loja preenchendo apenas as obrigatórias
    Given eu sou uma loja cadastrada
    And estou na página "CadastroDeFornecedor"
    When eu preencho o campo "Nome do funcionário" com "Fulano"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And seleciono "Cadastrar"
    Then é retornado a mim a mensagem dizendo "Preencha/corrija todos os dados*" em vermelho
    And ao lado do campo que faltou aparecerá um asterisco em vermelho
    Then continuo na página "CadastroDeFornecedor"

  Scenario: Cadastro de fornecedores quando um dado obrigatório já existe no banco de dados
    Given eu sou uma loja cadastrada
    And estou na página "CadastroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "E-mail" com "muzikas@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And seleciono "Cadastrar"
    Then é retornado a mim a mensagem dizendo "Preencha/corrija todos os dados*" em vermelho
    And ao lado do campo que já existe aparecerá uma mensagem "(já existente)*"
    Then continuo na página "CadastroDeFornecedor"

  Scenario: Cadastro de fornecedores quando o campo "Senha" não é igual ao campo "Confirme a sua senha"
    Given eu sou uma loja cadastrada
    And estou na página "CadastroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "E-mail" com "muzikas@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "uzikas"
    And seleciono "Cadastrar"
    Then é retornado a mim a mensagem dizendo "Preencha/corrija todos os dados*" em vermelho
    And ao lado do campo que já existe aparecerá uma mensagem "(senhas diferentes)*"
    Then continuo na página "CadastroDeFornecedor"