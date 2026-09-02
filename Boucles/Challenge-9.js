//Compteur de Chiffres
const prompt = require("prompt-sync")();

let number = Number(prompt("Entre 4 digit number: "));
if (number === 0) {
  console.log("Nomber de chiffres est: " + 0);
} else {
  let digit = 0;
  let revers_num = 0;
  let count = 0;
  while (number > 0) {
    digit = number % 10; //4
    revers_num = revers_num * 10 + digit; // 04
    number = (number - digit) / 10; //
    count++;
  }
  console.log(`Nomber de chiffres est ${count}`);
}
