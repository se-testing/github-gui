context('Create a repository', () => {
  it('create a repository', () => {
    cy.login()

    cy.get('.d-none:not(.mr-0) > details').click()
    cy.contains('New repository').click()
    cy.url().should('include', '/new')

    cy.get('button')
      .contains('Create repository')
      .should('be.disabled')

    let random_repo_name = "test_" + randomString(6)
    cy.get('#repository_name')
      .type(random_repo_name)
      .should('have.value', random_repo_name)
    cy.get('#repository_description')
      .type('repository description')
      .should('have.value', 'repository description')
    cy.get('#repository_visibility_private')
      .click()
      .should('be.checked')

    cy.get('#repository_gitignore_template_toggle')
      .click()
      .should('be.checked')

    cy.contains('Node')
      .should('be.hidden')
    cy.get('.select-menu > .select-menu-button > i')
      .click()

    cy.contains('Actionscript')
      .should('be.visible')
    cy.contains('stella')
      .should('be.hidden')
    cy.get('.select-menu-filters ~ .select-menu-list')
      .scrollTo('bottom')
    cy.contains('Actionscript')
      .should('be.hidden')
    cy.contains('stella')
      .should('be.visible')

    cy.contains('Node').click()
    cy.get('.select-menu > .select-menu-button > span')
      .should('contain', 'Node')

    cy.get('button')
      .contains('Create repository')
      .should('be.enabled')
      .click()

    cy.screenshot({
      capture: 'viewport'
    })
  })
})

function randomString(e) {
  e = e || 32;
  let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}