<?php

    include('database.php');

    if (isset($_POST['nombre'])){

        $conexion = mysqli_connect(
            'localhost',
            'root',
            '',
            'rincon_sabor'
        );

        $nombre = $_POST['nombre'];
        $clave = $_POST['clave'];

        $consulta = "SELECT * FROM admins_data WHERE nombre = '$nombre' and clave = '$clave'";

        $resultado = mysqli_query($conexion, $consulta);

        $filas = mysqli_num_rows($resultado);

        if ($filas > 0) {
            session_start();
            $_SESSION['usuario'] = $nombre;
            echo 'true';
        } else {
            echo 'false';
        }

        mysqli_free_result($resultado);
        mysqli_close($conexion);
    }
    