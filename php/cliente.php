<?php

    session_start();
    error_reporting(0);
    
    $active = $_SESSION['usuario'];
    if ($active == null || $active == '') {
        header("location:error.html");
    }

?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../styles/cliente.css" />
        <script src="https://kit.fontawesome.com/e11594cd9f.js" crossorigin="anonymous"></script>
        <title>Your Account</title>
    </head>
    <body>
        <header>
            <nav>
                <img src="../img/logo_proyecto.png" />
                <h2>Bienvenido <?php echo  $_SESSION['usuario'] ?></h2>
                <a href="log_out.php">Log out</a>
            </nav>
        </header>
        <section class="cliente-content">
            <div class="form-container">
                <h2>Reserva tu Mesa!</h2>
                <form id="form-reservacion">
                    <label for="fecha">Fecha:</label>
                    <input type="datetime-local" id="fecha" required/>
                    <label for="personas">Nro Personas:</label>
                    <input type="number" id="personas" required/>
                    <button type="submit" class="reserve">Reservar</button>
                </form>
            </div>
            <div class="verified">
                <h2>Reservacion Realizada</h2>
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="tabla-container">
                <table class="tabla-cliente">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Usuario</th>
                            <th>Fecha</th>
                            <th>Nro Personas</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="reservaciones-tabla">

                    </tbody>
                </table>
            </div>
        </section>
        <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"
        ></script>
        <script src="../js/controller-cliente.js"></script>
    </body>
</html>
