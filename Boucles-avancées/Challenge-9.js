//Calcul de la Puissance
const prompt = require("prompt-sync")();
let base = Number(prompt("Enter the number yo wante to calculat: "));
let exponent = Number(prompt("Enter the base you wanto to calculate: "));
let resault = 1;
let i = 0;
while (i < exponent) {
  resault *= base;
  i++;
}
console.log(resault);
