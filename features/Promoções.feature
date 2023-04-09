Feature: Gerênciamento de Promoções
    As "Administrador"
    I want to ver as promoções cadastradas, podendo adicionar novas, edita-las ou exclui-las
    So that eu possa gerência promoções

Scenario: See promotions
    Given on the page "Promotions"
    And I have "3" promotions stored
    Then I can see "3" promotions in a table

Scenario: Create promotion
    Given estou na página "Promotions"
    And I write "10% em CDs" in the field "Nome"
    And eu preencho o campo "Valor"
    And eu preencho "Categória"
    When i click on "Criar"
    Then a new promotion is created


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
    
