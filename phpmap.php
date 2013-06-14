<?php
function simpleEncode($values, $maxValue=-1)
{
  $simpleEncoding = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  $simpleLength = strlen($simpleEncoding)-1;

  if ($maxValue < 0) $maxValue = max($values);

  $chartData = 's:';
  foreach ($values as $currentValue) {
    if (is_numeric($currentValue) && $currentValue >= 0) {
      $chartData .= $simpleEncoding[round($simpleLength * $currentValue / $maxValue)];
    } else {
      $chartData .= ‘_’;
    }
  }
  return $chartData;
}

$conexion = mysql_connect("localhost",
 "USUARIO", "");
mysql_select_db("rf_21_innodb", $conexion);

$query = "SELECT MAX(Population/SurfaceArea) as max_pop from country
SELECT (Population/SurfaceArea) as Population, Code2
from country WHERE Population > 0 order by Population DESC";
$result = mysql_query($query, $conexion) or die(mysql_error());
$max = mysql_fetch_assoc($result);
$max = $max['max_pop'];

$query = "SELECT Population, Code2 from country
WHERE Population > 0 order by Population DESC";
$result = mysql_query($query, $conexion) or die(mysql_error());

$paises = "";
$data = array();

 while ($row = mysql_fetch_assoc($result))
 {
	$data[] = ($row['Population']/$max)*100;
	$paises .= $row['Code2'];
 }
$data = simpleEncode($data);
?>

<img src="http://chart.apis.google.com/chart?cht=t&chs=440x220&
chd=<?=$data?>&chco=ffffff,FFEBD7,FF6600&
chld=<?=$paises?>&chtm=world&chf=bg,s,EAF7FE">
?>