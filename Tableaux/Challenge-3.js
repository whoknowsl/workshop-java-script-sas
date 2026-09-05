//Sum of the Elements
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

function calculatNums(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(calculatNums(displayNums(sizeOfArray)));
