//Table de Multiplication
const prompt = require("prompt-sync")();
let number = Number(prompt("Entre un number: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
