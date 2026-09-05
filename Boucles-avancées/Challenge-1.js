const prompt = require("prompt-sync")();

// Table de Multiplication Inversée

let number = Number(prompt("Entre un numbre: "));

for (let i = number; i > 0; i--) {
  console.log(`${number} * ${i} = ${number * i}`);
}
