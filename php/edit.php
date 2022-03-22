<?php

    $conexion = mysqli_connect(
        'localhost',
        'root',
        '',
        'rincon_sabor'
    );

    if (isset($_POST['fecha'])) {

        $fecha = $_POST['fecha'];
        $personas = $_POST['personas'];
        $id = $_POST['id'];

        $query = "UPDATE `reservaciones` SET `Numero de Personas` = '$personas', `Fecha_Hora` = '$fecha' WHERE `reservaciones`.`id` = '$id'; ";

        $resultado = mysqli_query($conexion, $query); 

        if (!$resultado) {
            die('Query Failed');
        } 

        echo 'Reservacion Editada';
        
        mysqli_close($conexion);

    }

?>