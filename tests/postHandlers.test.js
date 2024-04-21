// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "Sprint7project"
}

// TEST FOR POST REQUEST

// Check the response status code

test('Should return status 201', async () => {
let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

expect(actualStatusCode).toBe(201);
});

// Check that the response body contains the expected data

test('Should contain the string name added Sprint7project in the body', async () => {
let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

expect(actualResponseBody.name).toBe("Sprint7project");
});
