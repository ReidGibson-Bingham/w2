
const fs = require('fs');
const request = require('request');
let URL = process.argv[2];
let path = process.argv[3];

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(`Downloaded and saved ${body.length} bytes to ${path}`);

  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      //return
    }

  });

}); 






// 
/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


let URL = '';

readline.question(`Enter a URL Address`, URL => {
  console.log(`${URL}`);
    readline.question(`Enter a Local file Path`, filePath => {
      console.log(`${filePath}`);
      
      readline.close();
  })
}) */



