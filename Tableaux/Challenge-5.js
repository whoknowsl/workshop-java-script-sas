//Trouver le Minimum
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

function findMiniNum(array) {
  let min = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    min > array[i] ? (min = array[i]) : min;
  }
  return min;
}
console.log(findMiniNum(displayNums(sizeOfArray)));
