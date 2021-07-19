"use strict";

const botonSubmitReporte = document.querySelector('#button-reporte-submit');
const inputRestaurante = document.querySelector('#duenno-lista-restaurantes');
const inputFechaCalendario = document.querySelector('#duenno-fecha-reporte-general');
const inputFechaAtajo = document.querySelector('#reporte-form-atajos');


const obtenerDatos = () => {
    console.log(`Restaurante: ${inputRestaurante.value}`);
    console.log(`Fecha: ${inputFechaCalendario.value}`);
    console.log(`Atajo: ${inputFechaAtajo.value}`);
};
const validar = () => {
    let error = false;
    if (inputRestaurante.value !== "restaurantePlaceholder") {
        inputRestaurante.classList.remove('error-box');
    } else {
        error = true;
        inputRestaurante.classList.add('error-box');
    }
    if (inputFechaCalendario.value == '') {
        error = true;
        inputFechaCalendario.classList.add('error-box');
    } else {
        inputFechaCalendario.classList.remove('error-box');
    }
    if (inputFechaAtajo.value == '') {
        error = true;
        inputFechaAtajo.classList.add('error-box');
    } else {
        inputFechaAtajo.classList.remove('error-box');
    }
    console.log(error);
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Datos incompletos!',
            text: 'Por favor revise los campos resaltados'
        });
    } else {
        obtenerDatos();
    }

};

botonSubmitReporte.addEventListener('click', validar);

// return json data from any file path (asynchronous)
/*function getJSON(path) {
    return fetch(path).then(response => response.json());
}*/