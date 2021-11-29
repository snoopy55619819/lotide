//Nikhil Tallapureddy

//Iterate through a list and return a new list of values until the condition of callback() is met.
const takeUntil = function(array, callback) {
  let collectedElements = [];
  //iterate through array
  for (let word of array) {
    if (callback(word)) {
      return collectedElements;
    }
    collectedElements.push(word);
  }
  return collectedElements;
};

//Test cases:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* =>
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

module.exports = takeUntil;