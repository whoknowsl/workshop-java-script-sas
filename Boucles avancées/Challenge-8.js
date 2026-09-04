// Recherche Dichotomique

function dichotomique(arr, num) {
  let right = 0;
  let left = arr.length - 1;
  while (right <= left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === num) {
      console.log("found");
      return arr[mid];
    } else if (arr[mid] < num) {
      right = mid + 1;
    } else {
      left = mid - 1;
    }
  }
  console.log("not found");
}

dichotomique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,], 4);

let number = 5;
