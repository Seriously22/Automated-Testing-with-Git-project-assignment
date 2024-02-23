describe('Create Booking for API', () => {
    it('POST booking information', () => {
      cy.request('POST', "https://restful-booker.herokuapp.com/booking",
        {
        "firstname" : "Jim",
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
           })
