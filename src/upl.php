<?php
if(isset($_FILES['upload']['tmp_name'])) {
  $imgDir = '/upploaddds/';
  $docDir = '/contracts/' . $_POST['dirname'] . '/';
  $imgPath = $_SERVER['DOCUMENT_ROOT'] . $imgDir;
  $docPath = $_SERVER['DOCUMENT_ROOT'] . $docDir;
  $fileTemp = $_FILES['upload'];
  switch($fileTemp['type']) {
    case 'image/jpeg':
      $fileExt = '.jpg';
      $newFileName  = $imgPath;
      break;
    case 'image/png':
      $fileExt = '.png';
      $newFileName  = $imgPath;
      break;
    case 'application/pdf':
      $fileExt = '.pdf';
      $newFileName  = $docPath;
      // create dir for every dogovor
      if(!file_exists($docPath)) {
          mkdir($docPath, 0770, true);
      }
      break;
    default: 
      echo "fail";
      exit;
  }
  
  // get only filename
  $arrName = explode('.', $fileTemp['name']);
  $newFileName .= $arrName[count($arrName)-2];
  $newFileName .= $fileExt;

  if (!move_uploaded_file($fileTemp['tmp_name'], $newFileName)) {
    echo 'Не удалось осуществить сохранение файла';
  } else {
    // return dir
    echo $docDir;
  }
}