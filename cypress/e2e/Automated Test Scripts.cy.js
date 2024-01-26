const url = 'https://www.saucedemo.com/';  //need to call a function into a function??
const validUsername = 'standard_user';
const validPassword = 'secret_sauce';
const successfulLogin = "Welcome";


describe('Testing the website' , () => { // what about the ( on these 2 lines?
    it('should report all bugs' , () => {
   
cy.visit(url);
        
    cy.get('#user-name').type(validUsername);

         
    cy.get('#password').type(validPassword);

            
    cy.get('#login-button').click();

    //Validation of successful login        
    if (cy.url() === "https://www.saucedemo.com/inventory.html") {
        cy.type(successfulLogin);

    } else {
        console.log("Try Again");
    }
    //Quantity Selection Box in the Checkout Cart
    cy.get('.cart_quantity_label').click(); {

    }
    //Typo error on Products page
    cy.get('inventory_item_desc'); {

    }   
    //Lack of Navigation Options on the About page
    //Select hamburger menu, click on About
    cy.get('#react_burger_menu_btn').click(); {
    cy.get('#about_sidebar_link').click();

    }

    //Videos Don't Have Fastforward/Rewind and Other Options
    cy.get('#react_burger_menu_btn').click(); {      //burger menu bar
    cy.get('#about_sidebar_link').click();           //About menu
    //hover over Resources text link                        
    //cy.trigger('.MuiTypography-root MuiTypography-buttonLabelNav css-1pj3is7');
    //hover over and click on Videos – Watch & Learn
    //cy.trigger('.MuiTypography-root MuiTypography-body3 css-zhy59s'.click();
    //click on Videos text link
    cy.get('.MuiTypography-root MuiTypography-label css-iffhsr').click();
    cy.get('#PlayArrowIcon').click();
    }
    }