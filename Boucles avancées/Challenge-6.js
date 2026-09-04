//Facteurs d'un Nombre
const prompt = require("prompt-sync")();
let number = Number(prompt("Entre un numbre: "));
let i = 1;
while (i != number) {
    i += i*i
  console.log(i);
}
