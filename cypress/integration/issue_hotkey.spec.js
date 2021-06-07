describe("Test keyboard shortcut of issue", () => {
    before("login", () => {
        cy.login()
    })
    beforeEach("visit repository", () => {
        cy.visit("https://github.com/se-testing/repo-for-testing/issues")
    })
    it("test create", () => {
        cy.get("body").type('c')
        cy.get("#issue_title").should("exist")
    })
    it("test focus searchbar", () => {
        cy.get("body").type("{ctrl+/}")
        cy.get("#js-issues-search").should("be.focused")
    })
    it("test author filter", () => {
        cy.get("body").type("u")
        cy.get("#author-filter-field").should("be.focused")
    })
    it("test label filter", () => {
        cy.get("body").type("l")
        cy.get("#label-filter-field").should("be.focused")
        cy.type("{alt+enter}")
    })
    it("test milestones filter", () => {
        cy.get("body").type("m")
        cy.get("#milestones-filter-field").should("be.focused")
    })
    it("test assigns filter", () => {
        cy.get("body").type("a")
        cy.get("#assigns-filter-field").should("be.focused")
    })
})
