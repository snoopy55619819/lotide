//Assert function.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

const tail = array => array.slice(1);

let originalArray = ["Hello", "Lighthouse", "Labs"];
tail(originalArray);
const result = tail(originalArray);
assertEqual(result.join(""), ["Lighthouse", "Labs"].join("")); //Output: false -> this will always fail as arrays can't be compared with the way we have the assert function made currently.
assertEqual(["Hello", "Lighthouse", "Labs"].join(), originalArray.join()); //Check if original array gets modified.
