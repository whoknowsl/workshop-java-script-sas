//Création et Utilisation d'un Objet
const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let prename = prompt("Enter your prename: ");
let age = Number(prompt("Enter your age: "));

function cardName(a, b, c) {
  let personne = {
    name: a,
    prename: b,
    age: c,
  };
  return `My name is ${name} ${prename} my age ${age}`
}

console.log(cardName(name,prename,age));
