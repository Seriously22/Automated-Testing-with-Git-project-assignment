describe('Update Booking for API', () => {
    it('should use PUT for updating booking information', () => {
        cy.request('PUT','https://restful-booker.herokuapp.com/booking/:id)',
        {            
           "firstname" : "James",
           "lastname" : "Brown",
           "totalprice" : 111,
           "depositpaid" : true,
           "bookingdates" : {
           "checkin" : "2018-01-01",
           "checkout" : "2019-01-01"
          },
           "additionalneeds" : "Breakfast"
          })
    .should((response) => {
  
       expect(response.status).to.eq(200);

       expect(response.body).to.have.length.greaterThan(0);

       });
     });
    });
