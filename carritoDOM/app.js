localStorage.clear();

//----Creacion de data de productos, carrito, contador-------
class Producto {
  constructor(nombre, precio, stock = 10) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

//Inicializando programa------------------------------------
let productos = [];
let carrito = [];
let contador = 0;
let shoppingCart = document.getElementById("shoppingCart");
document.getElementById("contador").innerHTML = contador;

let tv = new Producto("Smart TV", 30000);
let notebook = new Producto("Notebook Dell experia", 75000);
let nintendo = new Producto("Nintendo Switch", 40000);
let impresora = new Producto("Impresora HP 360", 56000);

productos.push(tv, notebook, nintendo, impresora);

localStorage.setItem("productos", JSON.stringify(productos));

let db = JSON.parse(localStorage.getItem("productos"));
//--------------------------------------------------------------

//Crear las cards
let tarjetas = document.getElementById("tarjetas");

db.map(function (prod, i) {
  let card = `<div class="col col-md-6 col-lg-4">
  <div class="card m-2">
   
    <div class="card-body">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text"><strong>Precio: </strong>$${prod.precio}</p>
      
    </div>
    <div class="card-footer">
    <button class='btn btn-warning float-right' onclick='addCarrito(${i})'>Agregar</button>
  </div>
  </div>
  <div>`;

  tarjetas.innerHTML += card;
});

function addCarrito(index) {
  let producto = db[index];

  delete producto.stock;

  //   console.log(producto);

  let storage = JSON.parse(localStorage.getItem("carrito")) || []; //si no existe la clave me devuelva un arreglo vacio

  storage.push(producto);

  localStorage.setItem("carrito", JSON.stringify(storage));

  contador = storage.length;

  document.getElementById("contador").innerHTML = contador;
}
