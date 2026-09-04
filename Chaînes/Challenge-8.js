// Conversion en Minuscules
const prompt = require("prompt-sync")();

let phrase = prompt("Entre the phrase: ");

lowerPhrase = phrase.toLocaleLowerCase();
console.log(lowerPhrase);
