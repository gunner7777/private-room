<?php
include_once '../dbConnectClass.php';

$db = $dbconnect->connect();

if(isset($_GET['idw'])) {
    $id_worker = $_GET['idw'];
} else {
    unset($id_worker);
    die();
}

$res = $db->prepare("DELETE FROM workers WHERE id_worker = :id_worker");
$res->bindValue(':id_worker', $id_worker);