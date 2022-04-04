<?php

    session_start();
    error_reporting(0);

    $active = $_SESSION['usuario'];
    if ($active == null || $active == '') {
        echo 'Not Autorized';
        die();
    }
    
    session_destroy();
    header("Location:../index.html");

?>