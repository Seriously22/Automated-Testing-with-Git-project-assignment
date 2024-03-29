describe('Performing a healthcheck on the API', () => {

    it('should confirm the API is up and running', () => {
  
      cy.request('GET','https://restful-booker.herokuapp.com/booking')
        .should((response)=>{
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length.greaterThan(0);     
      })
   })
})
