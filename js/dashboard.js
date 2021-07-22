'use strict';

const spanNombre = document.querySelector('#txt-usuario')
let usuarioConectado = obtenerUsuarioConectado();



spanNombre.innerText = usuarioConectado.nombre;