//Return the middle element(s) of a given array.
const middle = function(arr) {
  const arrLength = arr.length;
  //Check 0, 1 and 2 array length cases.
  if (arrLength === 0 || arrLength === 1 || arrLength === 2) {
    return [];
  } else if (arrLength % 2 !== 0) { // Cases where arrLength is odd
    const middleElementIndex = Math.floor(arrLength / 2);
    return [arr[middleElementIndex]];
  } else { //Cases where arrLength is even
    const firstMiddleElementIndex = arrLength / 2 - 1;
    return [arr[firstMiddleElementIndex], arr[firstMiddleElementIndex + 1]];
  }
};

module.exports = middle;