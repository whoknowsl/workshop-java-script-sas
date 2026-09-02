// Moyenne pondérée de trois nombres
const prompt = require("prompt-sync")();

const ponodri_first = 2;
const ponodri_seconde = 3;
const ponodri_third = 5;
const first_num = Number(prompt(`Enter your first number:`));
const sec_num = Number(prompt(`Enter your seconde number:`));
const third_num = Number(prompt(`Enter your third number:`));

const ponoderation_num =
  first_num * ponodri_first +
  sec_num * ponodri_seconde +
  (third_num * ponodri_first) /
    (ponodri_first + ponodri_seconde + ponodri_third);
console.log(ponoderation_num.toFixed(2));
