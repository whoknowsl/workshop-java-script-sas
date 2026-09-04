//Fonction de Multiplication
const prompt = require("prompt-sync")();
let a = Number(prompt("Entre votre premier numbre: "));
let b = Number(prompt("Entre votre deuxieme numbre: "));
function somme(a, b) {
  return a * b;
}
console.log(`la somme de deux nombre c'est: ${somme(a,b)}`)