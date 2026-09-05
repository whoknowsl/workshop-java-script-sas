const prompt = require("prompt-sync")();
//Pyramide d'étoiles

let numbre = Number(prompt("Entre un number: "));

for (let i = 0; i < numbre; i++) {
  let ligne = "";
  for (let space = 0; space < numbre - i; space++) {
    ligne = ligne + " ";
  }
  for (let etoil = 0; etoil < i *2 + 1; etoil++) {
    ligne = ligne + "✰";
  }
  console.log(ligne);
}
