const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave } = persona;

console.log(clave);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar(nombre);

const personajes = ["tapalin", "el gato con botas", "superman"];

const [, , yyy] = personajes;
