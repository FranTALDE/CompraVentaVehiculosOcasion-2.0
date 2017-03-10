<?php
    // Va a devolver una respuesta JSON que no se debe cachear
    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "concesionario";

    $oEmpleado = json_decode($_POST['datos']);

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if($conn->connect_error){
        die("Conexión fallida: ".$conn->connect_error);
    }

    $sql = "INSERT INTO persona (ID_PERSONA,TIPO_PERSONA,TIPO_EMPLEADO) VALUES('$oEmpleado->idEmpleado','Empleado','$oEmpleado->tipoEmpleado')";

    if($conn->query($sql) === TRUE){
        $resultado = "Alta de empleado correcta";
        $error = FALSE;
    } else {
        $resultado = "Error: ".$sql." ".$conn->error;
        $error = TRUE;
    }

    // Creo un "objeto" php creando un array asociativo
    $objeto_salida = array("mensaje"=>"Alta Empleado","resultado"=>$resultado,"accion"=>100,"error"=>$error);

    $json_salida = json_encode($objeto_salida);

    echo $json_salida;

    $conn->close();
?>