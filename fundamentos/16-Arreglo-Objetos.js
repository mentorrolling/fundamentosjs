let productos = [
  { id: 1, nombre: "Leche", precio: 150, categorias: ["familiar", "comida"] },
  { id: 2, nombre: "Arroz", precio: 80, categorias: ["familiar", "comida"] },
  {
    id: 3,
    nombre: "Ventilador",
    precio: 15000,
    categorias: ["Electrodomésticos"],
  },
  {
    id: 4,
    nombre: "Cafetera",
    precio: 20000,
    categorias: ["Electrodomésticos"],
  },
];

//recorrer un arreglo de objetos
productos.map(function (pro) {
  console.log(`Nombre: ${pro.nombre}`);
  console.log(`Precio: ${pro.precio}`);
  console.log(`Categorias: ${pro.categorias.join(", ")} `);
  console.log("---------------------------");
});
