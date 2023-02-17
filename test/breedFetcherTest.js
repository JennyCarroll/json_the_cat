// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      console.log("desc:", desc);
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("where an invalid/non-existent breed is passed in returns", (done) => {
    // we expect the first argument for our callback (err) to be set, and desc to be null.
    fetchBreedDescription("sfdsf", (err, desc) => {
      console.log("desc:----------------------", desc);
      assert.equal(desc, null);

      const expectedError = `Sorry, sfdsf breed not found`;

      // compare returned description
      assert.equal(expectedError, err);

      done();
    });
  });
});
