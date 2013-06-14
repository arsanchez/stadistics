<?php
function david($aimprimir,$idAimprimir,$nametabla,$nameselect,$nameLabel){
$cuenta = 1;
$aimprimir = $aimprimir;
$idAimprimir = $idAimprimir;
$nametabla = $nametabla;
$nameselect = $nameselect;
$nameLabel = $nameLabel;


$query1 = "SELECT * FROM $nametabla";
$pedido1 = mysql_query($query1);

echo "<label>".$nameLabel."<label/><br/><td><select name='$nameselect'>";
do {

$query = "SELECT $aimprimir FROM $nametabla WHERE $idAimprimir = '$cuenta' ";

$pedido = mysql_query($query);

$filaquery = mysql_fetch_assoc($pedido);


echo "<option name='".$filaquery["$aimprimir"]."'>".$filaquery["$aimprimir"]."</option>";


$cuenta++;
mysql_free_result($pedido);

} while ($cuenta < mysql_num_rows($pedido1));
echo "<select/><td/><br/>";
$d = mysql_free_result($pedido1);
}






?>