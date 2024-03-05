describe('Update Booking for Restful Booker', () => {
  it('should update a specific booking', () => {
    cy.request({
      method: 'PUT',
      url: 'https://restful-booker.herokuapp.com/booking/550',
      body: {
     "firstname": "James",
   "lastname": "Brown",
   "totalprice": 111,
   "depositpaid": true,
   "bookingdates": {
     "checkin": "2018-01-01",
     "checkout": "2019-01-01"
   },
   "additionalneeds": "Breakfast"
 },
      headers: {
        Cookie: "token=57316bbb1ce68c9"
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain.property("firstname", "James");
    })
  });
});                              //ADVISED TO MOVE FORWARD, AS THIS API WEBSITE HAS ISSUES