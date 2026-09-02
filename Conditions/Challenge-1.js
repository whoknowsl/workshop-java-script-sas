// Paire ou Impaire
const prompt = require("prompt-sync")();

number = Number(prompt("Enter your deiser number:"));
if (number % 2 === 0) {
  console.log("The number you enterd is pair");
} else {
  console.log("The number you enterd is impair");
}
