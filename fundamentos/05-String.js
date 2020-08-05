let nombre = "Pablo";
let apellido = "marino";

let apellidoEnMayuscula = apellido.toUpperCase();
let nombreEnMinuscula = nombre.toLowerCase();

let cantidadPalabras = nombre.length;

let primeraLetra = apellido.charAt(0);

let traerLetra = nombre.charAt(2);

let str = apellido.substr(1, 2);

let nombreCompleto = `${nombre} ${apellido}`;

//Traer ultima letra del apellido
let ultimaLetra = apellido.charAt(apellido.length - 1);

//Capitalizar el apellido

let primera = apellido.charAt(0).toUpperCase();
let resto = apellido.substr(1, apellido.length - 1);

apellido = `${primera}${resto}`;
