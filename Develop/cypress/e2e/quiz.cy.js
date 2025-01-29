describe('Quiz Test Suite', () => {
 beforeEach(() => {
    cy.visit('/');
     })

 it('Clicking the Start button should show the quiz questions',  () => {
    cy.get('.btn-primary').click();
    cy.get('.btn-primary').should('contain','1');
 })

   it('Clicking the first option button should select option one', () => {
      cy.get('.btn-primary').click();
      cy.get('.btn-primary').should('contain','1');
   })
   it('Clicking the second option button should select option two', () => {
      cy.get('.btn-primary').click();
      cy.get('.btn-primary').should('contain','2');
   })
})
