//Affichage des valeurs binaire et hexadécimale équivalentes
const prompt = require("prompt-sync")();

let nombre = Number(prompt("Entre un numbre: ")); 

// Conversion en binaire (base 2)
const binaire = nombre.toString(2);

// Conversion en hexadécimal (base 16)
const hexadecimal = nombre.toString(16).toUpperCase();

// Affichage des résultats
console.log(`Nombre décimal : ${nombre}`);
console.log(`Valeur en binaire : ${binaire}`);
console.log(`Valeur en hexadécimal : 0x${hexadecimal}`);