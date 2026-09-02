//Affichage de la Suite de Fibonacci

const prompt = require("prompt-sync")();

let num = Number(prompt("Entre un nomber: "));
let firstNum = 0;
let secondeNum = 1;
let current = 0;

for (let i = 0; i < num; i++) {
console.log(current);
  firstNum = secondeNum;
  secondeNum = current;
  current = firstNum + secondeNum;
  
}