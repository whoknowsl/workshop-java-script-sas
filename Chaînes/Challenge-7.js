const prompt = require("prompt-sync")();

//Conversion en Majuscules

let phrase = prompt("Entre your phrase: ");

upperphrase = phrase.toLocaleUpperCase();

console.log(upperphrase);