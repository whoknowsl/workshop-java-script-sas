const prompt = require("prompt-sync")();

//Affichage Température

let tempInCelisus = parseFloat(prompt("Entre the temprateur:"));

if (tempInCelisus < 0) {
  console.log("Solide");
} else if (tempInCelisus < 100 && tempInCelisus <= 0) {
  console.log("Liquide");
}else{
    console.log("Gaz");
}
