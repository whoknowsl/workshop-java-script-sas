//Alphabet Majuscule
const prompt = require("prompt-sync")();

let caracter = prompt("Entre a caractere: ");
let asci_caracter = caracter.charCodeAt(0);

if (asci_caracter > 65 && asci_caracter < 90) {
  console.log("le number entre si majuscule");
} else {
  console.log("Le number entre si miniscule");
}
