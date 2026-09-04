// Fonction de Maximum
const prompt = require("prompt-sync")();
const a = Number(prompt("Entre votre premier number: "));
const b = Number(prompt("Entre votre deuxiem numbre: "));
const compare = (a, b) => {
  return a > b ? a : b;
};
console.log(`Le maximum number c'est ${compare(a, b)}`);
