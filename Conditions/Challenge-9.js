//Vérification d'Alphabet
const prompt = require("prompt-sync")();

let caracter = prompt("Entre un seul caracter: ");

if (caracter === caracter.toLowerCase()) {
  console.log("le caracter entre c'est miniscule");
} else if (caracter === caracter.toUpperCase()) {
  console.log("Le caracter entre c'est majuscule");
}
