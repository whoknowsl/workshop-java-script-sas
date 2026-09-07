//Trouver le Maximum
const prompt = require("prompt-sync")();

let sizeOfArray = Number(prompt("Enter your array length: "));

function displayNums(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    let elements = Number(prompt("Enter element to add in the array: "));
    array.push(elements);
  }
  return array;
}

function findMaximum(array) {
  let max = array[0];
  let secondMax = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (max < array[i])
      secondMax = max
    max = array[i];

  }
  return secondMax;
}
console.log(findMaximum(displayNums(sizeOfArray)));

// function sommeSousDiagonale(taille) {
//   let somme = 0;
//   for (let i = 1; i < taille; i++) {
//     let foix = 0;
//     let lign = "";
//     for (let j = 1; j < taille; j++) {
//       if (i > j) {
//         foix = i * j;
//         lign += foix;
//         somme += foix;
//       } else {
//         lign += ".";
//       }
//     }

//     console.log(lign);
//   }
//   console.log(somme);
// }

// sommeSousDiagonale(5);
