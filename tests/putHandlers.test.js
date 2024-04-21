// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
"productsList": [
    {
      "id": 7,
      "quantity": 2
    }
  ]}

// TESTS FOR PUT REQUESTS

// Check the response status code

test('Should return status 200', async () => {
let actualStatusCode;
try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
expect(actualStatusCode).toBe(200);
});


// Check that the response body contains the expected data

test('Should update to True in the body response', async () => {
let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

expect(actualResponseBody.ok).toBe(true);
});


