'use strict';

const botonIngresar = document.querySelector('#btn-registro');
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputDatepicker = document.querySelector('#txt-datepicker');
const botonVer = document.querySelector('#btn-ver');

const obtenerDatos = () => {
    console.log(inputCorreo.value);
    console.log(inputNombre.value);
    console.log(inputApellido.value);
    console.log(inputDatepicker.value);

};
const validar = () => {
    let error = false;
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }
    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('error');
    } else {
        inputApellido.classList.remove('error');
    }
    if (inputdatepicker.value == '') {
        error = true;
        inputdatepicker.classList.add('error');
    } else {
        inputdatepicker.classList.remove('error');
    }
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'REgistro incorrecto',
            text: 'Por favor revise los campos resaltados'
        });
    } else {
        obtenerDatos();
    }

};

botonIngresar.addEventListener('click', validar);
