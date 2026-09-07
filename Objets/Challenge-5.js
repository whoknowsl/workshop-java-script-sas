//Objet et Fonction de Retour
const prompt = require("prompt-sync")();
let information = {
  titre: prompt("Entre leb titre de livre: "),
  auteur: prompt("Entre le nom de l'auteur: "),
  annee: prompt("Entre l'annee de puplice le livre:"),
};

function afficheLesInfo(titre, auteur, annee) {

  console.log(`le titre de livre c'est ${information.titre}
le nome de le auteur c'est ${information.auteur}
la annee de puplice de livre c'est ${information.annee}`);
}

afficheLesInfo(information.titre, information.auteur, information.annee)

