const prompt = require("prompt-sync")();
// Volume d'une sphère

let rayoun = Number(prompt("Enter your radios length:")) 
const volume = (4/3)* Math.PI * Math.pow(rayoun,3);

console.log(`The voulme of the radios is : ${volume.toFixed(2)}`)