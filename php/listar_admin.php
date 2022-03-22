<?php

    $conexion = mysqli_connect(
        'localhost',
        'root',
        '',
        'rincon_sabor'
    );

    session_start();

    $user = $_SESSION['usuario'];

    $query = "SELECT * FROM reservaciones";

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

    $json_string = json_encode($json);

    echo $json_string;

    mysqli_free_result($resultado);
    mysqli_close($conexion);

?>