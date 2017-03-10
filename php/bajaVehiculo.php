<?php
    // Va a devolver una respuesta JSON que no se debe cachear
    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "concesionario";

    $matricula = $_POST['matricula'];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if($conn->connect_error){
        die("Conexión fallida: ".$conn->connect_error);
    }

    $sql = "SELECT MATRICULA FROM transaccion WHERE MATRICULA = '".$matricula."'";

    if($conn->query($sql)->num_rows>0){
        $resultado = "Error: ".$sql." ".$conn->error;
        $error = TRUE;
    }else{
        $sql = "DELETE FROM extras_vehiculo WHERE MATRICULA = '".$matricula."'";
        $conn->query($sql);

        $sql = "DELETE FROM vehiculo WHERE MATRICULA = '".$matricula."'";

        if($conn->query($sql) === TRUE){
            $resultado = "Baja de vehículo correcta";
            $error = FALSE;
        } else {
            $resultado = "Error: ".$sql." ".$conn->error;
            $error = TRUE;
        }
    }

    // Creo un "objeto" php creando un array asociativo
    $objeto_salida = array("mensaje"=>"Baja Vehículo","resultado"=>$resultado,"accion"=>200,"error"=>$error);

    $json_salida = json_encode($objeto_salida);

    echo $json_salida;

    $conn->close();
?>