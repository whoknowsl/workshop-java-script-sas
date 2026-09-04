// Fonction de Fibonacci

const prompt = require("prompt-sync")();

let number = Number(prompt("Calcule fibonacci de : "));

function fibonacci(num) {
  let firstNum = 0;
  let secondNum = 1;
  let currentNum = 0;
  for (let i = 0; i < num; i++) {
    firstNum = secondNum;
    secondNum = currentNum;
    currentNum = firstNum + secondNum;
  }
  return currentNum;
}

console.log(`Le numbre fibonacci de ${number} c'est ${fibonacci(number)}`);
