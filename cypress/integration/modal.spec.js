// 登录，打开专用仓库，
// 通过此处齿轮按钮调整仓库详情设置并检查效果（模态框）

context('Modal Test', () => {
  it('test click the modal', () => {
    cy.login();
    cy.visit("https://github.com/se-testing/repo-for-testing");

    cy.get('summary.float-right > .Link--secondary > .octicon')
    .click();

    cy.get('.Box-header > .Box-title')
    .should(($p) => {
      expect($p).to.contain('Edit repository details');
    })

    cy.get('#repo_description')
    .type('{selectall}')
    .type('{del}');

    cy.get('#repo_description')
    .type('This is the description.')
    .get('.form-actions > .btn-primary')
    .click();

    cy.get('.BorderGrid-cell > .f4')
    .should(($p) => {
      expect($p).to.contain('This is the description.')
    })
  })
})