//Trouver un Sous-String
const prompt = require("prompt-sync")();
let text = prompt("tapier le text: ");
let word = prompt("Entre word: ");

if (text.indexOf(word) === -1) {
  console.log(`The ${word} is not in \n${text}`);
} else {
  console.log(`The ${word} is in the \n${text}`);
}
