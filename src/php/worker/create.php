<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once $_SERVER['DOCUMENT_ROOT'] . "/tyryr/config/Database.php";
include $_SERVER['DOCUMENT_ROOT'] . "/tyryr/objects/Worker.php";

$database = new Database();
$db = $database->connect();

$worker = new Worker($db);

$data = json_decode(file_get_contents("php://input"));

$worker->fi = $data->fi;
$worker->post = $data->post;
$worker->photo_link = $data->photo_link;
$worker->phone = $data->phone;
$worker->mail = $data->mail;

if($worker->create()) {
    echo json_encode(array("message" => "Сотрудник добавлен"), JSON_PRETTY_PRINT);
} else {
    echo json_encode(array("message" => "Ошибка при добавлении"), JSON_PRETTY_PRINT);
}