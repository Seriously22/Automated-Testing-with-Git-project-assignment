describe('Update Booking for API', () => {
    it('PUT for updating booking information', () => {
        cy.request('POST', 'https://restful-booker.herokuapp.com/booking/:id')
          '{            
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}'