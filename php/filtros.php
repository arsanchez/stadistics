<?php
if(is_string($_REQUEST["nombre"])){
	$valor1 = $_POST["nombre"];
	}


	$valor2 = $_POST["codigo"];
	
	$array_filtros = array();
	$array_nombretab = array();
	
	array_push($array_filtros,$valor1, $valor2);
	array_push($array_nombretab,"cent_nombre","cent_codigo");
	
			$host = "localhost";
		 	$user = "root";
		 	$pass = "";
		 	$bd = "opendata";

			$con = mysql_connect($host, $user, $pass);
			
			mysql_select_db($bd, $con);
	
	$pedido = "SELECT * FROM datosabiertos WHERE 1";
	
	
	echo $pedido;
	
		for($i=0; $i<count($array_filtros); $i++){
			
						 echo  " AND ".$array_nombretab[$i]." = '".$array_filtros[$i]."'";
		}
	
?>