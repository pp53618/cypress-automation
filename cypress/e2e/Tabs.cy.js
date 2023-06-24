/// <reference types="Cypress" />

describe('Handle tabs', ()=> {
    it.skip('Appraoch1', ()=> {
        cy.visit('https://the-internet.herokuapp.com/windows');     //parent tab(window)
        cy.get('.example >a').invoke('removeAttr', 'target').click();      //click on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000)

        //operations
        cy.go('back');  //back to parent tab
    })

    it('Appraoch2', ()=> {
        cy.visit('https://the-internet.herokuapp.com/windows');     //parent tab(window)
        cy.get('.example >a').then((e)=> {
            let url=e.prop('href');
            cy.visit(url);
        })  
        
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000)

        //operations
        cy.go('back');  //back to parent tab

    })
})