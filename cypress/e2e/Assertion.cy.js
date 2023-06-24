describe("Assertion demo", () => {

    it("Implicit assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //Implicit assertion is support two keywords: should, and(is use in multiple aserrtions) 

        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //cy.url().should('contain', 'orangehr');

        /*cy.url().should('include', 'orangehrmlive.com');
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        .should('contain', 'orangehr');*/
        
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehr')
        .and('not.contain', 'greenhrm');

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM');

        cy.get('.orangehrm-login-branding > img').should('be.visible')   // logo visible
        .and('exist');   // Logo exist

        cy.xpath("//a").should('have.length', '5');   // No of links

        cy.get("input[name='username']").type('Admin');  // provide a value into inputbox

        cy.get("input[name='username']").should('have.value', 'Admin');  // value checked
    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();

        let expName="Magdalena Lozowska-Pereira Collings";

        cy.get(".oxd-userdropdown-name").then( (x) =>{
            let actName=x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        });
    })
})