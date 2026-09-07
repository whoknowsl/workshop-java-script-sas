//calculate how many time number count

const prompt = require("prompt-sync")();

let numbreDeLign = Number(prompt("Entre les numbre de lign: "));
let numbreDeColonn = Number(prompt("Entre de numbre de colonne: "));

let arr = [];
for (let i = 0; i < numbreDeColonn; i++) {
    let subarr = [];
    for (let j = 0; j < numbreDeLign; j++) {
        const valeur = Number(prompt(`Valeur pour Ligne ${i + 1}, Colonne ${j + 1} :`))
        subarr.push(valeur)

    }
    arr.push(subarr)

}
function countEashNumber(arr) {
    let map = {};
    arr.forEach((row) => {
        row.forEach((number) => {
            number in map ? map[number] += 1 : map[number] = 1
        })
    })
    return map;
}

console.table(arr);
console.log(countEashNumber(arr))
