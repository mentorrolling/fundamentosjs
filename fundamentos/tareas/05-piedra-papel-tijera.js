// 3 variables
//- tijera
//- papel
//- piedra

//computadora tambien debe elegir*****

//tendriamos que recibir un mensaje
// si ganamos, empatamos o perdemos

let op1 = "tijera";
let op2 = "papel";
let op3 = "piedra";

let juego = ["tijera", "papel", "piedra"];

let bot;

function juegaBot() {
  return (bot = juego[Math.round(Math.random() * 2)]);
}

function jugador(opcion) {
  juegaBot();
  switch (true) {
    case opcion === op1 && bot === "papel":
      console.log("GANASTE!!");
      break;
    case opcion === op2 && bot === "piedra":
      console.log("GANASTE!!");
      break;
    case opcion === op3 && bot === "tijera":
      console.log("GANASTE!!");
      break;
    case opcion === bot:
      console.warn("EMPATE");
      break;
    default:
      console.error("PERDISTE!!");
      break;
  }
  console.log(`Elegiste ${opcion} y Bot eligió ${bot}`);
}

//tarea
// mejorar el juego:
// validaciones del ingreso de datos
// que el usuario ingrese los datos por
//pantalla
//probar el switch con opcion en vez de true
//hacerlo sin switch
