Scenario: Criar categoria já existente
	Given Eu estou na página "Criar categorias"
	And A categoria "Djent" já existe
	When Eu tento criar a categoria "Djent"
	Then Eu ainda estou na página "Criar categorias"
	And Eu vejo uma mensagem de erro
	
Scenario: Criar categoria sem todas as informações obrigatórias
	Given Eu estou na página "Criar categorias"
	When Eu tento criar uma categoria sem nomeTeste
	And Essa categoria possui descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"
	Then Eu ainda estou na página "Criar categorias"
	And Eu vejo uma mensagem de erro
	
Scenario: Alterar a data de lançamento de um item
	Given Eu estou na página "Editar item"
	And O item "Tekkno" possui data de lançamento "2021"
	When Eu seleciono a data de lançamento "2021"
	And Eu troco para "2022"
	And Eu aperto para confirmar
	Then Eu ainda estou na página "Editar item"
	And O item "Tekkno" possui data de lançamento "2022"

Scenario: Alterar a data de lançamento de um item sem retirar a anterior
	Given Eu estou na página "Editar item"
	And O item "Tekkno" possui data de lançamento "2021"
	When Eu adiciono data de lançamento "2022"
	Then Eu ainda estou na página "Editar item"
	And Eu recebo uma mensagem de erro
