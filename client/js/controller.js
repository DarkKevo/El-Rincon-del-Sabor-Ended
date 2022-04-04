//Controlador del Banner (Slider)

const slider_banner = document.querySelector('.banner-slider');
const derecha = document.querySelector('#boton-slide1');
const izquierda = document.querySelector('#boton-slide2');

function Deslizar_derecha() {
    slider_banner.style.marginLeft = '-100%';
}

function Deslizar_izquierda() {
    slider_banner.style.marginLeft = '-0%';
}

//listeners

derecha.addEventListener('click', Deslizar_derecha);
izquierda.addEventListener('click', Deslizar_izquierda);

//Fin de Controlador de Banner (SLider)

//Controlador del Inicio de Sesion (Slider)

const slider_sesion = document.querySelector('.login');
const derecha_sesion = document.querySelector('#menu-cliente');

const boton_login2 = document.querySelector('#boton-login2');

function Deslizar_derecha_sesion() {
    slider_sesion.style.marginLeft = '-100%';
}

function Normally() {
    slider_sesion.style.marginLeft = '0%';
}

derecha_sesion.addEventListener('click', Deslizar_derecha_sesion);

boton_login2.addEventListener('click', Normally);

//Fin de Controlador de Inicio de Sesion

//Controlador de Carrusel de Platillos

const carrusel = document.querySelector('.carrusel');
let carrusel_secciones = document.querySelectorAll('.item-c');
let carrusel_ultimo = carrusel_secciones[carrusel_secciones.length - 1];

const boton_izquierdo = document.querySelector('.flecha-iz');
const boton_derecho = document.querySelector('.flecha-de');

carrusel.insertAdjacentElement('afterbegin', carrusel_ultimo);

function mover_derecha() {
    let carrusel_primero = document.querySelectorAll('.item-c')[0];

    carrusel.style.marginLeft = '-205%';
    carrusel.style.transition = 'all 0.8s';

    setTimeout(function () {
        carrusel.style.transition = 'none';
        carrusel.insertAdjacentElement('beforeend', carrusel_primero);
        carrusel.style.marginLeft = '-102.9%';
    }, 800);
}

function mover_izquierda() {
    let carrusel_secciones = document.querySelectorAll('.item-c');

    let carrusel_ultimo = carrusel_secciones[carrusel_secciones.length - 1];

    carrusel.style.marginLeft = '-0.5%';
    carrusel.style.transition = 'all 0.8s';

    setTimeout(function () {
        carrusel.style.transition = 'none';
        carrusel.insertAdjacentElement('afterbegin', carrusel_ultimo);
        carrusel.style.marginLeft = '-102.4%';
    }, 800);
}

boton_derecho.addEventListener('click', mover_derecha);
boton_izquierdo.addEventListener('click', mover_izquierda);

//Fin de Controlador de Carrusel

//Controlador de Formularios

$(document).ready(function () {
    //Guardar Leads
    $('#form-contact').submit(function (e) {
        const PostData = {
            nombre: $('#nombre-b').val(),
            apellido: $('#apellido-b').val(),
            correo: $('#correo-b').val(),
            telefono: $('#telefono-b').val(),
        };

        $.post('php/addlead.php', PostData, function (response) {
            console.log(response);
            $('#form-contact').trigger('reset');
        });
        $('#form-contact').slideUp();
        $('#codigo').html(codigos_al_azar());
        setTimeout(function () {
            $('.aviso').slideDown();
        }, 500);
        e.preventDefault();
    });
    //Crear Usuarios Cliente
    $('#form-registrar-cliente').submit(function (e) {
        const PostData = {
            nombre: $('#nombre-cliente-r').val(),
            apellido: $('#apellido-cliente-r').val(),
            correo: $('#correo-cliente-r').val(),
            clave: $('#pass-cliente-r').val(),
        };

        $.post('php/addcliente.php', PostData, function (response) {
            console.log(response);
            console.log(PostData);
            alert(response);
            $('#form-registrar-cliente').trigger('reset');
        });

        e.preventDefault();
    });
    //Inicio de Sesion de Cliente
    $('#form-login-cliente').submit(function (e) {
        const PostData = {
            nombre: $('#nombre-cliente').val(),
            clave: $('#pass-cliente').val(),
        };

        $.post('php/verificar_cliente.php', PostData, function (response) {
            if (response == 'true') {
                $(location).attr('href', 'views/cliente.php');
            } else {
                alert('Usuario / Contraseña Invalidos');
            }
            $('#form-login-cliente').trigger('reset');
        });

        e.preventDefault();
    });
});

//Fin de Controlador de Formularios

//Controlador de Animación de los Formularios

$(document).ready(function () {
    $('#login-clientes-boton').click(function () {
        $('#form-login-cliente').slideUp();
        setTimeout(function () {
            $('#form-registrar-cliente').slideDown();
        }, 500);
    });

    $('#registrar-clientes-boton').click(function () {
        $('#form-registrar-cliente').slideUp();
        setTimeout(function () {
            $('#form-login-cliente').slideDown();
        }, 500);
    });
});

//Fin de Controladores de animación de Formularios

//Controlador de Scrolls

document.addEventListener('click', function (event) {
    if (!event.target.matches('.btn-scroll-view')) return;

    event.preventDefault();

    const element = document.getElementById(event.target.dataset.target);

    element.scrollIntoView({ behavior: 'smooth' });
});

//Fin de Controlador de Scrolls

//Controlador de Funcion Generadora de Codigos al Azar

function codigos_al_azar() {
    //string
    let codigo_de_descuento = '';
    //caracteres disponibles para la generacion de codigo
    let caracteres = '0123456789-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let largo = caracteres.length;
    //codigo de descuento de 6 caracteres
    for (let i = 0; i < 6; i++) {
        codigo_de_descuento += caracteres.charAt(Math.floor(Math.random() * largo)
        );
    }
    return codigo_de_descuento;
}
