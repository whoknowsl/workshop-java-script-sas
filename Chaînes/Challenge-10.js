//Trouver un Sous-String
const prompt = require("prompt-sync")();
let text = prompt("tapier le text: ");
let word = prompt("Entre word: ");

// if (text.indexOf(word) === -1) {
//   console.log(`The ${word} is not in \n${text}`);
// } else {
//   console.log(`The ${word} is in the \n${text}`);
// }

function include(t, w) {
  let found = false;
  for (let i = 0; i <= t.length - 1; i++) {
    for (let j = 0; j <= w.length - 1; j++) {
      if (t[i + j] != w[j]) {
        break;
      }
      if (j == w.length - 1) {
        found = true;
      }
    }
  }
  return found;
}

console.log(include(text, word));
