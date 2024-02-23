describe('Partially update Booking information for API', () => {
    it('PATCH for updating booking information', () => {
        cy.request('PATCH', 'https://restful-booker.herokuapp.com/booking/:id'),
          {            
        "firstname" : "James",
        "lastname" : "Brown"
    }
    .should((response) => {
  
    expect(response.status).to.eq(200);

    expect(response.body).to.have.length.greaterThan(0);

  });
});
})