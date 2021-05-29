Cypress.Commands.add('login', ()=>{
  cy.visit('https://github.com/');
  cy.get('.text-lg-left > .mr-3')
    .click()
    .get('#login_field')
    .type('test-account-for-se123@protonmail.com')
    .get('#password')
    .type('testaccountforse123')
    .get('.btn')
    .click();
})
