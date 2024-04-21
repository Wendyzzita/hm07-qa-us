// eslint-disable-next-line no-undef
const config = require('../config');

// TESTS FOR DELETE REQUEST

// Check the response status code

test('Should return status 200', async () => {
let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
actualStatusCode = response.status;

	} catch (error) {
		console.error(error);
	}
expect(actualStatusCode).toBe(200);
});


// Check that the response body contains the expected data


test('Should updated to true in the body response', async () => {
let actualResponseBody;
    try {
		const Response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

expect(actualResponseBody)==(true);
}); 

