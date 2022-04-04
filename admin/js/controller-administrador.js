$(document).ready(function () {
    //Crear Usuarios Admin
    $('#form-register-chef').submit(function (e) {
        const PostData = {
            nombre: $('#nombre-chef-r').val(),
            correo: $('#correo-chef-r').val(),
            clave: $('#clave-chef-r').val(),
            serial: $('#serial-chef-r').val(),
        };

        $.post('php/addadmin.php', PostData, function (response) {
            console.log(response);
            alert(response);
            $('#form-register-chef').trigger('reset');
        });

        e.preventDefault();
    });

    //Inicio de Sesion de Admin
    $('#form-login-chef').submit(function (e) {
        const PostData = {
            nombre: $('#nombre-chef').val(),
            clave: $('#pass-chef').val(),
        };

        $.post('php/verificar_adm.php', PostData, function (response) {
            if (response == 'true') {
                $(location).attr('href', 'views/administrador.php');
            } else {
                alert('Usuario / Contraseña Invalidos');
            }
            $('#form-login-chef').trigger('reset');
        });

        e.preventDefault();
    });

    //animacion
    $('#registrar-chef-boton').click(function () {
        $('#form-login-chef').slideUp();
        setTimeout(function () {
            $('#form-register-chef').slideDown();
        }, 500);
    });

    $('#login-chef-boton').click(function () {
        $('#form-register-chef').slideUp();
        setTimeout(function () {
            $('#form-login-chef').slideDown();
        }, 500);
    });
});

const slider_sesion = document.querySelector('.login');
const izquierda_sesion = document.querySelector('#menu-chef');
const boton_login1 = document.querySelector('#boton-login');

function Deslizar_izquierda_sesion() {
    slider_sesion.style.marginLeft = '-100%';
}
function Normally() {
    slider_sesion.style.marginLeft = '0%';
}

izquierda_sesion.addEventListener('click', Deslizar_izquierda_sesion);

boton_login1.addEventListener('click', Normally);
