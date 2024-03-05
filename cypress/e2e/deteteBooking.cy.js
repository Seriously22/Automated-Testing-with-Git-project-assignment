describe('Delete Booking for API', () => {
    it('DELETE for deleting booking information', () => {
        cy.request('DELETE', 'https://restful-booker.herokuapp.com/booking/1')
          .should((response) => {
  
    expect(response.status).to.eq(200);

    expect(response.body).to.have.length.greaterThan(0);

  });
});
})                       //PASSED  PASSED PASSED