const prompt = require("prompt-sync")();
//Calcul de la Puissance

let base = Number(prompt("Entre un base: "));
let exposant = Number(prompt("Entre un exposant: "));
let res = 1;
for (let i = 0; i < exposant; i++) {
  res *= base
}
console.log(res);
