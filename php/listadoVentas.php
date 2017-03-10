<?php

// Va a devolver una respuesta JSON que no se debe cachear
header("Content-Type: text/xml");
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "concesionario";
$usuario   = "root";
$password  = "";

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());


$sql = 'SELECT ID_TRANSACCION,IMPORTE,FECHA,ID_PERSONA,TIPO_EMPLEADO,MATRICULA FROM transaccion WHERE TIPO_TRANSACCION="Venta"';


$resultados = mysql_query($sql, $conexion) or die(mysql_error());

$respuesta="<?xml version='1.0' encoding='UTF-8'?><transaccion>";
while($fila=mysql_fetch_assoc($resultados)){
    $respuesta.="<venta>";
        $respuesta.="<idtransaccion>".$fila['ID_TRANSACCION']."</idtransaccion>";
        $respuesta.="<importe>".$fila['IMPORTE']."</importe>";
		$respuesta.="<fecha>".$fila['FECHA']."</fecha>";
		$respuesta.="<idpersona>".$fila['ID_PERSONA']."</idpersona>";
		$respuesta.="<tipoempleado>".$fila['TIPO_EMPLEADO']."</tipoempleado>";
		$respuesta.="<matricula>".$fila['MATRICULA']."</matricula>";
    $respuesta.="</venta>";
}
$respuesta.="</transaccion>";
echo $respuesta;

mysql_close($conexion);

?>