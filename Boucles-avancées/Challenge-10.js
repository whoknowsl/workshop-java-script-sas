//Générateur de Mot de Passe

const prompt = require("prompt-sync")();

let longeurDeModePasse = Number(
  prompt("Entre leongeur de mode passe  moin de 8 chiffer: "),
);

function genererMotDePasse(n) {
  const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minuscules = "abcdefghijklmnopqrstuvwxyz";
  const chiffres = "0123456789";
  const tous = majuscules + minuscules + chiffres;
  if (n < 3) {
    return "La longueur doit être d'au moins 3 pour inclure tous les types de caractères.";
  }
  let motDePasse = "";
  motDePasse += majuscules[Math.floor(Math.random() * majuscules.length)];
  motDePasse += minuscules[Math.floor(Math.random() * minuscules.length)];
  motDePasse += chiffres[Math.floor(Math.random() * chiffres.length)];

  for (let i = 3; i < n; i++) {
    motDePasse += tous[Math.floor(Math.random() * tous.length)];
  }

  return motDePasse
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

console.log(genererMotDePasse(longeurDeModePasse));
