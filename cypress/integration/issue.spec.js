function randomString(len) {
    let text = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

describe("Test issue", () => {
    before("login", () => {
        cy.login()
        cy.visit("https://github.com/se-testing/repo-for-testing/issues")
    })
    it("test create issue", () => {
        cy.get(".btn-primary").click()
        cy.get("#issue_title").type(randomString(10))
        cy.get("#issue_body").type(randomString(100))
        cy.get("#labels-select-menu").click()
        cy.get("label-filter-field").type("question")
        cy.get("#js-repo-pjax-container").type("{enter}")
        cy.get("[data-hotkey=c]").click()
    })
})
