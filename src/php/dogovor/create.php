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

echo "dfdf";
/*$data2 = {
    date: 14.04.2018,
    name: "Договор"
    fi_zakaz: "Petrovich",
    o_zakaz: "P",
    phone: 433,
    docs: [
        {
            type: "dogovor",
            link: "linnk"
        },
        {
            type: "prilozhenie",
            link: "link2"
        },
    ],
    plan: [
        {
            date: 15.04.2018,
            workname: "work1",
            status: 1
        },
        {
            date: 18.04.2018,
            workname: "work2",
            status: 1
        },
    ],
    payments: [
        {
            stage_payment: "stage1",
            summa: 111,
            status: 1
        },
        {
            stage_payment: "stage2",
            summa: 222,
            status: 0
        },
        {
            stage_payment: "stage3",
            summa: 333,
            status: 0
        }
    ],
    workers: [1, 2]
};*/

$data = json_decode(file_get_contents("php://input"));
//$data = json_decode(file_get_contents('http://теплофф.рф/tyryr/1.json'));

//print_r($data);

$dogovor->name = $data->name;
$dogovor->date = $data->date;
$dogovor->fi_zakaz = $data->fi_zakaz;
$dogovor->o_zakaz = $data->o_zakaz;
$dogovor->phone = $data->phone;
$dogovor->docs = $data->docs;
$dogovor->plan = $data->plan;
$dogovor->payments = $data->payments;
$dogovor->d_w = $data->d_w;


if($dogovor->create()) {
    echo json_encode(array("message" => "Договор добавлен"), JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(array("message" => "Ошибка при добавлении"), JSON_UNESCAPED_UNICODE);
}