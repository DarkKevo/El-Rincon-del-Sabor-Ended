<?php

include('database.php');

if (isset($_POST['serial'])) {
        $serial = $_POST['serial'];

        if ($serial == "adm123") {
            $nombre = $_POST['nombre'];
            $correo = $_POST['correo'];
            $clave = $_POST['clave'];

            $query = "INSERT INTO `rincon_sabor`.`admins_data` (`nombre`, `correo`, `clave`) VALUES ('$nombre', '$correo', '$clave');";

            $resultado = mysqli_query($conexion, $query);

            if (!$resultado) {
                die('Query Failed');
            }
            echo 'Admin Agregado';
        } else {
            echo "Serial de Administrador Invalido";
        }

    }

?>