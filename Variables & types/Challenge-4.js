//const prompt = require("prompt-sync")();
const prompt = require("prompt-sync")();

let distanceIn_KM_H = parseFloat(prompt("Enter the distance in the KM/H:"));

let distanceIn_KM_S = parseFloat(distanceIn_KM_H * 0.27778);
console.log(`The distance in the seconde is: ${distanceIn_KM_S}`);
