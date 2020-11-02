//objetos

let persona = {
  nombre: "José",
  apellido: "Martinez",
  edad: 25,

  saludar: function () {
    //primero sin this
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};

//obtener valores propiedad
persona.nombre;

//Agregar una propiedad
persona.altura = 1.75;

//modificar una propiedad
persona.edad = 37;

//Eliminar una propiedad
delete persona.altura;

//Recorrer un objeto
for (let p in persona) {
  console.log(persona[p]);
}

//Arreglo de objetos
let productos = [
  { id: 1, nombre: "Leche", precio: 150, categorias: ["familiar", "comida"] },
  { id: 2, nombre: "Arroz", precio: 100, categorias: ["familiar", "comida"] },
  {
    id: 3,
    nombre: "Ventilador",
    precio: 850,
    categorias: ["Electrodoméstico"],
  },
  { id: 4, nombre: "Cafetera", precio: 1500, categorias: ["Electrodoméstico"] },
];

//Recorrer un arreglo de objetos
productos.map(function (pro) {
  console.log(`Nombre: ${pro.nombre}`);
  console.log(`Precio: $${pro.precio}`);
  console.log(`Categoría: ${pro.categorias.join(",")}`);
  console.log("--------------------------");
});
