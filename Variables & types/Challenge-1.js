//Écrivez un programme JavaScript qui permet d'afficher vos informations personnelles : nom, prénom, âge, sexe et adresse e-mail. Les données sont saisies par l'utilisateur.
const prompt = require("prompt-sync")();

const name = prompt("Enter your Name:");
const prenom = prompt("Enter your prenom:");
const age = prompt("Enter your age:");
const sexe = prompt("Male or female:");
const adresse_email = prompt("Enter your Email:");

console.log(
  `your information\nNAME: ${name}\nPRENOM: ${prenom}\nAGE: ${age}\nSEXE: ${sexe}\nEMAIL: ${adresse_email}`,
);
