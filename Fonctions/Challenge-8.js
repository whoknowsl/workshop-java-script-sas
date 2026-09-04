//Fonction de Vérification de Parité

const prompt = require("prompt-sync")();

let number = Number(prompt("Entre un number pour check et pair ou impair: "));

function checkNumber(num) {
  return num % 2 === 0 ? "pair" : "impair";
}

console.log(`The ${number} is ${checkNumber(number)}`);
