/// <reference types="cypress" />

import {getRandString} from "../support/tools";

context('Add Files', () => {
  before(() => {
    cy.login();
  });
  let newBranchName = getRandString(10);
  let newFileName = getRandString(16);
  it('should upload new file', function () {
    cy.visit("https://github.com/se-testing/repo-for-testing");
    cy.get('.btn > .d-none').click();
    cy.get('div > .dropdown-menu > :nth-child(3) > .dropdown-item').click();
    /*cy.get('.form-checkbox-details-trigger').click();
    cy.get('.form-checkbox-details > .position-relative > .form-control')
      .type(newBranchName);*/
    cy.get('.repo-file-upload-outline')
      .attachFile('example.json', {
        subjectType: 'drag-n-drop',
        fileName: newFileName
      });

  });
  it('should reject pull requests', function () {

  });
  it('should delete branch', function () {

  });
})
