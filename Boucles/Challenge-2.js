//Factorielle d'un Nombre

const prompt = require("prompt-sync")();

let number = parseInt(prompt("Entre un number: "));
let res = 1
for (let i = number; i > 0; i--) {
   res *=  i;
  
}
console.log(res);