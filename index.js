var edwise = require('./lib/edwise');
var dotenv = require('dotenv');
dotenv.load();

var connection = edwise.createConnection({
    username:process.env.USER_NAME,
    password: process.env.PASSWORD,
  });

connection.login().then(function(res) {
  console.log('Authenticated response', res);
});
