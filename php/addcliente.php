<?php

include('database.php');

if (isset($_POST['nombre'])) {

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $clave = $_POST['clave'];

    $query = "INSERT INTO `rincon_sabor`.`usuarios_data` (`nombre`, `apellido`, `correo`, `clave`, `id`) VALUES ('$nombre', '$apellido', '$correo', '$clave', '');";

    $resultado = mysqli_query($conexion, $query);

    if (!$resultado) {
        die('Query Failed');
    }

    echo 'Usuario Agregado';
}

?>