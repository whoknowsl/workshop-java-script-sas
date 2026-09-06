//Rechercher un Élément

const prompt = require("prompt-sync")();

let sizeOfArray = Number(prompt("Enter your array length: "));

function displayNums(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    let elements = Number(prompt("Enter element to add in the array: "));
    array.push(elements);
  }
  return array;
}

function rechercherUnElemente(arr, target) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
    if (found) {
      return i;
    }
  }
  return false;
}

console.log(rechercherUnElemente(displayNums(sizeOfArray), 3));
