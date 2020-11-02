/* Crear un carrito de compras con las siguientes funcionalidades:
- Agregar productos (Nombre, precio, categoria)
- listar productos del carrito (detallado y que tenga el valor final a pagar)
- Buscar un producto en el carrito
- Filtrar por productos
- Quitar producto del carrito  */

let carrito = [
  { nombre: "BANANA", precio: 120, categoria: "FRUTAS" },
  { nombre: "ANANA", precio: 130, categoria: "FRUTAS" },
  { nombre: "BICICLETA", precio: 15000, categoria: "RODADOS" },
];

function listarProducto() {
  let valor = 0;
  carrito.map(function (produc) {
    console.log(`Nombre: ${produc.nombre}`);
    console.log(`Precio: $${produc.precio}`);
    console.log(`Categoría: ${produc.categoria}`);
    console.log("--------------------------------");
    valor += produc.precio;
  });
  console.log(`Monto a pagar : $${valor}`);
}

function agregarProductos() {
  let nombre = prompt("agregar nombre de producto").toUpperCase();
  let precio = parseFloat(prompt("Ingrese el valor"));
  let categoria = prompt("Ingrese la categoría").toUpperCase();
  validarProducto(nombre, precio, categoria);
}

function validarProducto(nombre, precio, categoria) {
  if (nombre) {
    nombre = nombre.toUpperCase();
    if (precio && precio > 0) {
      if (categoria) {
        carrito.push({ nombre, precio, categoria });
      } else {
        console.error("Falta categoria");
      }
    } else {
      console.error("Valor de precio incorrecto");
    }
  } else {
    console.error("Nombre no valido");
  }
}

function buscarProducto(nombre = prompt("Ingrese nombre del producto")) {
  if (nombre) {
    carrito.map(function (produc) {
      if (produc.nombre === nombre.toUpperCase()) {
        console.log(`El producto ${nombre.toUpperCase()} está en el carrito`);
      } else {
        console.warn(`el carrito no contiene ${nombre.toUpperCase()}`);
      }
    });
  }
}

function filtrarProductos(nombre = prompt("Ingrese el nombre")) {
  let valor = 0;
  if (nombre) {
    let resultado = carrito.filter(function (produc) {
      return produc.nombre.indexOf(nombre.toUpperCase()) > -1;
    });
    resultado.map(function (produc) {
      console.log(`Nombre: ${produc.nombre}`);
      console.log(`Precio: $${produc.precio}`);
      console.log(`Categoría: ${produc.categoria}`);
      console.log("--------------------------------");
      valor += produc.precio;
    });
    console.log(`Monto calculado : $${valor}`);
  }
}

function quitarProducto(producto = prompt("Ingrese el nombre del producto")) {
  let index;
  if (producto) {
    index = carrito.findIndex(function (produc) {
      return produc.nombre === producto.toUpperCase();
    });

    if (index != -1) {
      carrito.splice(index, 1);
      console.log(`Se eliminó ${producto.toUpperCase()} del carrito`);
    } else {
      console.warn("El producto no existe en el carrito");
    }
  }
}
