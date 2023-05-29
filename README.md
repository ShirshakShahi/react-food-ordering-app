### So, if we do, response.json() when GET it returns the json value into object? and when we do body:JSON.stringify(obj) , it sets object into json file? is it true?

Yes, that's correct!

When you make a GET request and use response.json(), it parses the response body assuming it is in JSON format and returns the corresponding JavaScript object. This allows you to easily access and work with the data retrieved from the server.

On the other hand, when you want to send data to the server, such as in a POST or PUT request, you often need to convert the JavaScript object into a JSON string. You can use JSON.stringify(obj) to achieve this. It takes an object as input and returns a JSON string representation of that object. This JSON string can then be included in the request body, typically as part of the body property when using the Fetch API or other similar methods.

`So, response.json() converts a JSON response into a JavaScript object, and JSON.stringify(obj) converts a JavaScript object into a JSON string.`