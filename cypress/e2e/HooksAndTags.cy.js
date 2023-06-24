/// <reference types="Cypress" /> 
    // Hooks 
    

    // befor
    // after
    // beforEach
    // afterEach

describe('MyTestSuite', ()=> {
    before(()=> {
        cy.log("***** Launch App *****")
    })

    after(()=> {
        cy.log("***** Close App ****")
    })

    beforeEach(()=> {
        cy.log("***** Login ****")
    })

    afterEach(()=> {
        cy.log("***** Logout ****")
    })

    it('search', ()=> {
        cy.log("***** searching ****")
    })

    it('advanced search', ()=> {
        cy.log("***** advanced searching ****")
    })

    it('Listing Products', ()=> {
        cy.log("***** Listing products ****")
    })
})