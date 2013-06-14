<html>
  <head>
    
  </head>

  <body>
	<div>
		<?php
			$host = "localhost";
		 	$user = "root";
		 	$pass = "";
		 	$bd = "opendata";

			$con = mysql_connect($host, $user, $pass);
			
			mysql_select_db($bd, $con);
			
			$query1 = "SELECT * FROM datosabiertos";
			$query2 = mysql_query($query1);
			
			
			echo mysql_error();
			while($david = mysql_fetch_assoc($query2)) {
				echo $david["cent_nombre"]."<br/>";
			}
			
		?>
		
	</div>

  </body>
</html>