<!DOCTYPE>
	<head>
		<meta http-equiv=content-type content=text/html; charset=iso-8859-1>
		<meta charset="UTF-8">
		<!--Load the AJAX API-->
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
		<script type="text/javascript"
		  src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC8Kxrysi4CnVqm6kkHSzYIsfeDG7GLtPs&sensor=true">
		</script>
		<link href="/maps/documentation/javascript/examples/default.css" rel="stylesheet">

		<script src="js/jquery.js"></script>
		<script src="js/highcharts.js"></script>
		<script src="js/template.js"></script>
		<script src="js/googlempas.js"></script>

		<link href="css/template.css" rel="stylesheet" type="text/css" media="screen" />
		
		
	</head>
<body onload="initialize()">
	<div id="wrapper">
	<div id="content_menu">
		<div id="info_desa"><h3>Selecciona tus filtros</h3></div>
		<div class="filtros">
			<form method="post" action="" >
			<?php
			 include("php/conexion.php");

				$conexion = new padreclass();
				$conexion->conexion();
				$select = new inputs();
				$select->crearSelect("cent_nombre","id_entity","datosabiertos","nombre","por nombre");
				$select->crearSelect("cent_codigo","id_entity","datosabiertos","codigo","por codigo");
			?>
			<input type="submit" value="Filtrar" class="down" style="width: 100px;
height: 40px;
float: none;">
				
			</form>
		</div>
		<div class="logo">
			<img src="images/logo2.png" />
			<input type="submit" value="Filtros" class="down" />
		<ul class="menu_navegacion">
			<a href="#content_map" class="mapa"><li class="current">Mapa</li></a>
			<a href="#content_graphic" class="grafico"><li>Grafico</li></a>
			<a href="#content_tabla" class="tabla"><li>Tabla</li></a>
		</ul>
		
		</div>
	</div>	
	</div>

	<div id="container">
		
		<div id="content_graphic"></div>
		<div id="content_tabla"></div>
		<div id="content_map"></div>
	</div>
	<footer id="footer"></footer>
<div>
</html>