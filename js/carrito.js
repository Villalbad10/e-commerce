import { deleteData } from "../helpers/deleteData.js";
import { getData } from "../helpers/getData.js";


document.addEventListener('DOMContentLoaded', async () => {
    const compra = document.querySelector('.compra');
    const carNumber = document.querySelector('.car-number');
    const carrito = await getData('car');

    carNumber.textContent = await carrito.length;
    let compras = "";

    carrito.forEach(element => {
        const { img, can, pre, sub, id } = element;
        compras += `
        <div class="card mb-3">
        <div class="row g-0 compras">
            <div class="col-md-3">
                <img width="150px" src="${img}" class="img-fluid rounded-start"
                    alt="...">
            </div>
            <div class="col-md-3">
                <div class="card-body">
                    <h5 class="card-title">${can}</h5>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card-body">
                    <h5 class="card-title">$${pre}</h5>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card-body">
                    <h5 class="card-title">$${sub}</h5>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card-body">
                    <button id="${id}" class="btn btn-outline-danger eliminar">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
        `
    });

    compra.insertAdjacentHTML("beforeend", compras);


    let total = "";
    let res = 0;
    carrito.forEach(element => {
        const { sub } = element;
        total = `
        <div class="card mb-3">
        <div class="row g-0 compras">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card-body">
                    <h2 class="card-title"><strong>TOTAL</strong></h2>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card-body">         
                    <h2 class="card-title">$${(res = sub + res).toFixed(2)}</h2>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card-body">
                    <button class="btn btn-success pago">Pagar</button>
                </div>
            </div>
        </div>
    </div>
        `
    });

    compra.insertAdjacentHTML('beforeend', total)
})

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('eliminar')) {

        deleteData('car', target.id)
        // fetch(`https://store--app.herokuapp.com/car/${target.id}`, {
        //     method: "DELETE",
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // }).then(() => {
        //     console.log('Elemento eliminado')
        //     window.location.reload();
        // })
    }
})

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('pago')) {
        window.location.href = './infoPago.html';
    }
})