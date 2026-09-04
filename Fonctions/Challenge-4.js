//Fonction de Minimum
const prompt = require("prompt-sync")();
const a = Number(prompt("Entre votre premier number: "));
const b = Number(prompt("Entre votre deuxiem numbre: "));
const compare = (a, b) => {
  return a > b ? b : a;
};
console.log(`Le minimum number c'est ${compare(a, b)}`);
