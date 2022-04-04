$(document).ready(function () {
    Listar_Reservaciones();
    //Crear Reservaciones
    $('#form-reservacion').submit(function (e) {
        const PostData = {
            fecha: $('#fecha').val(),
            personas: $('#personas').val(),
        };
        console.log(PostData);
        $.post('../php/addreservacion.php', PostData, function (response) {
            Listar_Reservaciones();
            console.log(response);
            $('#form-reservacion').trigger('reset');
            $('.form-container').slideUp();
            setTimeout(function () {
                $('.verified').slideDown();
            }, 600);
            setTimeout(function () {
                $('.verified').slideUp();
            }, 2000);
            setTimeout(function () {
                $('.form-container').slideDown();
            }, 2500);
        });
        e.preventDefault();
    });

    //Eliminar Reservaciones
    $(document).on('click', '.delete', function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('r-id');
        $.post('../php/eliminar_reservacion.php', { id: id }, function (response) {
            console.log(response);
            Listar_Reservaciones();
        });
    });

    function Listar_Reservaciones() {
        $.ajax({
            type: 'GET',
            url: '../php/listar_reservaciones.php',
            success: function (response) {
                let reservaciones = JSON.parse(response);
                let template = '';
                reservaciones.forEach((reservacion) => {
                    template += `
                        <tr r-id = "${reservacion.id}">
                            <td>${reservacion.id}</td>
                            <td>${reservacion.usuario}</td>
                            <td>${reservacion.fecha}</td>
                            <td>${reservacion.personas}</td>
                            <td>
                                <i class="delete fa-solid fa-circle-xmark" id="erase"></i>
                            </td>
                        </tr>
                    `;
                });
                $('#reservaciones-tabla').html(template);
            },
        });
    }
});
