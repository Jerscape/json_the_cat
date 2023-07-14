const {fetchBreedDescription} = require('./breedFetcher');

const arguments = process.argv;
const breed = arguments[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


