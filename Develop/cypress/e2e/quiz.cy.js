describe('Quiz Test Suite', () => {
 beforeEach(() => {
    cy.visit('/');
     })

 it('Clicking the Start button should show the quiz questions',  () => {
    cy.get('.btn-primary').click();
    cy.get('.btn-primary').should('contain','1');
 })
})
   it('Clicking the first option button should select option one', () => {
      cy.get('.btn-primary').click();
      cy.get('.btn-primary').should('contain','2');
   })
   it('Clicking the second option button should select the previous question', () => {
      cy.get('.btn-primary').click();
      cy.get('.btn-primary').should('contain','1');
   })
   it('Clicking the Finish button should show the final score', () => {
      cy.get('.btn-primary').click();
      cy.get('.btn-primary').should('contain','1');
   })
   it('Clicking the Play Again button should reset the quiz', () => {
      cy.get('.btn-primary').click();
      cy.get('.btn-primary').should('contain','1');
   })

   


