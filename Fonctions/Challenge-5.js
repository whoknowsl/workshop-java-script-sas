//Fonction de Factorielle
const prompt = require("prompt-sync")();

let num = Number(prompt("Entre un nomber: "));
function calculeFacto(number) {
  if(number < 0 ) return "Erorre"
  let resault = 1;
  for (let i = number; i > 0; i--) {
    resault *= i;
  }
  return resault;
}

console.log(`le factoriel de ${num} = ${calculeFacto(num)}`);
