//Inversion de Chaîne
const prompt = require("prompt-sync")();

let chaine = prompt("Enter the word that you want to reverse: ");

let char = "";
for (let i = chaine.length - 1; i >= 0; i--) {
  char += chaine[i];
}
console.log(char);

// let reverseChine = chaine.split("").reverse().join("");
// console.log(reverseChine);
