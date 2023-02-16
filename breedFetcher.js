const request = require("request");

// Write the logic in breedFetcher.js to fetch the Siberian data
// from the API endpoint using request
// Take a moment to also check what the type of the body is:
let breed = process.argv.slice(2);
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// let string = "";
request(URL, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // I see what is returned from the body when there is sdf supplied as the breed.
  // console.log("type of body:", typeof body);
  string = body;
  const obj = JSON.parse(string);
  //I check to see if the object is an array (which it will be, so sort of unneccesary) and then check to see if it is empty.
  if (Array.isArray(obj) && obj.length === 0) {
    console.log(`Sorry, ${breed} breed not found`);
    return;
  }
  // console.log("type of body:", typeof obj);
  console.log(obj[0]["description"]);
});
// In order to scan this data like a JavaScript object,
// we need to convert the string version of it into an object first.

// node breedFetcher.js Chartreux
