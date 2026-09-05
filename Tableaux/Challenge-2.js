//Inputting and Displaying Elements
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

console.log(displayNums(sizeOfArray));