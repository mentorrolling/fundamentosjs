//Array

let arreglo = [1, "Pablo", true, 34, false, "Fabrizio"];
console.log(arreglo.length);

//Ver el último elemento de mi arreglo
// console.log(arreglo[arreglo.length - 1]);

let alumnos = ["Pablo", "Guadalupe", "Lean", "Gabriel"];

for (let i = 0; i < alumnos.length; i++) {
  console.log("Hola " + alumnos[i]);
}

//Agregar elemento al arreglo
alumnos.push("Fabrizio");

//Cambiando valores del arreglo
alumnos[0] = "José";

//Para eliminar el último elemento del arreglo
alumnos.pop();

//Me permite agregar un elemento en la primera posición
alumnos.unshift("Diego");

//Eliminar el primer elemento
alumnos.shift();

alumnos.splice(2, 1, "Belén");
alumnos.push("Lautaro");

//reemplazar elementos segun su posicion
alumnos.splice(3, 2, "Jorge", "Lucas");

// alumnos.splice(1, 2);
// alumnos.splice(2);

//Encontrar la posicion de un elemento
alumnos.indexOf("Jorge");

//Ordenar el arreglo alfabeticamente
alumnos.sort();

let interrogante = ["🥚", "🐔"].sort();
