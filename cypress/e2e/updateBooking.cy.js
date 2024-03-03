it('PUT update contact', () => {
  // Username and password for Basic Auth (COOKIE TOKEN)
  const username = 'admin';
  const password = 'password123';

  // Base64 encode the username and password
  const base64Credentials = btoa(`${username}:${password}`);

  cy.request({
    method: 'PUT',
    url: `https://restful-booker.herokuapp.com/booking/${bookingId}550/`, // Ensure bookingId is dynamically set
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
 });
}); /*ERRORS: No commands were issued in this test
              BookingID is not defined*/