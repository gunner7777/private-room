<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once $_SERVER['DOCUMENT_ROOT'] . "/tyryr/config/Database.php";
include $_SERVER['DOCUMENT_ROOT'] . "/tyryr/objects/Dogovor.php";

$database = new Database();
$db = $database->connect();

$dogovor = new Dogovor($db);

$data = json_decode(file_get_contents("php://input"));
//print_r($data->docs[0]->type);

$dogovor->id = $data->id;
$dogovor->docs = $data->docs;

if($dogovor->update("docs")) {
    echo json_encode(array("message" => "Информация о договоре изменена"), JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(array("message" => "Ошибка при изменении"), JSON_UNESCAPED_UNICODE);
}