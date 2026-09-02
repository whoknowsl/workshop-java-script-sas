//Voyelle ou Non
const prompt = require("prompt-sync")();
let word = prompt("Enter your word: ").toLowerCase();
switch (word) {
  case "a":
  case "e":
  case "i":
  case "u":
  case "o":
  case "y":
    console.log("The word you enterd is voyelle");
    break;
  default:
    console.log("The word you enterd is not voyelle");
}
