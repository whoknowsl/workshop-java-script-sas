const prompt = require("prompt-sync")();
//Pyramide d'étoiles

let numbre = Number(prompt("Entre un number: "));

for (let i = 1; i <= numbre; i++) {
  let ligne = "";
  for (let j = 0; j < numbre - i; j++) {
    ligne += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    ligne += "*";
  }
  console.log(ligne);
}
