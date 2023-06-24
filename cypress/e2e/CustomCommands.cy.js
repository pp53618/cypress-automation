/// <reference types="Cypress" />
//click on link ising label
//over writing existing contains() commands
//re-usuable custom command

describe('Custom Commands', ()=> {

    it("handling links", ()=> {

        cy.visit("https://demo.nopcommerce.com/");

        //direct - without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

    })

    it("overwriting existing command", ()=> {

        cy.visit("https://demo.nopcommerce.com/");

        //using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

    })

    it.only("Login command", ()=> {
        cy.visit("https://demo.nopcommerce.com/");
        //Login
        cy.clickLink("Log in")  //custom command
        cy.loginapp("testing@gmail.com","test123"); //custom command

        cy.get('.ico-account').should('have.text', 'My account');

    })
})