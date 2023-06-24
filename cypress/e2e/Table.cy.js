/// <reference types="Cypress" />


describe('Handle Tables', (()=>{
    beforeEach('Login', ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login");
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();

        cy.get('.btn-close').click();
        //Customers--> Customers
        cy.get('#menu-customer').click();   //customer main menu
        cy.get('#menu-customer >ul>li:first-child').click();    //customer sub/child item
    })

    it.skip('Check Number Rows & Columns', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10);
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7);
    })

    it.skip('Check cell data from specific row & Column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)").contains("gorankrezic90@gmail.com");
        
    })

    it.skip('Read all the rows & Columns data in the first page', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(  ($row, index, $rows) =>{
            cy.wrap($row).within( ()=> {
                cy.get("td").each(  ($col, index, $cols) => {
                    cy.log($col.text());
                })
            })
        })
    })

    it('Pagination', ()=>{

        //find total number of pages
        /*let totalPages;
        cy.get(".col-sm-6.text-end").then( (edata) =>{
            let mytext=edata.text() //Showing 1 to 10 of 13403 (1341 Pages)
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
            cy.log("Total number of pages in a table========>"+totalPages);
        })*/

        let totalPages=5;

        for(let p=1;p<=totalPages;p++)
        {
                if(totalPages>1)
                {
                    cy.log("Active page is===="+p)

                    cy.get("ul[class='pagination'] >li:nth-child("+p+")").click();
                    cy.wait(3000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each( ($row, index, $rows)=> {
                        cy.wrap($row).within( ()=> {
                            cy.get('td:nth-child(3)').then( (e)=> {
                                cy.log(e.text());   //Email
                            })
                        })
                    })
                }
        }

    })

}))