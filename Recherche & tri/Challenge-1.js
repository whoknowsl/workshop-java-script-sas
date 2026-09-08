//Tri à Bulles
function sortedTableau(array) {
  let size = array.length - 1;
  let swap;
  for (let i = 0; i < size; i++) {
    swap = false
    for (let j = 0; j < size - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true
      }
    }
    if (!swap) {
      break
    }

  }
  return array;
}

console.log(sortedTableau([2, 4, 5, 3, 1, 6, 8]))
