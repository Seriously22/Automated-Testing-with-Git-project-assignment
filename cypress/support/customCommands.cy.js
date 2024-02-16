const url = 'https://www.saucedemo.com/';
const validUsername = 'standard_user';
const validPassword = 'secret_sauce';

Cypress.Commands.add('login' , (username, password) => {
    cy.visit(url);
        
    cy.get('#user-name').type(validUsername);

         
    cy.get('#password').type(validPassword);

            
    cy.get('#login-button').click();
})
