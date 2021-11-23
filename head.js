//Assert function:
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

//Return first element of array.
const head = function(array) {
  return array.shift();
}

//Test Cases:
assertEqual(head([1,2,3]), 1); //Output: pass
assertEqual(head(['2','3','4']), '2'); //Output: pass
assertEqual(head(['a', 'b', 'c']), 'a'); //Output: pass
assertEqual(head([123]), 123); //Output: fail
assertEqual(head([5,6,7]), 5); //Output: fail
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Output: pass
assertEqual(head([5]), 5); //Output: true
assertEqual(head([]), undefined); //Output: true
