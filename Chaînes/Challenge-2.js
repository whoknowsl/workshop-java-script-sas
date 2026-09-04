//Longueur de la Chaîne

const prompt = require("prompt-sync")();

let chain = prompt("Entre votre chaine pour calcule longueur: ");
let sum = 0;
for (let char in chain) {
  sum++;
}
console.log(sum);
