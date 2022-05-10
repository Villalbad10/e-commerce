import { postData } from "../helpers/postData.js";

const submit = document.querySelector('#form')


submit.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;
    const image = document.getElementById('image').value;
    const categoria = document.getElementById('categoria').value;


    const datosPago = {
        title: nombre,
        price: precio,
        description: descripcion,
        image: image,
        category: categoria
    }

    postData('products', datosPago)
    submit.reset();
})