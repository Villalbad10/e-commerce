import { getData } from "../helpers/getData.js";
const submit = document.querySelector('#form')
const carNumber = document.querySelector('.car-number');


document.addEventListener('DOMContentLoaded', async () => {
    const carrito = await getData('car');

    carNumber.textContent = await carrito.length;
})

submit.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const tarjeta = document.getElementById('tarjeta').value;
    const fecha = document.getElementById('fecha').value;
    const cvv = document.getElementById('cvv').value;
    let carrito = await getData('car');

    const datosPago = {
        nom: nombre,
        corr: correo,
        tarj: tarjeta,
        fech: fecha,
        cv: cvv,
        comp: carrito
    }
    sessionStorage.setItem('pago', datosPago)
    toastr.success('Pago Aceptado');
    setTimeout(() => {
        submit.reset();
        carNumber.textContent = 0;
    }, "1000")
})