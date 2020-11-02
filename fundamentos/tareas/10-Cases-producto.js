/* 
Escribir una clase Producto para crear objetos
estos objetos tendran propiedades:
codigo
nombre 
precio 
metodo: imprimirDatos 
crear tres instancias de la clase
las vamos a guardar en un Array
usar el metodo imprimirDatos para mostrar los valores de los tres objetos 
*/
let carrito = [];

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimirDatos() {
    console.log(`Código: ${this.codigo}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: ${this.precio}`);
  }
}

let bicicleta = new Producto(100, "Bicicleta", 2500);
let leche = new Producto(101, "Leche", 120);
let tv = new Producto(102, "Smart Tv 4K", 52000);

carrito.push(bicicleta, leche, tv);

carrito.map(function (produc) {
  produc.imprimirDatos();
  console.log("--------------");
});
