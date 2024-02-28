describe('Partially update Booking information for API', () => {
    it('PATCH for updating booking information', () => {
     cy.request('PATCH', 'https://restful-booker.herokuapp.com/booking/550', //change id of John Smith to...
      {
        "firstname" : "James",
        "lastname" : "Brown"
        }) .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length.greaterThan(0);
        //created token in Postman
        //error: Status 403 Forbidden in Cypress
        //Forbiden in Postman
    }); //Failure on status code (200); per instructor, status code for PATCH is not '200', 
        //but Cypress states failure due to status code not being 2xx or 3xx.
        });
})