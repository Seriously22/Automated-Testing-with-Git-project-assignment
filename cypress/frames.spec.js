/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

const url = 'https://demoqa.com/frames';

describe('Handling Frames in Cypress', function () {

    it('single frame', function () {   // test case
        cy.visit(url);
        cy.frameLoaded('#sampleHeading');  // main webpage
        cy.iframe().find('#sampleHeading').then(function(txt){  // get embedded frame
            const txtValue = txt.text();    //get text within it //return value of stored text
            expect(txtValue).to.contains('This is a sample page');  // assertion to verify text
            cy.log(txtValue);
        })
    })        
        
    it('nested frame', function () {
        cy.visit(url);
        //no locators provided
        cy.frameLoaded('this site can't be reached');
        cy.iframe().find('this site can't be reached').then(function(txt){  // gets hold of embedded webpage
            const txtframe = txt.text();  
            expect(txtframe).to.contains('');  // assertion to verify text
            cy.log(txtframe);
        })
    })
})
