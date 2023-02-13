Feature: Gerênciamento de Promoções
    As "Administrador"
    I want to ver as promoções cadastradas, podendo adicionar novas, edita-las ou exclui-las
    So that eu possa gerência promoções

Scenario: Visualizar promoções
    Given eu estou na página "Sua conta"
    When eu clico em "Promoções"
    Then eu consigo ver as promoções cadastradas numa tabela
    And eu estou na página "Promoções"

Scenario: Crio uma nova promoção por valor absoluto
    Given estou na página "Promoções"
    When eu selciono "+"
    And eu preencho o campo "Nome"
    And eu preencho o campo "Data de Inicio"
    And eu preencho o campo "Valor"
    And eu seleciono "Absoluto"
    And eu preencho "Categória"
    And seleciono "Criar"
    Then a nova promoção aparece na tabela da página "Promoções"

Scenario: Crio uma nova promoção por valor porcentagem
    Given estou na página "Promoções"
    When eu selciono "+"
    And eu preencho o campo "Nome"
    And eu preencho o campo "Data de Inicio"
    And eu preencho o campo "Valor"
    And eu seleciono "Porcentagem"
    And eu preencho "Categória"
    And seleciono "Criar"
    Then a nova promoção aparece na tabela da página "Promoções"

Scenario: Cadastrar promoção sem dados obrigatórios
    Given estou na página "Promoções"
    When eu seleciono "+"
    And eu seleciono "Criar"
    Then vejo a mensagem "Por favor, preencher todos os dados exigidos para cadastrar a categória"
    And continuo vendo o formulário

Scenario: Habilitar promoção
    Given estou na página "Promoções"
    And existem promoções cadastradas
    When eu seleciono a opção de editar a promoção "Desconto 5%"
    And eu vejo as informações de promoção "Desconto 5%"
    And eu seleciono a opção de "Ativar"
    And eu seleciono "Salvar"
    Then a promoção aparece habilitada na tabela da página "Promoções"

Scenario: Excluir promção
    Given estou na página "Promoções"
    And existe apenas 1 promoção cadastrada 
    And eu vejo a promoção "Desconto 5%"
    And eu vejo a promoção "Desconto 10%"
    When eu seleciono a opção ">" a promoção "Desconto 10%"
    And eu vejoas informações da promoção "Desconto 10$"
    And eu seleciono a opção de excluir 
    Then a tabela na página "Promoções" aparece apenas "Desconto 10%"

Scenario: Alterar dados da promoção
    Given estou na página "Promoções"
    And existem promoções cadastradas
    And eu vejo a pormoção "Desconto de 5%"
    When eu seleciono a opção de editar a promoção "Desconto de 5%"
    And eu vejo as informações da promoção "Desconto de 5%"
    And eu altero "Data Final" para "20/01/23"
    And eu seleciono "Salvar"
    Then estou na página "Promoções"
    And vejo a promoção "Desconto 5%" atualizada
    
