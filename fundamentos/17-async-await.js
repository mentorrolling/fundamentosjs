//https://developers.giphy.com/docs/api/endpoint#random

const api_key = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";

const getImagen = async () => {
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
