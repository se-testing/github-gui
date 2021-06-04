context('Cookie', () => {
  it('cookie', () => {
    cy.login()

    let username = 'HR-SU'
    let session_cookie;
    cy.getCookie('user_session')
      .should('exist')
      .then((cookie) => {
        session_cookie = cookie.value
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

    cy.setCookie('user_session', session_cookie)
    cy.reload()

    cy.get('.d-none.mr-0 > details').click()
    cy.contains(username).should('exist')
  })
})