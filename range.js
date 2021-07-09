function range(start, stop, step) {
  let output = []
  if (start === undefined || stop === undefined || step === undefined) {
    return output
  } else if (start > stop) {
    return output
  } else if (step <= 0) {
    return output
  }
  for (let i = start; i <= stop; i += step) {
    output.push(i)
  }
  return output
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));