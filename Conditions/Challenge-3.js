//Somme de Deux Valeurs
const prompt = require("prompt-sync")();

let first_num = Number(prompt("Enter your first number: "));
let sec_num = Number(prompt("Enter your seconde number: "));

if (first_num === sec_num) {
  let somme = (first_num + sec_num) * 3;
  console.log(somme);
} else {
  console.log(first_num + sec_num);
}
