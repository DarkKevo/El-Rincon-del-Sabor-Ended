<?php

include('database.php');

if (isset($_POST['fecha'])) {

    session_start();

    $nombre = $_SESSION['usuario'];
    $fecha = $_POST['fecha'];
    $personas = $_POST['personas'];

    $query = "INSERT INTO `rincon_sabor`.`reservaciones` (`Numero de Personas`, `Fecha_Hora`, `usuario`, `id`) VALUES ('$personas', '$fecha', '$nombre', '');";

    $resultado = mysqli_query($conexion, $query);

    if (!$resultado) {
        die('Query Failed');
    }

    echo 'Reservacion Agregada';
}

?>