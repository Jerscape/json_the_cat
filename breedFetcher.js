const request = require('request');

const arguments = process.argv;
const breed = arguments[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {

    let data = JSON.parse(body);
 
    if (data.length === 0) {
      console.log("I'm sorry that is not an available breed in the database.");

    } else {
      //let data = JSON.parse(body)
      let {description} = data[0];
      console.log(description);

    }

  }

});

