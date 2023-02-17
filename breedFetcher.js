const { builtinModules } = require("module");
const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(URL, (error, response, body) => {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // I see what is returned from the body when there is sdf supplied as the breed.
    // console.log("type of body:", typeof body);
    let errorMsg = null;
    let obj = JSON.parse(body);
    //I check to see if the object is an array (which it will be, so sort of unneccesary) and then check to see if it is empty.
    if (Array.isArray(obj) && obj.length === 0) {
      obj = null;
      errorMsg = `Sorry, ${breed} breed not found`;
      // console.log(`Sorry, ${breed} breed not found`); /*the user (index.js) will not see this because it is in microsofts server*/
    } else {
      obj = obj[0]["description"];
    }
    // console.log("type of body:", typeof obj);
    callback(errorMsg, obj); //this is what the user gets back
  });
};
// In order to scan this data like a JavaScript object,
// we need to convert the string version of it into an object first.

// Write the logic in breedFetcher.js to fetch the Siberian data
// from the API endpoint using request
// Take a moment to also check what the type of the body is:

// node breedFetcher.js Chartreux

module.exports = { fetchBreedDescription };
