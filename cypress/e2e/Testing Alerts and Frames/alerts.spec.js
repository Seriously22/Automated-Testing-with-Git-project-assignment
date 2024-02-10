const url = 'https://demoqa.com/alerts';


describe('Handling Alerts in Cypress' , function () {
    
    it('basic alert' , function () {   // test case
        cy.visit(url);           
        cy.get('#alertButton').click();
        cy.on('window:alert' , (alertText) => {   // trigger alert message
        expect(alertText).to.contains('You clicked a button');  // assertion
        //ERROR HANDLING   
        //cy.on('uncaught:exception' , (err, runnable) => {
        //    return false
        //cy.visit(url);
        //cy.get('#alertButton').click();
        })
    })
    it('timer alert' , function () {
        cy.get('#timerAlertButton').click();
        cy.on('window:timer' , (timerText) => {
        expect(timerText).to.contains('This alert appeared after 5 seconds');
        //ERROR HANDLING
        //cy.on('uncaught:exception' , (err, runnable) => {
        //if(err.message.includes('This alert appeared after 5 seconds')){
        //console.log('Timer Alert')    
        //   return false;
        //cy.visit(url);
        //cy.get('#timerAlertButton').click();
        })
    })
    it('confirm alert OKAY' , function () {
        cy.get('#confirmButton').click();
        cy.on('window:confirm' , (acceptConfirm) => {
        expect(acceptConfirm).to.contains('Do you confirm action?');
        })
    })
    it('confirm alert Cancel' , function () {
        cy.on('window:confirm' , (cancelConfirm) => {
        return false;
        cy.get('#confirmButton').click();
        cy.get('#confirmResult').should('contain.text' , 'You selected Cancel');
        }) 
 })
})

