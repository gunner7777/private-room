<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once $_SERVER['DOCUMENT_ROOT'] . "/tyryr/config/Database.php";
include $_SERVER['DOCUMENT_ROOT'] . "/tyryr/objects/Dogovor.php";

$database = new Database();
$db = $database->connect();

$dogovor = new Dogovor($db);

$stmt = $dogovor->readAll();
$num = $stmt->rowCount();

if($num>0) {
    $dogovorArr = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $dogovorItem = array(
            "id_dog" => $id_dog,
            "name" => $name,
            "date" => $date,
            "fi_zakaz" => $fi_zakaz,
            "o_zakaz" => $o_zakaz,
            "phone" => $phone,
            "comments" => $comments
        );

        array_push($dogovorArr, $dogovorItem);
    }

    echo json_encode($dogovorArr);
}