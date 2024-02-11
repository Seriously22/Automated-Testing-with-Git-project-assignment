/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>  //ERROR MSG STATING "CANNOT FINE THE MEANING..."
import 'cypress-iframe'

const url = 'https://demoqa.com/frames';



describe('Handling Frames in Cypress', function () {

    it('single frame', function () {   // test case
        cy.visit(url);
        cy.frameLoaded('#frame1');  // main webpage
        cy.iframe().find('#sampleHeading').then(function(txt){  // gets hold of embedded webpage
            const txtframe = txt.text();  
            expect(txtframe).to.contains('');  // assertion to verify text
            cy.log(txtframe);
        })
    })        
        
    it('nested frame', function () {   // test case
        cy.visit(url);
        cy.get('#alertButton').click();
        cy.on('window:alert', (alertText) => {   // trigger alert message
        expect(alertText).to.contains('You clicked a button');  // assertion
        })
    })
})
