const prompt = require("prompt-sync")();

// Surface d'un rectangle
let longueur = Number(prompt("Enter the longueur:"));
let largeur = Number(prompt("Enter the largeur:"));
let surface = longueur * largeur;
console.log(`The surface is ${surface}`);
