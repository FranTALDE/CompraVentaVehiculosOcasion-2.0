<?php
    // Va a devolver una respuesta JSON que no se debe cachear
    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "concesionario";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if($conn->connect_error){
        die("Conexión fallida: ".$conn->connect_error);
    }
    
    $sql = "SELECT MATRICULA FROM vehiculo";
    
    if($resBD=$conn->query($sql)){
        while($valor=$resBD->fetch_assoc()){
            $resultado[]=$valor;
        }
    }
    
    echo json_encode($resultado);
    
    $conn->close();
?>