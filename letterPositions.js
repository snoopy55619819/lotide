//Nikhil Tallapureddy
const assertArraysEqual = require('./assertArraysEqual');

//Take in a sentence and return letters and all their corresponding indices.
const letterPositions = function(sentence) {
  const letterPositionTracker = {};
  //Iterate through sentence and keep track of indices of letters.
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    //If character is not a letter, continue onto next iteration/letter
    let isLetter = /[a-z]/i.test(currentLetter);
    if (!isLetter) {continue;}
    //Check if letter is in letterCount {}, and add 1 to value, else add it to letterCount {} with value 1.
    (letterPositionTracker[currentLetter] ? letterPositionTracker[currentLetter].push(i) : letterPositionTracker[currentLetter] = [i]);
  }
  return letterPositionTracker;
};

const result1 = (letterPositions('hello'));
console.log(result1);
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);
assertArraysEqual(result1['o'], [5]); //Check a fail test

// { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }

module.exports = letterPositions;