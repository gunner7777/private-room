<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once $_SERVER['DOCUMENT_ROOT'] . "/tyryr/config/Database.php";
include $_SERVER['DOCUMENT_ROOT'] . "/tyryr/objects/Worker.php";

$database = new Database();
$db = $database->connect();
 
$worker = new Worker($db);

$worker->id = (isset($_GET['idw'])) ? $_GET['idw'] : die();

$worker->readOne();

$workerItem = array(
    "id_worker" => $worker->id,
    "fi" => $worker->fi,
    "post" => $worker->post,
    "photo_link" => $worker->photo_link,
    "phone" => $worker->phone,
    "mail" => $worker->mail
);

echo json_encode($workerItem, JSON_UNESCAPED_UNICODE);

