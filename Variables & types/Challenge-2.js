//Conversion de la température
const prompt = require("prompt-sync")();
let tempOnCelsius = prompt("Entre temp on celisus:");
// let tempInKelvine = tempOnCelsius
console.log(`The temp in Kelvin is : ${tempOnCelsius + 273.15}`);