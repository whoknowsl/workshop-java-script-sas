//Multiplication des Éléments
const prompt = require("prompt-sync")();

let sizeOfArray = Number(prompt("Enter your array length: "));
let num = Number(prompt("Entre le numbre de multipication: "));
function displayNums(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    let elements = Number(prompt("Enter element to add in the array: "));
    array.push(elements);
  }
  return array;

  
}

function Multiplication(n) {
  let multi = [];
  for (let i = 0; i <= n.length - 1; i++) {
    multi.push(n[i] * num);
  }
  return multi;
}

console.log(Multiplication(displayNums(sizeOfArray)));
