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

    $sql = "SELECT MATRICULA,PRECIO,NOMBRE FROM vehiculo,categoria WHERE vehiculo.ID_CATEGORIA=categoria.ID_CATEGORIA ";

    $resultados = mysql_query($sql, $conexion) or die(mysql_error());

    $respuesta="<?xml version='1.0' encoding='UTF-8'?><vehiculo>";
    while($fila=mysql_fetch_assoc($resultados)){
        $respuesta.="<coche>";
            $respuesta.="<matricula>".$fila['MATRICULA']."</matricula>";
            $respuesta.="<precio>".$fila['PRECIO']."</precio>";
            $respuesta.="<categoria>".$fila['NOMBRE']."</categoria>";
        $respuesta.="</coche>";
    }
    $respuesta.="</vehiculo>";
    echo $respuesta;

    mysql_close($conexion);
?>