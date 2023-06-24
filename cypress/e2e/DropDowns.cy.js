/// <reference types="Cypress" />

describe('handle dropdowns', ()=>{

    it.skip('Dropdown whit select', ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html");

        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value','Italy');
    })

    it.skip('Dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Italy').type('{enter}');
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Italy')
    })

    it.skip('Auto suggest dropdown', ()=>{
        cy.visit("https://www.wikipedia.org/");

        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Heights').click();
        cy.get('#firstHeading')
        .should('have.text', 'Delhi Heights')
    })

    it('Dynamic dropdown', ()=>{
        cy.visit("https://www.google.pl/");

        cy.get('.QS5gu').contains('Zaakceptuj wszystko').click();
        cy.get('#APjFqb').type('cypress automation');
        cy.wait(3000);
        cy.get('div.wM6W7d>span').should('have.length',12);
        cy.get('div.wM6W7d>span').each( ($el, index, $list) => {
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('#APjFqb').should('have.value', 'cypress automation tool');
    })   
})