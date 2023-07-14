const request = require('request');

const fetchBreedDescription = function (breed, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {

    if (error) {
      
      return callback(error, null);
    } 

    let data = JSON.parse(body);
 
    if (data.length === 0) {
      callback("I'm sorry that is not an available breed in the database.");

    } else {
      //let data = JSON.parse(body)
      let {description} = data[0];
      callback(null, description);

    }

  });
  
};


module.exports = {
  fetchBreedDescription
};



