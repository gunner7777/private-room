<?php
if(isset($_FILES['upload']['tmp_name'])) {
    // set path for upload file
    $newFileName  = $_SERVER['DOCUMENT_ROOT'] . '/upploaddds/';
    $fileTemp = $_FILES['upload'];
    
    // get only filename
    $arrName = explode('.', $fileTemp['name']);
    $newFileName .= $arrName[count($arrName)-2];

    switch($fileTemp['type']) {
        case 'image/jpeg':
            $newFileName .= '.jpg';
            break;
        case 'image/png':
            $newFileName .= '.png';
            break;
        case 'application/pdf':
            $newFileName .= '.pdf';
            break;
        default: 
            echo "fail";
            exit;
    }

    if (!move_uploaded_file($fileTemp['tmp_name'], $newFileName)) {
        echo 'Не удалось осуществить сохранение файла';
    }
}