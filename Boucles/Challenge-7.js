//Inversion d'un Entier
const prompt = require("prompt-sync")();

let number = Number(prompt("Entre 4 digit number: "));
let digit = 0;
let revers_num = 0;
while (number > 0) {
  digit = number % 10; //4 
  revers_num = revers_num * 10 + digit; // 04
  number = (number - digit) /10; // 
}
console.log(revers_num);
