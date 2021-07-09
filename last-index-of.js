function lastIndexOf(list, value) {
  let foundIndex = -1
  if (list.length === 1) {
    return 0
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      foundIndex = i
    }
  }
  return foundIndex
}
