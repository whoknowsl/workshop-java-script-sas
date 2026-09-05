// // Affichage des Nombres Premiers
// num /1 === 0 && num / num === 0;
const prompt = require("prompt-sync")();

let number = Number(prompt("Entre un numbre: "));

for (let i = 2; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      break;
    }
    if (i == j) {
      console.log(i);
    }
  }
}
