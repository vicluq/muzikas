describe('Add Test', function(){
    it('Success Add', () => {
        cy.visit('/products')
        cy.get('#add-button').click()
    });
})