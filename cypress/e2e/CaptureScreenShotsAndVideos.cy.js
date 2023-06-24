/// <reference types="Cypress" />

describe('mysiute', ()=> {

    it('Capture screenshots & Video', ()=> {

        cy.visit("https://demo.opencart.com/");
        //cy.screenshot("homepage");
        //cy.wait(5000);
        //cy.get("img[title='Your Store']").screenshot("logo");

        //Automatically capture screenshot & video on failure - only when execute througt CLI
        cy.get("li:nth-child(7) a:nth-child(1)").click();   //cameras page
        cy.get("div[id='content'] h2").should('have.text', "Tablets");
    })
})