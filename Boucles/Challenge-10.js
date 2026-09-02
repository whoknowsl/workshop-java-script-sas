//Calcul de la Somme des N Entiers
const prompt = require("prompt-sync")();
let number = Number(prompt("Entre un number: "));
let res = 0;
for (let i = 1; i <= number; i++) {
  res += i;
}
console.log(res)