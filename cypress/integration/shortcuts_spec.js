context('Keyboard Shortcut', () => {
  it('keyboard shortcut', () => {
    cy.login()

    cy.get('body').type('s')
    cy.get('input.header-search-input').should('be.focused')

    cy.get('.d-none.mr-0 > details').click()
    cy.contains('Your organizations').click()
    cy.url().should('include', '/settings/organizations')

    cy.contains('se-testing').click()
    cy.url().should('include', '/se-testing')

    cy.contains('repo-for-testing').click()
    cy.url().should('include', '/se-testing/repo-for-testing')

    cy.get('body').type('gi').wait(3000)
    cy.get('a.UnderlineNav-item.selected > span:first')
      .should('contain', 'Issues')
    cy.get('body').type('gp').wait(3000)
    cy.get('a.UnderlineNav-item.selected > span:first')
      .should('contain', 'Pull requests')
    cy.get('body').type('ga').wait(3000)
    cy.get('a.UnderlineNav-item.selected > span:first')
      .should('contain', 'Actions')
    cy.get('body').type('gb').wait(3000)
    cy.get('a.UnderlineNav-item.selected > span:first')
      .should('contain', 'Projects')
    cy.get('body').type('gs').wait(3000)
    cy.get('a.UnderlineNav-item.selected > span:first')
      .should('contain', 'Security')
    cy.get('body').type('gc').wait(3000)
    cy.get('a.UnderlineNav-item.selected > span:first')
      .should('contain', 'Code')

    cy.get('body').type('t').wait(3000)
    cy.get('#tree-finder-field').type('.gitignore{enter}')
    cy.url().should('include', '/.gitignore')

    cy.get('body').type('l')
    cy.get('input.linejump-input').type('2{enter}')
    cy.get('td#LC2').should('have.class', 'highlighted')
    cy.get('td#LC1').should('not.have.class', 'highlighted')
  })
})