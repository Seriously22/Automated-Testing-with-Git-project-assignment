describe('Update Booking for API', () => {
    it('should use PUT for updating booking information', () => {
      cy.request({
        method:'GET',
        url: 'https://restful-booker.herokuapp.com/auth',
        headers: {
          'Authentication': 'Bearer ${tokens}'
        }
      }).then((response) =>{
        cy.request('PUT','https://restful-booker.herokuapp.com/booking/550',
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
      });
