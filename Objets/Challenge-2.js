// Objet avec Tableau
const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let prename = prompt("Enter your prename: ");
let sizeOfArray = Number(prompt("Enter how mush do you wanna add: "));

function displayNums(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    let elements = Number(prompt("Enter your notes: "));
    array.push(elements);
  }

  return array;
}
let notes = displayNums(sizeOfArray);
function caculateSommeOfNotes(arr) {
  let somme = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    somme += arr[i];
  }
  return somme;
}
function caculateTheMoyeen(arr) {
  let count = arr.length - 1;
  let somme = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    somme += arr[i];
  }
  let moyeen = somme / count;
  return moyeen.toFixed(2);
}

etduantCard = {
  etudientName: name,
  etudientPreName: prename,
  etduantNotes: displayNums(notes),
  somme: caculateSommeOfNotes(notes),
  moyeen: caculateTheMoyeen(notes),
};
console.log(`Name: ${etduantCard.etudientName}
Prename: ${etduantCard.etudientPreName}
Notes: ${etduantCard.etduantNotes}
Somme Of Notes: ${etduantCard.somme}
Le Moyeen of your Notes: ${etduantCard.moyeen}`);
