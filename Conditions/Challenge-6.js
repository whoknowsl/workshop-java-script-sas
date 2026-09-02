//Positif, Négatif ou Nul
const prompt = require("prompt-sync")();
let number = Number(prompt("Enter a number: "));

if (number > 0) {
  console.log("Positif");
} else if (number < 0) {
  console.log("Negatif");
} else {
  console.log("zero");
}
