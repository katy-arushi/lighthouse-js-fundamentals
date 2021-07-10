function conditionalSum(values, condition) {
  let even_array = []
  let odd_array = []
  let even_sum = 0
  let odd_sum = 0
  for (let i = 0; i < values.length; i++) {
    if (condition === 'even') {
      if (values[i] % 2 === 0) {
        even_array.push(values[i])
      }
    } else if (condition === 'odd') {
      if (values[i] % 2 !== 0) {
        odd_array.push(values[i])
      }
    }
  }
  if (condition === 'even') {
    for (let i = 0; i < even_array.length; i++) {
      even_sum += even_array[i]
    }
    return even_sum
  }
  if (condition === 'odd') {
    for (let i = 0; i < odd_array.length; i++) {
      odd_sum += odd_array[i]
    }
    return odd_sum
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));