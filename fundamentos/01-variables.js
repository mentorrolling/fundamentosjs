const nombre = "Pablo Marino";

//variables que no van a ser renombradas o cambiar
const apellido = "Marino";

let valorDado = 5;
valorDado = 4; //no hace falta poner let nuevamente

if (true) {
  let valorDado = 7; //no es el mismo valorDado porque
  //este lo estoy inicializando en otro
  //scope o ambito
  console.log(valorDado);
}

console.log(valorDado);
//se crean variables de scope
