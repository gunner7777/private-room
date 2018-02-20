<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../objects/Worker.php';
 
$database = new Database();
$db = $database->connect();
 
$worker = new Worker($db);

$worker->id = (isset($_GET['idw'])) ? $_GET['idw'] : die();

$worker->readOne();

$workerItem = array(
    "id_worker" => $worker->id,
    "FI" => $worker->FI,
    "post" => $worker->post,
    "photo_link" => $worker->photo_link,
    "phone" => $worker->phone,
    "mail" => $worker->mail
);

echo json_encode($workerItem);

