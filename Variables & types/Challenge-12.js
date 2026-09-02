const prompt = require("prompt-sync")();

//Nombre entier à quatre chiffres en ordre inverse
const number = Number(prompt("Enter 4 digits Number:"));
function revers_num(num) {
  return (reverse_num = String(num).split("").reverse().join(""));
}
console.log(revers_num(number));



// let a =  number % 10 
// let b = Math.floor((number / 10)%10);
// let c = Math.floor((number / 100)%10);
// let d =  Math.floor((number/1000)%10);
// console.log(a,b,c,d);