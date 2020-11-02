let carrito = ["BANANA", "ANTEOJOS", "PAN", "CARNE"];

const agregarAlCarrito = function () {
  let item = prompt("Ingrese un producto al carrito").toUpperCase();

  if (item && item.length > 2) {
    carrito.push(item);
  } else {
    console.warn("No hay producto válido para agregar al carrito");
  }
};

const listarProductos = function () {
  carrito.map(function (item) {
    console.log(item);
  });
};

const eliminarProducto = function (producto = prompt("Ingrese el producto")) {
  let prod = producto.toUpperCase();

  let indice = carrito.indexOf(prod);

  if (indice >= 0) {
    carrito.splice(indice, 1);
    console.log(`Se a eliminado el producto ${prod} del carrito`);
  } else {
    console.warn(`El producto ${prod} no existe en su carrito`);
    listarProductos();
  }
};

const buscarProducto = function (producto) {
  let resultado = carrito.find(function (item) {
    return item === producto.toUpperCase();
  });
  if (resultado) {
    console.log(
      `El producto ${producto.toUpperCase()} se encuentra en el carrito`
    );
  } else {
    console.warn(`El producto ${producto.toUpperCase()} no está en el carrito`);
  }
};

const limpiarCarrito = function () {
  carrito = [];
  console.log("El carrito quedó vacio");
};
