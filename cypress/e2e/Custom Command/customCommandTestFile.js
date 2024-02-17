describe('Website login, navigation, and check out cart' , ()=> {
})
    it('should navigate to website, log in, search for products, go to checkout cart' , () => {
        })
    Cypress.Commands.add(login , (username, password) => {

})

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
}
cy.get('#about_sidebar_link').click(); {
}





    
