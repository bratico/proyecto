"use strict";
const botonIngresar = document.querySelector('#btn-registro');
const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputDatepicker = document.querySelector('#txt-datepicker');
const inputCorreo = document.querySelector('#txt-correo');
const inputTipoID = document.querySelector("#ids");
const inputNumID = document.querySelector("#txt-id");
const inputProvincia = document.querySelector("#provincia");
const inputNombreRestComercial = document.querySelector("#txt-nombre-comercial-restaurante");
const inputNombreRestComun = document.querySelector("#txt-nombre-comun-restaurante");
const inputNumIDJuridica = document.querySelector("#cedula-juridica");
const inputContrasenna = document.querySelector("#txt-contrasenna");

const obtenerDatos = () => {
    console.log(inputNombre.value);
    console.log(inputApellido.value);
    console.log(inputDatepicker.value);
    console.log(inputCorreo.value);
    console.log(inputTipoID.value);
    console.log(inputNumID.value);
    console.log(inputProvincia.value);
    console.log(inputNombreRestComercial.value);
    console.log(inputNombreRestComun.value);
    console.log(inputNumIDJuridica.value);
    console.log(inputContrasenna.value);

};
const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error-box');
    } else {
        inputNombre.classList.remove('error-box');
    };
    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('error-box');
    } else {
        inputApellido.classList.remove('error-box');
    };
    if (inputDatepicker.value == '') {
        error = true;
        inputDatepicker.classList.add('error-box');
    } else {
        inputDatepicker.classList.remove('error-box');
    };
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error-box');
    } else {
        inputCorreo.classList.remove('error-box');
    };
    if (inputTipoID.value == 'tipo-id-placeholder') {
        error = true;
        inputTipoID.classList.add('error-box');
    } else {
        inputTipoID.classList.remove('error-box');
    };
    if (inputNumID.value == '') {
        error = true;
        inputNumID.classList.add('error-box');
    } else {
        inputNumID.classList.remove('error-box');
    };
    if (inputProvincia.value == 'provincia-placeholder') {
        error = true;
        inputProvincia.classList.add('error-box');
    } else {
        inputProvincia.classList.remove('error-box');
    };
    if (inputNombreRestComercial.value == '') {
        error = true;
        inputNombreRestComercial.classList.add('error-box');
    } else {
        inputNombreRestComercial.classList.remove('error-box');
    };
    if (inputNombreRestComun.value == '') {
        error = true;
        inputNombreRestComun.classList.add('error-box');
    } else {
        inputNombreRestComun.classList.remove('error-box');
    };
    if (inputNumIDJuridica.value == '') {
        error = true;
        inputNumIDJuridica.classList.add('error-box');
    } else {
        inputNumIDJuridica.classList.remove('error-box');
    };
    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error-box');
    } else {
        inputContrasenna.classList.remove('error-box');
    };

    console.log(error);
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Registro incorrecto',
            text: 'Inserte los datos nuevamente'
        });
    } else {
        obtenerDatos();
    }

};



botonIngresar.addEventListener('click', validar /*obtenerDatos*/ );