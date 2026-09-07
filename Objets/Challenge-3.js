// Passage d'un Objet en Argument
const prompt = require("prompt-sync")();
let longueur = Number(prompt("Entre le longueur: "));
let largeur = Number(prompt("Entre votre largeur: "));
let rectangle = {
  L: longueur,
  R: largeur,
  aire: longueur * largeur,
};

console.log("The laire de votre rectangle c'est: " + rectangle.aire);
