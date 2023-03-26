Feature: Login dos Fornecedores
  As a "Fornecedor" usuário do sistema
  I want to realizar o login do sistema como fornecedor
  So that eu possa usar o sistema como fornecedor

  Scenario: Login realizado corretamente
    Given sou um fornecedor cadastrado no sistema
    And estou na página "LoginDeFornecedor"
    When eu preencho o campo "Usuário" com o valor "rls7" 
    And eu preencho o campo "Senha" com o valor "Abc.123@"
    And eu seleciono a opção "Login"
    Then eu sou redirecionado para a página "SuaConta"

  Scenario: Login com credenciais incorretas
    Given sou um fornecedor cadastrado no sistema
    And estou na página "LoginDeFornecedor"
    When eu preencho o campo "Usuário" com o valor "rls7"
    And eu preencho o campo "Senha" com o valor "abc123"
    And eu seleciono a opção "Login"
    Then eu recebo uma mensagem de erro de credenciais incorretas

  Scenario: Esqueci a senha
    Given sou um fornecedor cadastrado no sistema
    And estou na página "LoginDeFornecedor"
    And eu seleciono a opção "Esqueceu a senha?"
    Then eu sou redirecionado para a página "RecuperarSenha"
  
  Scenario: Opção Cadastre-se
    Given eu estou na página "LoginDeFornecedor"
    When eu seleciono a opção "Cadastre-se"
    Then eu sou redirecionado para a página "CadastroDeFornecedor"

  Scenario: Recuperar a senha
    Given eu estou na página "RecuperarSenha"
    And eu sou um fornecedor cadastrado no sistema
    When eu preencho o campo "E-mail cadastrado" com o valor "rebecca@gmail.com"
    And eu seleciono a opção "Solicitar"
    Then eu recebo uma mensagem de confirmação
    And eu recebo um e-mail com a senha

  Scenario: Recuperar a senha - e-mail não registrado
    Given eu estou na página "RecuperarSenha"
    And eu sou um fornecedor cadastrado no sistema
    When eu preencho o campo "E-mail cadastrado" com o valor "reb@gmail.com"
    And eu seleciono a opção "Solicitar"
    Then eu recebo uma mensagem de erro de e-mail não registrado