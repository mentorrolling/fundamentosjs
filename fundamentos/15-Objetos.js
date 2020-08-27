let auto = {
  marca: "Fiat",
  modelo: "uno",
  anio: 2018,
  puertas: 5,
  combustible: "Nafta",
  encender(valor) {
    if (valor) {
      console.log("Vehículo encendido");
    } else {
      console.warn("Vehículo apagado");
    }
  },
};

let persona = {
  nombre: "José",
  apellido: "Martinez",
  edad: 25,
};

let persona2 = {
  nombre: "José",
  apellido: "Martinez",
  edad: 25,
};

persona2 === persona; //false

//Obtener valores de los atributos
persona.nombre;
persona["nombre"];

// //Agregar propiedad
persona.altura = 1.7;

// //Modificar el valor de un atributo
persona.edad = 30;

// //Eliminar un atributo
delete persona.edad;

//iterar un objeto
for (let p in persona) {
  console.log(`${p}: ${persona[p]}`);
  //   console.log(p);
}
