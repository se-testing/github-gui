require('@4tw/cypress-drag-drop')

context('Project Test', () => {
  it('test create a project', () => {
    cy.login();

    cy.visit("https://github.com/se-testing/repo-for-testing")

    // click the project button
    cy.get(':nth-child(5) > .UnderlineNav-item')
    .click();

    cy.get('.d-none > .btn')
    .click()
    .get('#project_name')
    .type('test project')
    .get('.form-actions > .btn')
    .click();

    cy.get('.ws-normal > .js-project-dialog-button')
    .click()
    .get('#project-column-name-')
    .type("column1")
    .get('.pb-3 > .d-flex > .btn')
    .click()

    cy.get('.p-sm-2 > .js-details-target')
    .type("note")
    .get('.js-project-note-form > .d-flex > .btn-primary')
    .click()
    .get('.js-project-note-form > .d-flex > .ml-1')
    .click();

    cy.get('.new-project-column')
    .click()
    .get('#project-column-name-')
    .type("column2")
    .get('.pb-3 > .d-flex > .btn')
    .click()

    cy.get('.pl-5')
    .drag('.project-columns-container > div > div:nth-child(2) > :nth-child(3) ')
  })
})