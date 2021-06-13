// 登录，通过左上方搜索框搜索一个仓库，
// 随后在搜索结果中进入某个仓库并进行fork，
// 检查fork后仓库的目录结构，
// 最后通过fork后仓库的settings删除该仓库

context('Fork Test', () => {
  it('test fork a project', () => {
    cy.login();

    // find a project to fork
    cy.get('.header-search-wrapper > .form-control')
    .type('FangnuoWu/tiger-compiler-lab')
    .type('{enter}');

    cy.get('.f4 > .v-align-middle')
    .click();

    // the fork number now should be 0
    cy.get(':nth-child(3) > .social-count')
    .should(($p) => {
      expect($p).to.contain(0);
    })

    cy.get('.float-left > .details-reset > .btn')
    .click()
    .get(':nth-child(1) > .btn-link > .d-flex')
    .click();
  })

  it('test the structure after fork', () => {
    cy.login();
    cy.visit('https://github.com/test-account-for-se123/tiger-compiler-lab');

    cy.get(':nth-child(3) > .social-count')
    .should(($p) => {
      expect($p).to.contain(1);
    })

    cy.get('.flex-auto > .text-small > a')
    .should(($p) => {
      expect($p).to.contain('FangnuoWu/tiger-compiler-lab');
    })

    cy.get('.d-sm-inline > strong')
    .should(($p) => {
      expect($p).to.contain(2);
    })
  })

  it('test the delete of fork', () => {
    cy.login();
    cy.visit('https://github.com/test-account-for-se123/tiger-compiler-lab');
    cy.get(':nth-child(8) > .UnderlineNav-item').click()

    cy.get(':nth-child(4) > .details-reset > .boxed-action')
    .click()

    cy.get('.Box-body > form > p > .form-control')
    .type('test-account-for-se123/tiger-compiler-lab')

    cy.get('.Box-body > form > .btn')
    .click();

    cy.get('.flash > .container-lg')
    .should(($p) => {
      expect($p).to.contain('Your repository "test-account-for-se123/tiger-compiler-lab" was successfully deleted.');
    })

    cy.get('.container-lg > .flash-close > .octicon')
    .click();
  })
})

