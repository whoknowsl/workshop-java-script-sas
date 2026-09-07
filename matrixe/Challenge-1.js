//Création dynamique
const prompt = require("prompt-sync")();

let numbreDeLign = Number(prompt("Entre les numbre de lign: "));

let numbreDeColonn = Number(prompt("Entre de numbre de colonne: "));
let arr = [];
for (let i = 0; i < numbreDeColonn; i++) {
    let subarr = [];
    for (let j = 0; j < numbreDeLign; j++) {
        const valeur = Number(prompt(`Valeur pour [Ligne ${i + 1}, Colonne ${j + 1}] :`))
        subarr.push(valeur)
    }
    arr.push(subarr)
}
console.table(arr);
