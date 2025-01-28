describe('Quiz Test Suite', () => {
 beforeEach(() => {
    cy.visit('/');
     })

 it('Clicking the Start button should show the quiz questions',  () => {
    cy.get('.btn-primary').click();
    cy.get('.btn-primary').should('contain','1');
 })
})


