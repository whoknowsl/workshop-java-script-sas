//Inversion d'un Tableau

function inversTableau(array) {
  let reversedArray = [];
  for (let i = array.length-1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(inversTableau([5,4,3,2,1]))