import { getData } from "../helpers/getData.js";
import { postData } from "../helpers/postData.js";

document.addEventListener('DOMContentLoaded', async () => {
    const detalle = document.querySelector('.detalle');
    const carNumber = document.querySelector('.car-number');

    const carrito = await getData('car');
    carNumber.textContent = await carrito.length;



    const producto = JSON.parse(localStorage.getItem('detalle'));
    const { image, price, title, description } = producto;
    detalle.innerHTML = `
    <img src="${image}" alt="">
    <div class="detalles">
        <h2>${title}</h2>
        <h3>$${price}</h3>
        <p>${description}</p>
        <div class="agregar">
            <input id="cantidad" value="1" type="number">
            <button class="btn btn-outline-primary addCar">Agregar al carrito</button>
        </div>
    </div>
    `


    const addCar = document.querySelector('.addCar');

    addCar.addEventListener('click', () => {
        let cantidad = Number(document.getElementById('cantidad').value);

        let subTotal = cantidad * price;

        let carrito = {
            img: image,
            can: cantidad,
            pre: price,
            sub: subTotal
        }
        postData('car', carrito);
        
        // fetch('https://store--app.herokuapp.com/car', {
        //     method: 'POST',
        //     body: JSON.stringify(carrito),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // }).then(res => res.json())
        //     .then(() => {
        //         toastr.success('Producto agregado');
        //         setTimeout(() => {
        //             window.location.reload();
        //         }, "1000")
        //     });

    })

})


