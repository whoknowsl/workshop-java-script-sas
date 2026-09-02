//Conversion de la distance
const prompt = require("prompt-sync")();
let distancInKm = parseFloat(prompt("Enter the distance in KM:"));
let distancInYard = distancInKm * 1093.61;

console.log(`The distance in Yards is ${distancInYard}`);
