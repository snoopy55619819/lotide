const assertEqual = require('../assertEqual');
const tail = require('../tail');

let originalArray = ["Hello", "Lighthouse", "Labs"];
tail(originalArray);
const result = tail(originalArray);
assertEqual(result.join(""), ["Lighthouse", "Labs"].join("")); //Output: false -> this will always fail as arrays can't be compared with the way we have the assert function made currently.
assertEqual(["Hello", "Lighthouse", "Labs"].join(), originalArray.join()); //Check if original array gets modified.
