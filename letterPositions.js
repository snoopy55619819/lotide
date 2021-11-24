//Nikhil Tallapureddy
/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) 
  in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, 
  multiple numbers may be needed to represent all the places in the string that it shows up.
*/

//eqArrays function.
const eqArrays = function(array1, array2) {
  let areArraysEqual = true;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i] ? areArraysEqual = true : areArraysEqual = false);
  }
  return (array1.length === array2.length ? areArraysEqual : false);
};

//Check if arrays are same and return assertion result.
const assertArraysEqual = function(actual, expected) {
  const same = eqArrays(actual, expected)
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: [${actual}] ${same ? '===' : '!=='} [${expected}]`);
};

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