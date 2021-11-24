//Check if values are same and return assertion result.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

//Take in a sentence and return the count of letters in the string.
const countLetters = function(sentence) {
  const cleanedSentence = sentence.trim().split(" ").join(""); //Remove whitespace
  const letterCount = {};
  //Iterate through cleanedSentence and count letter frequency
  for (const letter of cleanedSentence) {
    //If character is not a letter, continue onto next iteration
    let isLetter = /[a-z]/i.test(letter);
    if (!isLetter) {continue;}
    //Check if letter is in letterCount {}, and add 1 to value, else add it to letterCount {} with value 1.
    (letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1);
  }
  return letterCount;
};

// console.log(/[a-z]/i.test('!'));
console.log(countLetters(' hi my name is nikhil ! '));
console.log(countLetters(''));
console.log(countLetters('abcdefghijklmnopqrstuvwxyz'));
console.log(countLetters('         '));
console.log(countLetters('!!!!!!'));
console.log(countLetters('aaaaa'));