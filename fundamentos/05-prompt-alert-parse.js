// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("ingrese su apellido");

// alert(`Bienvenido ${nombre} ${apellido}`);

// let numero = parseInt(prompt("ingrese un número"));
// let numero2 = parseInt(prompt("ingrese un segundo número"));

// let numero = parseFloat(prompt("ingrese un número"));
// let numero2 = parseFloat(prompt("ingrese un segundo número"));

// alert(`La suma entre ${numero} y ${numero2} es ${numero + numero2}`);

//tarea:
//Ingresar dos números
//si alguno de los campos queda vacio igualar el numero a cero
//devolver con un alert el valor de los números restados.
let a;
let b;

a = parseFloat(prompt("ingrese un número"));

b = parseFloat(prompt("ingrese un segundo número"));

if (a || b) {
  alert(`La suma entre ${a} y ${b} es ${a + b}`);
} else {
  alert(`No hay valores en uno de los campos`);
}
