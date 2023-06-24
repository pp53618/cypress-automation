describe('XpathLocators', () => {
    it('find number of products', () => {
        cy.visit('http://automationpractice.pl/index.php');
        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',1)
    })

    it('chained xpath', () => {
        cy.visit('http://automationpractice.pl/index.php');
        cy.xpath("//ul[@id='homefeatured']").xpath("./li").should('have.length',1)
    })
    
})