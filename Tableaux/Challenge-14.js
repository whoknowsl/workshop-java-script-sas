//Calculer la Moyenne

function calculTheMoyeen(array) {
  let somme = array.length;
  let sommeOfNums = 0;
  for (let i = 0; i < array.length ; i++) {
    sommeOfNums += array[i];
  }
  return (sommeOfNums / somme).toFixed(2);
}

console.log(calculTheMoyeen([1, 2, 3, 4, 5, 6, 6, 7, 78, 8]));
