<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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

$worker->id = $data->id;
$worker->fi = $data->fi;
$worker->post = $data->post;
$worker->photo_link = $data->photo_link;
$worker->phone = $data->phone;
$worker->mail = $data->mail;

if($worker->update()) {
    echo json_encode(array("message" => "Информация о сотруднике изменена"), JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(array("message" => "Ошибка при изменении"), JSON_UNESCAPED_UNICODE);
}