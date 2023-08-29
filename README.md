# ApiTest
# POST Request Example using Fetch API

This is a simple example demonstrating how to make a POST request to a server using the Fetch API in JavaScript,and also getting Data from the Api using get.

## Prerequisites

- You should have a server running that can handle POST requests at `http://localhost:3030/SaveUser`using command Line Interface (node index.js).
- The server should expect JSON data in the request body and save it.

## Instructions

1. Open the HTML file (`index.html`) in a web browser.
2. Click the "Submit User" button to send a POST request to the server.

## Code Explanation

- The HTML file contains a button with the id `postButton`.
- When the button is clicked, an event listener is triggered.
- Inside the event listener, an object `user` with a `name` property is created.
- The Fetch API is used to send a POST request to the server at `http://localhost:3030/SaveUser`.
- The request headers specify that the content type is JSON.
- The `user` object is converted to a JSON string using `JSON.stringify` and sent in the request body.
- The response from the server is checked. If the response status is OK (200), a success message is logged. Otherwise, an error message is logged.

## Note

- Replace the URL (`http://localhost:3030/SaveUser`) with the actual URL of your server.
- Modify the `user` object to include the actual data you want to send in the request.

## Running the Example

1. Set up your server to handle POST requests as specified.
2. Open the HTML file in a web browser.
3. Click the "Submit User" button to observe the POST request in action.

Feel free to customize and integrate this example into your projects as needed.

For more information about the Fetch API, visit: [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
