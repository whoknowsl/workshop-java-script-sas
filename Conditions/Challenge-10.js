//Formatage de la Date
const prompt = require("prompt-sync")();

let jour = Number(prompt("Entre le jour: "));
let mois = Number(prompt("Entre le mois: "));
let annee = Number(prompt("Entre l'annee: "));
console.log(`${jour}/${mois}/${annee}`);

switch (mois) {
  case 1:
    console.log(`${jour}/Janvier/${annee}`);
    break;
  case 2:
    console.log(`${jour}/Février/${annee}`);
    break;
  case 3:
    console.log(`${jour}/Mars/${annee}`);
    break;
  case 4:
    console.log(`${jour}/Avril/${annee}`);
    break;
  case 5:
    console.log(`${jour}/Mai/${annee}`);
    break;
  case 6:
    console.log(`${jour}/Juin/${annee}`);
    break;
  case 7:
    console.log(`${jour}/Juillet/${annee}`);
    break;
  case 8:
    console.log(`${jour}/Août/${annee}`);
    break;
  case 9:
    console.log(`${jour}/Septembre/${annee}`);
    break;
  case 10:
    console.log(`${jour}/Octobre/${annee}`);
    break;
  case 11:
    console.log(`${jour}/Novembre/${annee}`);
    break;
  case 12:
    console.log(`${jour}/Décembre/${annee}`);
    break;
  default:
    console(`entre valid mois`);
}

