<?php

    $conexion = mysqli_connect(
        'localhost',
        'root',
        '',
        'rincon_sabor'
    );


    $id = $_POST['id'];
    $query = "SELECT * FROM reservaciones WHERE id = '$id'";

    $resultado = mysqli_query($conexion, $query);

    if (!$resultado) {
        die('Query Failed');
    }

    $json = array();

    while($row = mysqli_fetch_array($resultado)) {
        $json[] = array(
            'id' => $row['id'],
            'usuario' => $row['usuario'],
            'fecha' => $row['Fecha_Hora'],
            'personas' => $row['Numero de Personas']
        );
    }

    $json_string = json_encode($json[0]);

    echo $json_string;

    mysqli_free_result($resultado);
    mysqli_close($conexion);

?>