const request = require('request');
request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


//Making HTTP requests in Node using libraries like request is even easier than managing and using TCP connections! Here we practiced with a GET request to fetch some information, but other types of requests (such as POST are also possible).