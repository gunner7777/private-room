<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once $_SERVER['DOCUMENT_ROOT'] . "/tyryr/config/Database.php";
include $_SERVER['DOCUMENT_ROOT'] . "/tyryr/objects/Dogovor.php";

$database = new Database();
$db = $database->connect();

$dogovor = new Dogovor($db);

$dogovor->id = (isset($_GET['id_dog'])) ? $_GET['id_dog'] : die();
//print_r($_GET);
//$dogovor->id = 1;

$dogovor->readOne();

$dogovorItem = array(
    "id_dog" => $dogovor->id,
    "name" => $dogovor->name,
    "date" => $dogovor->date,
    "fi_zakaz" => $dogovor->fi_zakaz,
    "o_zakaz" => $dogovor->o_zakaz,
    "phone" => $dogovor->phone,
    "comments" => $dogovor->comments,
    "docs" => $dogovor->docs,
    "plan" => $dogovor->plan,
    "payments" => $dogovor->payments,
    "workers" => $dogovor->workers,
);

echo json_encode($dogovorItem, JSON_UNESCAPED_UNICODE);

