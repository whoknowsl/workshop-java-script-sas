//Fonction de Compte à Rebours

const prompt = require("prompt-sync")();

let number = parseInt(
  prompt("Entre un positif number pour affiche le countdown: "),
);

let countDown = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};

countDown(number);
