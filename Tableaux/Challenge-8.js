// Copie d'un Tableau
function copierDeTableau(array) {
  let copyArray = [];
  for (let i = 0; i < array.length; i++) {
    copyArray.push(array[i]);
  }
  return copyArray;
}

console.log(copierDeTableau([1,2,4,5,3]))
