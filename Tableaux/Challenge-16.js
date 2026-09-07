//the seconde max
const prompt = require("prompt-sync")();

let sizeOfArray = Number(prompt("Enter your array length: "));

const array = [];
for (let i = 0; i < sizeOfArray; i++) {
    let elements = Number(prompt("Enter element to add in the array: "));
    array.push(elements);
}
console.log(array);


function sortedTableau(array) {
    let secondeMax = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array
}
function ThesecondeMax(array) {
    return [array.length - 1]
}
console.log(sortedTableau(array))
console.log(ThesecondeMax(sortedTableau(array)))