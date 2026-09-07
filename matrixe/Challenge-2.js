//Somme des lignes et colonnes
const prompt = require("prompt-sync")();

let numbreDeLign = Number(prompt("Entre les numbre de lign: "));

let numbreDeColonn = Number(prompt("Entre de numbre de colonne: "));

let arraye2D = [];
let sommeTotalMatrix = 0;
let sommeDelignOne = 0;
let sommeDeColonOne = 0;
for (let i = 0; i < numbreDeLign; i++) {
    let lign = [];
    for (let j = 0; j < numbreDeColonn; j++) {

        let valeur = Number(prompt(`Enter value in the lign ${i + 1} in the colon ${j + 1}: `));
        lign.push(valeur)
        sommeTotalMatrix += lign[i];
        sommeDelignOne[i] += valeur;
        sommeDeColonOne[j] += valeur;
    }



    arraye2D.push(lign);


}
console.table(arraye2D);
console.log(sommeTotalMatrix);
console.log(sommeDelignOne);
console.log(sommeDeColonOne)