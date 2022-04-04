$(document).ready(function () {
    Listar_Reservaciones();

    //Eliminar Reservaciones
    $(document).on('click', '.delete', function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('r-id');
        $.post(
            '../php/eliminar_reservacion.php',
            { id: id },
            function (response) {
                console.log(response);
                Listar_Reservaciones();
            }
        );
    });

    //Editar Reservaciones
    $(document).on('click', '.edit', function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('r-id');
        $.post(
            '../php/single-reservacion.php',
            { id: id },
            function (response) {
                const reservacion = JSON.parse(response);
                $('#fecha').val(reservacion.fecha);
                $('#personas').val(reservacion.personas);
                $('#id_edit').val(reservacion.id);
            }
        );
    });

    $('#form-reservacion').submit(function (e) {
        const PostData = {
            fecha: $('#fecha').val(),
            personas: $('#personas').val(),
            id: $('#id_edit').val(),
        };
        console.log(PostData);
        $.post('../php/edit.php', PostData, function (response) {
            Listar_Reservaciones();
            console.log(response);
            $('#form-reservacion').trigger('reset');
        });
        e.preventDefault();
    });

    function Listar_Reservaciones() {
        $.ajax({
            type: 'GET',
            url: '../php/listar_admin.php',
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
                                <i class="edit fa-solid fa-pen-to-square"></i>
                                <i class="delete fa-solid fa-circle-xmark" id="erase"></i>
                            </td>
                        </tr>
                    `;
                });
                $('#reservaciones-tabla').html(template);
            },
        });
    }

    $(document).on('click', '.edit', function () {
        $('.verified').slideUp();
        setTimeout(function () {
            $('.form-container').slideDown();
        }, 500);
    });

    $(document).on('click', '.edit-reserve', function () {
        $('.form-container').slideUp();
        setTimeout(function () {
            $('.verified').slideDown();
        }, 500);
    });

});
