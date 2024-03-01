describe('Update Booking for API', () => {
   let tokens = null;
   it('PUT for updating booking information', () => {
   cy.request({
         method: 'PUT',
         url: 'https://restful-booker.herokuapp.com/booking/550',
         body: {
                "firstname" : "James",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                   "checkin" : "2018-01-01",
                   "checkout" : "2019-01-01"
               },   
                "additionalneeds" : "Breakfast"
               }
                                                        //headers: { ' Authorization ' : ' Token ' + token }  -OR-
                                                        //headers: Authorization: 'Bearer' + tokens,
        })
     }).then ((response) => {
        tokens=response.body.token;
        cy.log('Bearer Token:' , tokens);
     }) .should((response) => {
         expect(response.status).to.eq(200);
         expect(response.body).to.have.length.greaterThan(0);    
     })
     })
      // error 404 not found, failOnStatusCode
