Feature: Gerenciamento de Categorias
	As Um fornecedor de itens no Muzikas
	I want to Criar, remover e editar categorias
	So that I can Melhor identificar meus itens para o público alvo

Scenario: Criar categoria
	Given Eu estou na página "Criar categorias"
	And A categoria de nome "Djent" não existe
	When Eu crio a categoria com nome "Djent"
	And Eu forneço a descrição "Djent é um recente movimento que se desenvolveu como uma derivação do metal progressivo"
	Then Eu estou na página "Minhas categorias"
	And Eu vejo a categoria de nome "Djent"

Scenario: Criar categoria já existente
	Given Eu estou na página "Criar categorias"
	And A categoria "Djent" já existe
	When Eu tento criar a categoria "Djent"
	Then Eu ainda estou na página "Criar categorias"
	And Eu vejo uma mensagem de erro
	
Scenario: Criar categoria sem todas as informações obrigatórias
	Given Eu estou na página "Criar categorias"
	And A categoria de nome "Djent" não existe
	When Eu tento criar a categoria com nome "Djent"
	And Eu não forneço nenhuma descrição
	Then Eu ainda estou na página "Criar categorias"
	And Eu vejo uma mensagem de erro