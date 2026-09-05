//Facteurs d'un Nombre
const prompt = require("prompt-sync")();
let number = Number(prompt("Entre un numbre: "));
let i = 1;
for (let i = 1; i <= number; i++) {
  for (let j = number; j > 0; j--) {
    if (i * j == number) {
      console.log(`${i} *${j} = ${number}`);
    }
  }
}
