<?php
include '../dbConnectClass.php';

// в других файлах уже делаем
$db = $dbconnect->connect();

$res = $db->prepare("SELECT FI FROM workers");				

try {
  $res->execute();
  print_r($res->fetchAll());
} catch(PDOException $e) {
  echo $e->getMessage();
}