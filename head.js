//Assert function:
const assertEqual = require('./assertEqual');

//Return first element of array.
const head = function(array) {
  return array.shift();
}

module.exports = head;