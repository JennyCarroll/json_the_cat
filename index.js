const breedFetcher = require("./breedFetcher");

// index.js
const { fetchBreedDescription } = require("./breedFetcher");

let breed = process.argv.slice(2);

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
//the error and description is passed in from microsoft(the breedFetcher)
