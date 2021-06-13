/// <reference types="cypress" />

import {getRandString} from "../support/tools";

context('Add Files As PR', () => {
  before(() => {
    cy.login();
  });
  beforeEach(function () {
    cy.preserveAllCookiesOnce()
  });
  let newBranchName = getRandString(10);
  let newFileName = getRandString(16);
  let newFileContent = getRandString(128);
  it('should upload new file', function () {
    cy.visit("https://github.com/se-testing/repo-for-testing");
    cy.get('.btn > .d-none').click();
    cy.get('div > .dropdown-menu > :nth-child(3) > .dropdown-item').click();
    cy.get('.form-checkbox-details-trigger').click();
    cy.get('.form-checkbox-details > .position-relative > .form-control')
      .type(newBranchName);
    cy.get('#commit-summary-input').type(getRandString(10));
    cy.writeFile(`cypress/temporary/${newFileName}`, newFileContent);
    cy.pause();
    cy.contains(newFileName).should('be.visible');
    cy.get('.file-commit-form > .btn-primary').click();
  });
  it('should merge pull requests', function () {
    cy.get('#pull_request_body').type("Test pull request");
    cy.get('#new_pull_request > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > div.border-0.border-md.timeline-comment.timeline-comment--caret.hx_comment-box--tip.mb-3 > div > div.d-flex.my-2.mx-md-2.flex-md-justify-end > button').click();
    cy.get('#new_comment_field').type("make sense");
    cy.get('.ml-1 > .btn').click();
    cy.contains("make sense").should('be.visible');
    cy.get('.BtnGroup > .btn-group-merge').click();
    cy.get('.btn-group-merge > .btn').click();
    cy.wait(500);
    cy.contains('Pull request successfully merged and closed').should('be.visible');
  });
  it('should delete branch', function () {
    cy.get('.UnderlineNav-body > :nth-child(1) > .UnderlineNav-item').click();
    cy.wait(500);
    cy.get('#branch-select-menu > .btn').click();
    cy.contains(newBranchName).should('be.visible');
    cy.get('#ref-list-branches > ref-selector > .SelectMenu-footer > a').click();
    cy.get(`branch-filter-item[branch=${newBranchName}]`).within(() => {
      cy.get('button[title="Delete this branch"]').first().click();
      cy.contains('Deleted just now by test-account-for-se123').should('be.visible');
    })
  });
})
