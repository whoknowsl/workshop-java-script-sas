//Calcul de la moyenne géométrique
const prompt = require("prompt-sync")();

let a = Number(prompt("Enter your first number:"));
let b = Number(prompt("Enter your seconde number:"));
let c = Number(prompt("Enter the third number:"));
let moyenne = ((a*b*c)**(1/3)).toFixed(2);
console.log(`the averger geometrique is ${moyenne}`);
