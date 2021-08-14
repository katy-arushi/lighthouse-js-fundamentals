const conditionalSum = function(values, condition) {
  let evenArray = [];
  let oddArray = [];
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === 'even') {
      if (values[i] % 2 === 0) {
        evenArray.push(values[i]);
      }
    } else if (condition === 'odd') {
      if (values[i] % 2 !== 0) {
        oddArray.push(values[i]);
      }
    }
  }
  if (condition === 'even') {
    for (let i = 0; i < evenArray.length; i++) {
      evenSum += evenArray[i];
    }
    return evenSum;
  }
  if (condition === 'odd') {
    for (let i = 0; i < oddArray.length; i++) {
      oddSum += oddArray[i];
    }
    return oddSum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));