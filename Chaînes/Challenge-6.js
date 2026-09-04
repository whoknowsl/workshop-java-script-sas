//Compte des Occurrences d'un Caractère

const prompt = require("prompt-sync")();

let phrase = prompt("Enter your phrase: ");
let cahracter = prompt("Entre the cahracter you want to calculate: ");
let c = 0;
for (char of phrase) {
  if (char == cahracter) {
    c++;
  }
}
console.log(`The "${cahracter}" repeat ${c} times in ${phrase}`);
