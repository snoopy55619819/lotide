const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    const isValue1AnArray = Array.isArray(array1[i]);
    const isValue2AnArray = Array.isArray(array2[i]);

    if (isValue1AnArray || isValue2AnArray) {
      if (isValue1AnArray && isValue2AnArray) {
        const areArraysEqual = eqArrays(array1[i], array2[i]);
        if(!areArraysEqual) {
          return false;
        }
      } else {
        return false;
      }
    } else if (!(array1[i] === array2[i])) {
      return false;
    }
  };
  return (array1.length === array2.length ? true : false);
};

module.exports = eqArrays;