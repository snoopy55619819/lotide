const assertEqual = require('./assertEqual');

//countOnly will be given an array and an object. 
// It will return an object containing counts of everything that the input object listed.
const countOnly = function(allItems, itemsToCount) {
  const itemCounter = {}; //Create empty counter obj.

  //Iterate though each item in allItems
  for (const item of allItems) {
    //Check if item needs to be counted.
    if (itemsToCount[item] === true){
      //Add the item to itemCounter obj if not already there. If already in itemCounter then increase by 1.
      (itemCounter[item] ? itemCounter[item]++ : itemCounter[item] = 1);
    }
  }
  //console.log(itemCounter);
  return itemCounter;
};

//Test Cases:
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;