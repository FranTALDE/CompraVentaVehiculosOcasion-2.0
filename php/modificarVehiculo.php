<?php
    // Va a devolver una respuesta JSON que no se debe cachear
    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "concesionario";

    $oVehiculo = json_decode($_POST['datos']);

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if($conn->connect_error){
        die("Conexión fallida: ".$conn->connect_error);
    }

    $sql = "UPDATE vehiculo set PRECIO='$oVehiculo->precio',ID_CATEGORIA='$oVehiculo->categoria' where MATRICULA='$oVehiculo->matricula'";
	$conn->query($sql);
	
	$sql = "DELETE FROM extras_vehiculo WHERE matricula = '$oVehiculo->matricula'";

    if($conn->query($sql) === TRUE){
		foreach ($oVehiculo->extras as $valor){    
            $sql = "INSERT INTO extras_vehiculo (id_extra,matricula) VALUES('$valor','$oVehiculo->matricula')";
			if($conn->query($sql) === TRUE){
				$resultado = "Modificación de vehículo correcta";
				$error = FALSE;
			} else {
				$resultado = "Error: ".$sql." ".$conn->error;
				$error = TRUE;
			}
		}
    } else {
        $resultado = "Error: ".$sql." ".$conn->error;
        $error = TRUE;
    }

    // Creo un "objeto" php creando un array asociativo
    $objeto_salida = array("mensaje"=>"Modificación Vehiculo","resultado"=>$resultado,"accion"=>300,"error"=>$error);

    $json_salida = json_encode($objeto_salida);

    echo $json_salida;

    $conn->close();
?>