//Afficher les Éléments Paire

function displayEvenNums(array) {
  let updatedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      updatedArr.push(array[i]);
    }
  }
  return updatedArr;
}

console.log(displayEvenNums([12, 3, 4, 5, 7, 6, 8]));
