<?php

	class padreclass  {
		
		public function conexion() {
			$host = "localhost";
		 	$user = "root";
		 	$pass = "";
		 	$bd = "opendata";

			$con = mysql_connect($host, $user, $pass);
			
			mysql_select_db($bd, $con);
		}
		
		
	}
	
	 class inputs {
		public function crearSelect($aimprimir,$idAimprimir,$nametabla,$nameselect,$nameLabel){
			$cuenta = 1;
	
		
		echo "<label>".$nameLabel."<label/><br/><td><select name='$nameselect'><option selected='true' value='noselect'>No select</option>";
		
		$query = "SELECT * FROM $nametabla ";
		
		$pedido = mysql_query($query);
		
		
		
		while ($filaquery = mysql_fetch_assoc($pedido)){
			
			echo "<option name='".$filaquery["$aimprimir"]."'>".$filaquery["$aimprimir"]."</option>";
		}
		echo "<select/><td/><br/>";
		mysql_free_result($pedido);
		
		}
	}
	
	
		  
	
?>