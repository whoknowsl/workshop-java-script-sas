//Equation du Deuxième Degré
const prompt = require("prompt-sync")();
let a = Number(prompt("Entre a number: "));
let b = Number(prompt("Enter b number: "));
let c = Number(prompt("Enter c number: "));
const delta = b ** 2 - 4 * a * c;

if (delta > 0) {
  let x1 = -b - (Math.sqrt(delta) / 2) * a;
  let x2 = -b + (Math.sqrt(delta) / 2) * a;
  console.log(`the resault are two : ${x1} and ${x2}`);
} else if (delta === 0) {
  let x3 = (-b / 2) * a;
  console.log(`the resault is : ${x3}`);
} else {
  console.log("there's no solution");
}

