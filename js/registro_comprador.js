'use strict';

const botonIngresar = document.querySelector('#btn-registro');
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputDatepicker = document.querySelector('#txt-datepicker');

const obtenerDatos = () => {
    console.log(inputNombre.value);
    console.log(inputApellido.value);
    console.log(inputCorreo.value);
    console.log(inputDatepicker.value);

};
const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error-box');
    } else {
        inputNombre.classList.remove('error-box');
    }
    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('error-box');
    } else {
        inputApellido.classList.remove('error-box');
    }
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error-box');
    } else {
        inputCorreo.classList.remove('error-box');
    }
    if (inputDatepicker.value == '') {
        error = true;
        inputDatepicker.classList.add('error-box');
    } else {
        inputDatepicker.classList.remove('error-box');
    }
    console.log(error);
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Registro incorrecto',
            text: 'Por favor ingresa nuevamente los datos'
        });
    } else {
        obtenerDatos();
    }

};

botonIngresar.addEventListener('click', validar);