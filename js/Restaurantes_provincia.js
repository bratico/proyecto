$(function() {
    $("#fileupload").change(function() {
        if (typeof(FileReader) != "undefined") {
            var dvPreview = $("#dvPreview");
            dvPreview.html("");
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
            $($(this)[0].files).each(function() {
                var file = $(this);
                if (regex.test(file[0].name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var img = $("<img />");
                        img.attr("style", "height:100px;width: 100px");
                        img.attr("src", e.target.result);
                        dvPreview.append(img);
                    }
                    reader.readAsDataURL(file[0]);
                } else {
                    alert(file[0].name + " is not a valid image file.");
                    dvPreview.html("");
                    return false;
                }
            });
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    });
});
'use strict';
document.getElementById('output').innerHTML = location.search;
$(".chosen-select").chosen();
const botonRegistrar = document.querySelector('#button4');
const inputNombre = document.querySelector('txt-nombre-restaurante');
const inputNombrecomercial = document.querySelector('txt-nombre-comercial');
const inputCedulajuridica = document.querySelector('#cedula-juridica');
const inputDescripcion = document.querySelector('#descripcion-restaurante');
const inputNumerocontacto2 = document.querySelector('#numero-contacto-1');
const inputNumerocontacto1 = document.querySelector('#numero-contacto-2');
const inputCorreo = document.querySelector('#correo-electronico');
const inputAforo = document.querySelector('#aforo');
const inputNombreencargado = document.querySelector('#Nombre-encargado');
const inputProvincia = document.querySelector('#provincia');
const inputCanton = document.querySelector('#canton');
const inputDistrito = document.querySelector('#distrito');
const inputMonday1 = document.querySelector('#monday1');
const inputMonday2 = document.querySelector('#monday2');
const inputTuesday1 = document.querySelector('#tuesday1');
const inputTuesday2 = document.querySelector('#tuesday2');
const inputWednesday1 = document.querySelector('#wednesday1');
const inputWednesday2 = document.querySelector('#wednesday2');
const inputThrusday1 = document.querySelector('#thursday1');
const inputThrusday2 = document.querySelector('#thursday2');
const inputFriday1 = document.querySelector('#friday1');
const inputFriday2 = document.querySelector('#friday2');
const inputSaturday1 = document.querySelector('#saturday1');
const inputSaturday2 = document.querySelector('#saturday2');
const inputSunday1 = document.querySelector('#sunday1');
const inputSunday2 = document.querySelector('#sunday2');
const botonVer = document.querySelector('#btn-ver');

const obtenerDatos = () => {
    console.log(inputCorreo.value);
    console.log(inputNombrecomercial.value);
    console.log(inputNombre.value);
    console.log(inputCedulajuridica.value);
    console.log(inputDescripcion.value);
    console.log(inputNumerocontacto2.value);
    console.log(inputNumerocontacto1.value);
    console.log(inputAforo.value);
    console.log(inputNombreencargado.value);
    console.log(inputProvincia.value);
    console.log(inputCanton.value);
    console.log(inputDistrito.value);
    console.log(inputMonday1.value);
    console.log(inputMonday2.value);
    console.log(inputTuesday1.value);
    console.log(inputTuesday2.value);
    console.log(inputWednesday1.value);
    console.log(inputWednesday2.value);
    console.log(inputThrusday1.value);
    console.log(inputThrusday2.value);
    console.log(inputFriday1.value);
    console.log(inputFriday2.value);
    console.log(inputSaturday1.value);
    console.log(inputSaturday2.value);
    console.log(inputSunday1.value);
    console.log(inputSunday2.value);
};
const validar = () => {
    let error = false;
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputNombrecomercial.value == '') {
        error = true;
        inputNombrecomercial.classList.add('error');
    } else {
        inputNombrecomercial.classList.remove('error');
    }
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }
    if (inputCedulajuridica.value == '') {
        error = true;
        inputCedulajuridica.classList.add('error');
    } else {
        inputCedulajuridica.classList.remove('error');
    }
    if (inputDescripcion.value == '') {
        error = true;
        inputDescripcion.classList.add('error');
    } else {
        inputDescripcion.classList.remove('error');
    }
    if (inputNumerocontacto2.value == '') {
        error = true;
        inputNumerocontacto2.classList.add('error');
    } else {
        inputNumerocontacto2.classList.remove('error');
    }
    if (inputNumerocontacto1.value == '') {
        error = true;
        inputNumerocontacto1.classList.add('error');
    } else {
        inputNumerocontacto1.classList.remove('error');
    }
    if (inputAforo.value == '') {
        error = true;
        inputAforo.classList.add('error');
    } else {
        inputAforo.classList.remove('error');
    }
    if (inputNombreencargado == '') {
        error = true;
        inputNombreencargado.classList.add('error');
    } else {
        inputNombreencargado.classList.remove('error');
    }
    if (inputProvincia.value == '') {
        error = true;
        inputProvincia.classList.add('error');
    } else {
        inputProvincia.classList.remove('error');
    }
    if (inputCanton.value == '') {
        error = true;
        inputCanton.classList.add('error');
    } else {
        inputCanton.classList.remove('error');
    }
    if (inputDistrito.value == '') {
        error = true;
        inputDistrito.classList.add('error');
    } else {
        inputDistrito.classList.remove('error');
    }
    if (inputMonday1.value == '') {
        error = true;
        inputMonday1.classList.add('error');
    } else {
        inputMonday1.classList.remove('error');
    }
    if (inputMonday2.value == '') {
        error = true;
        inputMonday2.classList.add('error');
    } else {
        inputMonday2.classList.remove('error');
    }
    if (inputTuesday1.value == '') {
        error = true;
        inputTuesday1.classList.add('error');
    } else {
        inputTuesday1.classList.remove('error');
    }
    if (inputTuesday2.value == '') {
        error = true;
        inputTuesday2.classList.add('error');
    } else {
        inputTuesday2.classList.remove('error');
    }
    if (inputWednesday1.value == '') {
        error = true;
        inputWednesday1.classList.add('error');
    } else {
        inputWednesday1.classList.remove('error');

    }
    if (inputWednesday2.value == '') {
        error = true;
        inputWednesday2.classList.add('error');
    } else {
        inputWednesday2.classList.remove('error');
    }
    if (inputThrusday1.value == '') {
        error = true;
        inputThrusday1.classList.add('error');
    } else {
        inputThrusday1.classList.remove('error');
    }
    if (inputThrusday2.value == '') {
        error = true;
        inputThrusday2.classList.add('error');
    } else {
        inputThrusday2.classList.remove('error');
    }
    if (inputFriday1.value == '') {
        error = true;
        inputFriday1.classList.add('error');
    } else {
        inputFriday1.classList.remove('error');
    }
    if (inputFriday2.value == '') {
        error = true;
        inputFriday2.classList.add('error');
    } else {
        inputFriday2.classList.remove('error');
    }
    if (inputSaturday1.value == '') {
        error = true;
        inputSaturday1.classList.add('error');
    } else {
        inputSaturday1.classList.remove('error');
    }
    if (inputSaturday2.value == '') {
        error = true;
        inputSaturday2.classList.add('error');
    } else {
        inputSaturday2.classList.remove('error');
    }
    if (inputSunday1.value == '') {
        error = true;
        inputSunday1.classList.add('error');
    } else {
        inputSunday1.classList.remove('error');
    }
    if (inputSunday2.value == '') {
        error = true;
        inputSunday2.classList.add('error');
    } else {
        inputSunday2.classList.remove('error');
    }



    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Inicio de sesión incorrecto',
            text: 'Por favor revise los campos resaltados'
        });
    } else {
        obtenerDatos();
    }

};

const verOcultarContrasenna = () => {
    if (inputContrasenna.type == 'password') {
        inputContrasenna.type = 'text';
    } else {
        inputContrasenna.type = 'password';
    }
};


botonRegistrar.addEventListener('click', validar);
botonVer.addEventListener('click', verOcultarContrasenna);