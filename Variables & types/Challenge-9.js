const prompt = require("prompt-sync")();

//Calcul de la distance entre deux points dans un espace 3D

const pointA = {
  x: prompt("Point A enter X cordonation:"),
  y: prompt("Point A enter Y cordonation:"),
  z: prompt("Point A enter Z cordonation:"),
};
const pointB = {
  x: prompt("Point B enter X cordonation:"),
  y: prompt("Point B enter Y cordonation:"),
  z: prompt("Point B enter Z cordonation:"),
};

function distance(pointA, pointB) {
  let dx = pointB.x - pointA.x;
  let dy = pointB.y - pointA.y;
  let dz = pointB.z - pointA.z;

  return dx ** 2 + dy ** 2 + dz ** 2;
}

console.log(`the Distance is:${distance(pointA, pointB)}`);
