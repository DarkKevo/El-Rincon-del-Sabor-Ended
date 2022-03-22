<?php

    $local = 'localhost';
    $user = 'root';

    $conexion = new mysqli($local, $user, '');

    if ($conexion -> connect_error) {
        die('Failed Connection');
    }

    $verificar = "SHOW DATABASES LIKE 'rincon_sabor'";
    $resultado = mysqli_query($conexion, $verificar);
    $filas = mysqli_num_rows($resultado);

    if ($filas < 1) {
        $create = 'CREATE DATABASE rincon_sabor';

    if ($conexion -> query($create) === TRUE) {
        $create = "CREATE TABLE `rincon_sabor`.`leads` ( `id` INT NOT NULL AUTO_INCREMENT ,  `nombre` VARCHAR(100) NOT NULL ,  `apellido` VARCHAR(100) NOT NULL ,  `correo` VARCHAR(150) NOT NULL ,  `telefono` BIGINT NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;
        ";

        $create2 = "CREATE TABLE `rincon_sabor`.`usuarios_data` ( `nombre` VARCHAR(100) NOT NULL ,  `apellido` VARCHAR(100) NOT NULL ,  `correo` VARCHAR(100) NOT NULL ,  `clave` VARCHAR(150) NOT NULL ,  `id` INT NOT NULL AUTO_INCREMENT ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;";

        $create3 = "CREATE TABLE `rincon_sabor`.`admins_data` ( `nombre` VARCHAR(100) NOT NULL ,  `correo` VARCHAR(100) NOT NULL ,  `clave` VARCHAR(150) NOT NULL ,  `id` INT NOT NULL AUTO_INCREMENT ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;";

        $create4 = "CREATE TABLE `rincon_sabor`.`reservaciones` ( `Numero de Personas` INT NOT NULL , `Fecha_Hora` VARCHAR(100) NOT NULL , `usuario` VARCHAR(100) NOT NULL , `id` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`id`)) ENGINE = InnoDB;";

        if ($conexion -> query($create) != TRUE) {
            echo 'Failed Creation ' .$conexion -> error;
        }

        if ($conexion -> query($create2) != TRUE) {
            echo 'Failed Creation ' .$conexion -> error;
        }

        if ($conexion -> query($create3) != TRUE) {
            echo 'Failed Creation ' .$conexion -> error;
        }

        if ($conexion -> query($create4) != TRUE) {
            echo 'Failed Creation ' .$conexion -> error;
        }

    } else {
        echo 'I have a Problem Here...' .$conexion -> error;
    }
    }

?>