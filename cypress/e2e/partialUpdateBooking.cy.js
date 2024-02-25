describe('Partially update Booking information for API', () => {
    it('PATCH for updating booking information', () => {
     cy.request('PATCH', 'https://restful-booker.herokuapp.com/booking/1', //change id 1 person to...
      {
        "firstname" : "James",
        "lastname" : "Brown"
        }) .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.booking).to.not.be.empty; //error: Status 403 Forbidden
    });
});
})