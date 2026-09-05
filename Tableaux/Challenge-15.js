//Fusion de Deux Tableaux

// const prompt = require("prompt-sync")();

// let firstArray = Number(prompt("Enter your first array length: "));
// let secondArray = Number(prompt("Enter your second array length: "));
// function displayNums(number) {
//   const array = [];
//   for (let i = 0; i < number; i++) {
//     let elements = Number(prompt("Enter element to add in the array: "));
//     array.push(elements);
//   }
//   return array;
// }
// console.log("The first array:\n" + displayNums(firstArray));
// console.log("The second array:\n" + displayNums(secondArray));

function fusionDeTbleaux(array1, array2) {
  let fusion = [];
  for (let i = 0; i <= array1.length - 1; i++) {
    fusion.push(array1[i]);
  }
  for (let j = 0; j <= array2.length - 1; j++) {
    fusion.push(array2[j]);
  }
  return fusion;
  //   let fusionArray = [...array1, ...array2];
  //   return fusionArray;
}

console.log(fusionDeTbleaux([1, 2, 3, 4], [5, 6, 6, 7, 8]));
