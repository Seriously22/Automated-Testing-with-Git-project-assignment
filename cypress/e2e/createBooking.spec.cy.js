describe('Create Booking for API', () => {
      it('POST booking information', () => {
      cy.request({
        method:'GET',
        url: 'https://restful-booker.herokuapp.com/auth',
        headers: {
          'Authentication': 'Bearer' + tokens,
        }
        }).then((response) =>{
                
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body:{
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
      }).should((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body.booking).to.not.be.empty;
  
        });
          });
           });
          });//error tokens is not defined
             //then created token variable, and tokens = response.body.tokens
             //and addded: cy.log('Bearer Token:' , tokens);
             //then error Status 404: Not found, Body: not found, failOnStatusCode
             //then removed token variable & other code
             //back to old errors