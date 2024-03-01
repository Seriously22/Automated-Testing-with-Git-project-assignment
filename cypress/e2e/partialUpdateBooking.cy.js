describe('Partially update Booking information for API', () => {
    let tokens = null;
    it('PATCH for updating booking information', () => {
    cy.request({
        method: 'PATCH',
        url: 'https://restful-booker.herokuapp.com/booking/550', //change John Smith to...
        body: {
               "firstname" : "James",
               "lastname" : "Brown"
              }
                                                  /*headers: { ' Authorization ' : ' Token ' + token }
                                                    -OR-
                                                  headers: Authorization: 'Bearer' + tokens,     */  
       })
      }).then((response) => {
        tokens = response.body.tokens;
        cy.log('Bearer Token:', tokens);
        expect(response.status).to.eq(200);
        expect(response.body.booking).to.not.be.empty;
      });
    });
                                                //ERROR - it(...).then is not a function    