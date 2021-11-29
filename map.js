//Nikhil Tallapureddy
const assertArraysEqual = require('./assertArraysEqual');

//Map function
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length - 1]);
const results3 = map(words, word => word);
//console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm']);
assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);

module.exports = map;