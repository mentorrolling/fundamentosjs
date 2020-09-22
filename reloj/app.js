document.getElementById("fecha").innerHTML = "Lunes 21 de Septiembre de 2020";

const reloj = document.getElementById("hora");
let pm = document.getElementById("timezone");

let hora = "";
let minuto = "";
let segundo = "";

setInterval(function () {
  hora = new Date().getHours();
  minuto = new Date().getMinutes();
  segundo = new Date().getSeconds();

  pm.innerHTML = hora >= 12 ? "PM" : "AM"; //TERNARIO Lo mismo que un if simple

  // if (hora >= 12) {
  //      pm.innerHTML ='PM'
  // } else {
  //      pm.innerHTML ='AM'
  // }

  numeros();
  reloj.innerHTML = `${hora}:${minuto}:${segundo}`;
}, 1000);

function numeros() {
  if (hora < 10) {
    hora = `0${hora}`;
  }
  if (minuto < 10) {
    minuto = `0${minuto}`;
  }
  if (segundo < 10) {
    segundo = `0${segundo}`;
  }
}
