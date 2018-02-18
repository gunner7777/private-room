<?php
echo 'dff';
//require_once '../dbConfig.php';
include '../dbConnectClass.php';
//$dbconfig = new dbConfig();
//$dbconnect = new dbConnect($dbconfig);

// в других файлах уже делаем
$db = $dbconnect->connect();

$FI = "Василий Петров";
$post = "менеджер";
$photo_link = "link to";
$phone = "+7912341231";
$mail = "petrov@mail.ru";
$res = $db->prepare("INSERT INTO workers(FI, post, photo_link, phone, mail) VALUES(:FI, :post, :photo_link, :phone, :mail)");				
$res->bindValue(':FI', $FI);
$res->bindValue(':post', $post);
$res->bindValue(':photo_link', $photo_link);
$res->bindValue(':phone', $phone);
$res->bindValue(':mail', $mail);
try {
$res->execute();
} catch(PDOException $e) {
    echo $e->getMessage();
}