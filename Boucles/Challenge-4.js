//Affichage des N Premiers Nombres Impairs
const prompt = require("prompt-sync")();

let number = parseInt(prompt("Entre un number: "));
number *= 2;
for (let i = 1; i <= number; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

