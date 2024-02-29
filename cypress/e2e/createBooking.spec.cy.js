describe('Create Booking for API', () => {
  let tokens = null;
  it('POST booking information', () => {       
  cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: {
               "firstname" : "Jim",
               "lastname" : "Brown",
               "totalprice" : 111,
               "depositpaid" : true,
               "bookingdates" : {
                   "checkin" : "2018-01-01",
                   "checkout" : "2019-01-01"
              },
               "additionalneeds" : "Breakfast"
              }
      })
      }).then((response) =>{
        tokens=response.body.tokens
        cy.log('Bearer Token:' , tokens);

      }).should((response) => {
         expect(response.status).to.eq(200);
         expect(response.body.booking).to.not.be.empty;
      });
      });             