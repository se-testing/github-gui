context('Cookie', () => {
  it('cookie', () => {
    cy.login()

    let username = 'test-account-for-se123'
    let session_cookie;
    cy.getCookie('user_session')
      .should('exist')
      .then((c) => {
				session_cookie = c.value
		})
    cy.getCookie('logged_in')
      .should('have.property', 'value', 'yes')
    cy.getCookie('dotcom_user')
      .should('have.property', 'value', username)

    cy.clearCookie('user_session')
    cy.get('.d-none.mr-0 > details').click()
    cy.contains('Your organizations').should('not.exist')
    cy.reload()
    cy.contains('Sign up').should('exist')

    cy.get('body')
			.then(() => {
				cy.setCookie('user_session', String(session_cookie))
		})
    cy.reload()

    cy.get('.d-none.mr-0 > details').click()
    cy.contains(username).should('exist')
  })
})
