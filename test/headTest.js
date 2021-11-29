const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Cases:
assertEqual(head([1,2,3]), 1); //Output: pass
assertEqual(head(['2','3','4']), '2'); //Output: pass
assertEqual(head(['a', 'b', 'c']), 'a'); //Output: pass
assertEqual(head([123]), 123); //Output: fail
assertEqual(head([5,6,7]), 5); //Output: fail
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Output: pass
assertEqual(head([5]), 5); //Output: true
assertEqual(head([]), undefined); //Output: true
