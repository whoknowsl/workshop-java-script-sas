//Somme des N Nombres
const prompt = require("prompt-sync")();

let number = Number(prompt("Entre un numbre: "));
let res = 0;
for (let i = number; i > 0; i--) {
  res += i;
  process.stdout.write(` ${i} +`);
  
//   console.log(`${i}+ = ${res}`);
}
console.log(`= ${res}`);