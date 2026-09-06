//Remplacer un Élément
const prompt = require("prompt-sync")();

let sizeOfArray = Number(prompt("Enter your array length: "));
let change = Number(prompt("Enter The number you want to change: "));
let newValue = Number(prompt("Enter The new Value: "));

function displayNums(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    let elements = Number(prompt("Enter element to add in the array: "));
    array.push(elements);
  }
  return array;
}

function changeUnValeur(array, old, neww) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === old) array[i] = neww;
  }
  return array;
}

console.log(changeUnValeur(displayNums(sizeOfArray), change, newValue));
