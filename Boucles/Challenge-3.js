// Somme des N Nombres
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Entre un number: "));
let res = 0;
for (let i = number; i >= 0; i--) {
  res += i;
}
console.log(res);
