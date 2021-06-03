/// <reference types="cypress" />

import {getRandString} from "../support/tools";

context('Add File to Master', () => {
  before(() => {
    cy.login();
  });
  beforeEach(function () {
    cy.preserveAllCookiesOnce()
  });
  let newFileName = getRandString(16);
  let newFileContent = getRandString(128);
  it('should upload new file', function () {
    cy.visit("https://github.com/se-testing/repo-for-testing");
    cy.get('.btn > .d-none').click();
    cy.get('div > .dropdown-menu > :nth-child(3) > .dropdown-item').click();
    cy.get('#commit-summary-input').type(getRandString(10));
    cy.writeFile(`cypress/temporary/${newFileName}`, newFileContent);
    cy.pause();
    cy.contains(newFileName).should('be.visible');
    cy.get('.file-commit-form > .btn-primary').click();
  });
  it('should have new file in main', function () {
    cy.get('.UnderlineNav-body > :nth-child(1) > .UnderlineNav-item').click();
    cy.wait(500);
    cy.contains(newFileName).click();
    cy.contains(newFileContent).should('be.visible');
  });
})
