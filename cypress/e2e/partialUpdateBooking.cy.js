describe('Partially update Booking information for API', () => {
    let tokens ; null;
    it('PATCH for updating booking information', () => {
    cy.request({
        method: 'PATCH',
        url: 'https://restful-booker.herokuapp.com/booking/550', //change John Smith to...
        body: {
               "firstname" : "James",
               "lastname" : "Brown"
              }
       })
       }).then((response) =>{
        tokens=response.body.tokens
        cy.log('Bearer Token:' , tokens);
       }) .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length.greaterThan(0);
        });
        });
        //error Status 404 not found, failedOnStatusCode