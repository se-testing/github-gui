describe("Test star", () => {
    before(() => {
        cy.login()
    })
    it("should test star", () => {
        cy.get("[name=q]").type("awesome-se")
        cy.get("#jump-to-suggestion-repository-37530945").click()
        let star = cy.get("body").contains("Star")
        star.click()
        assert(cy.get("body").contains("Unstar"))
        star.parent().children("a").click()
        assert(cy.get("[data-hovercard-type=user]").contains("test-account-for-se123"))
    })
    it('should test unstar', () => {
        cy.visit("https://github.com/SJTU-SE/awesome-se")
        let unstar = cy.get("body").contains("Unstar")
        unstar.click()
        assert(cy.get("body").contains("Star"))
        unstar.parent().children("a").click()
        assert(cy.get("[data-hovercard-type=user]").contains("test-account-for-se123").should("not.exist"))
    });
})
