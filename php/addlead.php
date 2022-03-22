<?php

include('database.php');

if (isset($_POST['nombre'])) {

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];

    $query = "INSERT INTO `rincon_sabor`.`leads` (`id`, `nombre`, `apellido`, `correo`, `telefono`) VALUES ('', '$nombre', '$apellido', '$correo', '$telefono');";

    $resultado = mysqli_query($conexion, $query);

    if (!$resultado) {
        die('Query Failed');
    }

    echo 'Lead Añadida';
}

?>