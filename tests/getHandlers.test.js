// eslint-disable-next-line no-undef
const config = require('../config');
// TESTS FOR GET REQUESTS

// Check the response status code

test('Should return status code 200', async () => {
let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
expect(actualStatusCode).toBe(200);
});

// Check that the response body contains the expected data

test('Should contain the warehouse Everything You Need in the body', async () => {
let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
expect(actualResponseBody[0].name).toBe("Everything You Need");
});