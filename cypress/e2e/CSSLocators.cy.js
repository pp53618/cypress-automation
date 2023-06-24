describe('CSSLocators', () => {

    it("csslocators", () => {
        cy.visit('http://automationpractice.pl/index.php');

        cy.get("input#search_query_top").type("T-Shirts")

        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("T-Shirts")
    })
})

