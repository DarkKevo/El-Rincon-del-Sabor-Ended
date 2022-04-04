<?php

    $conexion = mysqli_connect(
        'localhost',
        'root',
        '',
        'rincon_sabor'
    );

    if (isset($_POST['id'])){
        $id = $_POST['id'];

        $query = "DELETE FROM reservaciones WHERE id = '$id'";

        $resultado = mysqli_query($conexion, $query); 

        if (!$resultado) {
            die('Query Failed');
        } 

        echo 'Reservacion Eliminada';

        mysqli_close($conexion);
    }

?>