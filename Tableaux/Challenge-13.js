//Afficher les Éléments Impairs


function displayOddNums(array) {
  let updatedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      updatedArr.push(array[i]);
    }
  }
  return updatedArr;
}

console.log(displayOddNums([12, 3, 4, 5, 7, 6, 8]));