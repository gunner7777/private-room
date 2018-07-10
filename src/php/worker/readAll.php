<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once $_SERVER['DOCUMENT_ROOT'] . "/tyryr/config/Database.php";
include $_SERVER['DOCUMENT_ROOT'] . "/tyryr/objects/Worker.php";

$database = new Database();
$db = $database->connect();

$worker = new Worker($db);

$stmt = $worker->readAll();
$num = $stmt->rowCount();

if($num>0) {
    $workersArr = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $workersItem = array(
            "id_worker" => $id_worker,
            "fi" => $fi,
            "post" => $post,
            "photo_link" => $photo_link,
            "phone" => $phone,
            "mail" => $mail
        );

        array_push($workersArr, $workersItem);
    }

    echo json_encode($workersArr);
}