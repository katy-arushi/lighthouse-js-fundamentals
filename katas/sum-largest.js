function sumLargestNumbers(data) {
  let num_1 = 0
  let num_2 = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num_1) {
      num_1 = data[i]
    }
  }
  data.pop(num_1)
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num_2) {
      num_2 = data[i]
    }
  }
  return num_1 + num_2
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));