// Mention Obtenue
const prompt = require("prompt-sync")();

let moyenne = Number(prompt("Entre votre moyenne sur 20: "));

if (moyenne < 10) {
  console.log("tu a recale");
} else if (moyenne >= 10 && moyenne < 12) {
  console.log("passable");
} else if (moyenne >= 12 && moyenne < 14) {
  console.log("assez bien");
} else if (moyenne >= 14 && moyenne < 16) {
  console.log("bien");
} else if (moyenne >= 16 && moyenne <= 20) {
  console.log("très bien");
}
