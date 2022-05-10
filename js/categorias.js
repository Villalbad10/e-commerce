import { getData } from "../helpers/getData.js"
import { verCategoria } from "../modules/verCategoria.js";

document.addEventListener('DOMContentLoaded', async () => {
    const productos = document.querySelector('.productos');
    const carNumber = document.querySelector('.car-number');
    const carrito = await getData('car');

    carNumber.textContent = await carrito.length;
    const data = await getData('products');

    const click = sessionStorage.getItem('categoria');
    const cat = data.filter((categoria) => categoria.category === click);
    verCategoria(cat, productos);
})

document.addEventListener('click', async ({ target }) => {

    const data = await getData('products');

    if (target.classList.contains('ver')) {
        const producto = data.find(item => item.id == target.id);
        localStorage.setItem('detalle', JSON.stringify(producto));
        window.location.href = './detalle.html'
    }
})