//Conversion d'Année
const prompt = require("prompt-sync")();
let year = Number(prompt("Enter a year: "));
let choise = Number(
  prompt(
    "press the desire number:\n1-Mois\n2-Days\n3-Heures\n4-Minutes\n5-Secondes\nEntre your choise: ",
  ),
);

if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
  const mois = 12;
  const days = 365;
  const hours = days * 24;
  const minuts = days * 24 * 60;
  const seconde = days * 24 * 60 * 60;
  switch (choise) {
    case 1:
      console.log(`The number of mois in this ${year} are: ${mois.toFixed()}`);
      break;
    case 2:
      console.log(`The number of days in  ${year} are: ${days} days`);
      break;
    case 3:
      console.log(`The number of Houres in ${year} are: ${hours}H`);
    case 4:
      console.log(`The number of minuts in ${year} are: ${minuts}min`);
    case 5:
      console.log(`The number of secondes in ${year} are: ${seconde}s`);
    default:
      console.log(
        `the year ${year} have:\nMois: ${mois}\nDays: ${days}\nMinuts: ${minuts}\nSecondes: ${seconde}`,
      );
  }
} else {
  console.log(`The year you enterd is not a leap year`);
}
