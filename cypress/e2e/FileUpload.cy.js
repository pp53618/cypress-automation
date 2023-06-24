/// <reference types="Cypress" />
import 'cypress-file-upload';

describe('File Upload', ()=> {
    it('Single File Upload', ()=> {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('IP_ho_12.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it('File Upload - Rename', ()=> {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'IP_ho_12.pdf', fileName:'myfile.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
        cy.get('#uploaded-files').should('be.visible');
    })

    it('File Upload - Drag and drop', ()=> {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("IP_ho_12.pdf", {subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains("IP_ho_12.pdf");
    })

    it('Multiple files Upload', ()=> {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(['IP_ho_12.pdf', 'testowanie-oprogramowania-podrecznik-dla-poczatkujacych-rafal-pawlak.pdf']);
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected');
    })

    it.only('File upload - Shadow Dom', ()=> {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("IP_ho_12.pdf");
        cy.wait(5000);
        cy.get('.smart-item-name', {includeShadowDom:true}).contains("IP_ho_12.pdf");
    })
})