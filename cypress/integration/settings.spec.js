describe("Test settings", () => {
    before("visit settings page", () => {
        cy.login()
        cy.visit("https://github.com/se-testing/repo-for-testing/settings")
    })
    it("test checkbox", () => {
        cy.get("#issue-feature").click()
        cy.wait(3000)
        cy.get("[data-tab-item=i1issues-tab]").should("not.exist")
        cy.get("#issue-feature").click()
        cy.wait(3000)
        cy.get("[data-tab-item=i1issues-tab]").should("exist")
    })
})
