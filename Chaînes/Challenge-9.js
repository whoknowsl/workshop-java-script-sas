//Suppression des Espaces
const prompt = require("prompt-sync")();

let phrase = prompt("Enter your desier phrase: ");
let word = "";
let c = 0;
for (let i = 0; i <= phrase.length - 1; i++) {
  if (!(phrase[i] === " ")){
    word += phrase[i];
  } 
}
console.log(word);
