describe("Test keyboard shortcut of issue", () => {
    before("login", () => {
        cy.login()
    })
    beforeEach("visit repository", () => {
        cy.visit("https://github.com/se-testing/repo-for-testing/issues")
    })
    it("test create", () => {
        cy.get("#js-repo-pjax-container").type('c')
        cy.get("#issue_title").should("exist")
    })
    it("test focus searchbar", () => {
        cy.get("#js-repo-pjax-container").type("{ctrl+/}")
        cy.get("#js-issues-search").should("be.focused")
    })
    it("test author filter", () => {
        cy.get("#js-repo-pjax-container").type("u")
        cy.get("#author-filter-field").should("be.focused")
    })
    it("test label filter", () => {
        cy.get("#js-repo-pjax-container").type("l")
        cy.get("#label-filter-field").should("be.focused")
        cy.type("{alt+enter}")
    })
    it("test milestones filter", () => {
        cy.get("#js-repo-pjax-container").type("m")
        cy.get("#milestones-filter-field").should("be.focused")
    })
    it("test assigns filter", () => {
        cy.get("#js-repo-pjax-container").type("a")
        cy.get("#assigns-filter-field").should("be.focused")
    })
})
