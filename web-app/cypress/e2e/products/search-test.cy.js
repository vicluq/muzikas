describe('Search Test', function(){
    it('Success Search', () => {
        cy.visit('/products')
        cy.get('#products-search-bar').type('The Gods We Can Touch')
        cy.get('#search-button').click()
    });
})