'use strict';

/*
Estados
1. Activo
2. Inactivo
3. Suspendido
4. Pendiente de cambio de contraseña
5. Pendiente de aprobación del administrador (solo para los dueños de restaurantes)

*/

/*
Roles
1. Administrador
2. Dueño de restaurantes
3. Encargado de un restaurante
4. Cliente
*/

let listaUsuarios = [{
    nombre: 'Jazmin Alfaro',
    correo: 'jazz@gmail.com',
    nacimiento: '12/11/1998',
    contrasenna: '12345',
    estado: 1,
    rol: 1
}, {
    nombre: 'Paulina Solorzano',
    correo: 'pau@gmail.com',
    nacimiento: '01/01/2000',
    contrasenna: 'abcde',
    estado: 2,
    rol: 2
}, {
    nombre: 'Guilherme',
    correo: 'gui@gmail.com',
    nacimiento: '11/23/1990',
    contrasenna: 'abc123',
    estado: 4,
    rol: 4
}];

const validarCredenciales = (correo, contrasenna) => {
    let verificado = false;

    listaUsuarios.forEach(objUsuario => {
        if (correo == objUsuario.correo) {
            if ((contrasenna == objUsuario.contrasenna)) {
                verificado = true;
                switch (objUsuario.estado) {
                    case 1:
                        Swal.fire({
                            icon: 'success',
                            title: 'Inicio de sesión correcto'
                        }).then(() => {
                            localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));
                            window.location.href = 'dashboard.html';
                        });
                        break;

                    case 2:
                        Swal.fire({
                            icon: 'error',
                            title: 'El usuario se encuentra inactivo',
                            text: 'Por favor contacte a la administración del sitio'
                        }).then(() => {
                            window.location.href = 'index.html';
                        });
                        break;

                    case 4:
                        Swal.fire({
                            icon: 'warning',
                            title: 'Debe modificar la contraseña'
                        }).then(() => {
                            window.location.href = 'cambio-contrasenna.html';
                        });
                        break;
                }
            }
        }
    });

    if (verificado == false) {
        // Else para correo que no existe
        Swal.fire({
            icon: 'warning',
            title: 'Usuario o contraseña incorrectos',
            text: 'Verifique sus credenciales'
        });

    }

};

const obtenerUsuarioConectado = () => {
    let usuarioConectado = localStorage.getItem('usuarioConectado');

    if (usuarioConectado) {
        usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Debe haber iniciado sesión primero'
        }).then(() => {
            window.location.href = 'index.html';
        });
    }
    return usuarioConectado;
};