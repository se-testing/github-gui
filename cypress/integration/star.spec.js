describe("Test star", () => {
    before(() => {
        cy.login()
    })
    it("test star", () => {
        cy.get("[data-unscoped-placeholder|=Search]").type("awesome-se")
        cy.get("#jump-to-suggestion-repository-37530945").click()
        let star = cy.get("[title=Star SJTU-SE/awesome-se]")
        star.click()
        star.children("span").contains("Unstar")
        star.parent().children("a").click()
        cy.get("[data-hovercard-type=user]").contains("test-account-for-se123")
    })
})
