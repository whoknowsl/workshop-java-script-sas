//Comparaison de Chaînes
const prompt = require("prompt-sync")();

let firsWord = prompt("Enter your first word: ").trim();
let secondWord = prompt("Entre your seconde word: ").trim();

if (firsWord === secondWord) {
  console.log(`The two words are equal`);
} else {
  console.log(`The tow words not equal`);
}
