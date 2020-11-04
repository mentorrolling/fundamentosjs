//https://developers.giphy.com/docs/api/endpoint#random

const api_key = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";

const getImagen = async () => {
  /*  La declaración try...catch señala un bloque de
  instrucciones a intentar(try), y especifica una
  respuesta si se produce una excepción(catch). */

  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const imagen = document.createElement("img");
    imagen.src = url;

    document.body.append(imagen);
    console.log(data);
  } catch (error) {
    console.warn(error);
  }
};

getImagen();
