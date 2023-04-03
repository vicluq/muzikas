Feature: Cadastro de Empresas e/ou Lojas
  As a "Loja" não cadastrada
  I want to realizar um cadastro no sistema
  So that eu posso ingressar ao Muzikas

  Background:
    Given eu não tenho cadastro no Muzikas

  Scenario: Cadastro Completo
    Given eu sou uma loja não cadastrada
    And estou na página "RegistroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "E-mail" com "muzikas@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And preencho o campo "CNPJ" com "00000000000000"
    And preencho o campo "Foto de perfil" com um arquivo jpg
    And preencho o campo "Descrição" com "Essa é a minha empresa Muzikas"
    And seleciono "Cadastrar"
    Then eu sou redirecionado para a página "CadastroSucedido"
    And seleciono o botão "Feito"
    Then volto para a "MainPage"

  Scenario: Cadastro Apenas das Obrigatórias
    Given eu sou uma loja não cadastrada
    And estou na página "RegistroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "E-mail" com "muzikas@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And preencho o campo "CNPJ" com "00000000000000"
    And seleciono "Cadastrar"
    Then eu sou redirecionado para a página "CadastroSucedido"
    And seleciono o botão "Feito"
    Then volto para a "MainPage"

  Scenario: Cadastro Faltando dado obrigatório
    Given eu sou uma loja não cadastrada
    And estou na página "RegistroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And preencho o campo "CNPJ" com "00000000000000"
    And seleciono "Cadastrar"
    Then é retornado a mim a mensagem dizendo "Preencha/corrija todos os dados*" em vermelho
    And ao lado do campo que faltou aparecerá um asterisco em vermelho
    Then continuo na página "RegistroDeFornecedor"

  Scenario: Cadastro quando um dado obrigatório já existe no banco de dados
    Given eu sou uma loja não cadastrada
    And estou na página "RegistroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "E-mail" com "muzikas@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "#Muzikas"
    And preencho o campo "CNPJ" com "00000000000000"
    And seleciono "Cadastrar"
    Then é retornado a mim a mensagem dizendo "Preencha/corrija todos os dados*" em vermelho
    And ao lado do campo que já existe aparecerá uma mensagem "(já existente)*"
    Then continuo na página "RegistroDeFornecedor"

  Scenario: Cadastro quando o campo "Senha" não é igual ao campo "Confirme a sua senha"
    Given eu sou uma loja não cadastrada
    And estou na página "RegistroDeFornecedor"
    When eu preencho o campo "Nome da empresa" com "Muzikas"
    And preencho o campo "E-mail" com "muzikas@cin.ufpe.br"
    And preencho o campo "Senha" com "#Muzikas"
    And preencho o campo "Confirmar Senha" com "uzikas"
    And preencho o campo "CNPJ" com "00000000000000"
    And seleciono "Cadastrar"
    Then é retornado a mim a mensagem dizendo "Preencha/corrija todos os dados*" em vermelho
    And ao lado do campo que já existe aparecerá uma mensagem "(senhas diferentes)*"
    Then continuo na página "RegistroDeFornecedor"
