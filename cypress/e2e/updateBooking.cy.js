it('PUT update contact', () => {
  // Username and password for Basic Auth (COOKIE TOKEN)
  const username = 'admin';
  const password = 'password123';

  // Base64 encode the username and password. $ means query
  const base64Credentials = btoa(`${username}:${password}`);

  cy.request({
    method: 'PUT',
    // Ensure bookingId is dynamically set
    //url: `https://restful-booker.herokuapp.com/booking/${bookingId}/`,

    url: 'https://restful-booker.herokuapp.com/booking/550',
    headers: {
      // Basic Auth using encoded credentials
      Authorization: `Basic ${base64Credentials}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
   },
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
 }).then((response) => {
   cy.log('API Response:', response);
    expect (response.status).to.eq(200);
    expect(response.body.booking).to.not.be.empty;
 });
});/*ERRORS: PUT 405 https://...
     cy.request()... 405 Method Not Allowed
     failOnStatusCode
     Body:Method Not Allowed*/
