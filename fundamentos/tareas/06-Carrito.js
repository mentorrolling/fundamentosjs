/* Crear un carrito de compras con las siguientes funcionalidades:
- Agregar productos
- listar productos del carrito
- Buscar un producto en el carrito
- Filtrar por productos
- Quitar producto del carrito  */
let carrito = ["BANANA", "BICI", "GALLETAS"];

function addCarrito() {
  let producto = prompt("Ingrese el producto");

  while (producto) {
    carrito.push(producto.toUpperCase());
    let producto = prompt("Ingrese el producto");
  }
}

function listarProductos() {
  carrito.map(function (producto) {
    console.log(producto.toUpperCase());
  });
}

function buscarProducto(producto = prompt("Ingrese el producto a buscar")) {
  if (producto) {
    let resultado = carrito.find(function (produc) {
      return produc === producto.toUpperCase();
    });
    if (resultado) {
      console.log(`El producto ${producto.toUpperCase()} está en el carrito`);
    } else {
      console.warn(`No se encuentra el producto`);
    }
  } else {
    console.log(" No se ingreso ningún producto");
  }
}

function filtrarProductos(producto = prompt("Ingrese el producto")) {
  if (producto) {
    let resultado = carrito.filter(function (produc) {
      //   El método indexOf() retorna el primer índice en el que se puede encontrar
      //   un elemento dado en el array, ó retorna - 1 si el elemento no esta presente.
      return produc.indexOf(producto.toUpperCase()) > -1;
    });
    if (resultado.length > 0) {
      console.table(resultado);
    } else {
      console.warn("No hay resultados para esta busqueda");
    }
  }
}

function quitarProducto(producto = prompt("Ingrese el producto a quitar")) {
  if (producto) {
    let index = carrito.indexOf(producto.toUpperCase());

    if (index != -1) {
      carrito.splice(index, 1);
      console.log(`Se eliminó ${producto.toUpperCase()} del carrito`);
    } else {
      console.warn("El producto no existe en el carrito");
    }
  }
}
