//Callback
// son funciones que
//se ejecutan despues de algo o cuando
//algo sucede.

setTimeout(function () {
  console.log("Este mensaje sale despues de 3 segundos");
}, 3000);

let numeros = [2, 8, 62, 3];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//Map()

let numerosXDos = numeros.map(function (n) {
  return n * 2;
});

//find()

let nombres = ["Pablo", "Fabrizio", "Carlos"];

function buscarNombre(nombre) {
  let persona = nombres.find(function (item) {
    return item === nombre;
  });

  console.log(persona);
}
let masQueDiez = [];

//Filter
const filtrarMasDiez = function () {
  masQueDiez = numeros.filter(function (numero) {
    return numero >= 10;
  });
};
