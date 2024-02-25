describe('Partially update Booking information for API', () => {
    it('PATCH for updating booking information', () => {
     cy.request('PATCH', 'https://restful-booker.herokuapp.com/booking/1', //change id 1 person to...
      {
        "firstname" : "James",
        "lastname" : "Brown"
        }) .should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.firstname).to.eq("James");
    expect(response.body.lastname).to.eq("Brown");
    // error in Cypress: 403 Forbidden. Advised to use: failOnStatusCode: false
  });
});
})