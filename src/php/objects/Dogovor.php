<?php

class Dogovor {
  private $db;
  private $table_name = "dogovor";

  public function __construct($db) {
    $this->conn = $db;
  }

  function create() {

  }

  function readAll() {
    $query = "SELECT * FROM " . $this->table_name;
    SELECT * FROM dogovor 
    INNER JOIN docs ON dogovor.id_dog = docs.id_dog
      INNER JOIN payments ON dogovor.id_dog = payments.id_dog
      INNER JOIN plan_rabot ON dogovor.id_dog = plan_rabot.id_dog
      GROUP BY docs.id_doc, payments.id_pay, plan_rabot.id_plan
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
  }

  function readOne() {
    $query = "SELECT * FROM " . $this->table_name . " WHERE id_dog = :id";
    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt = $this->conn->prepare($query);
    $stmt->bindValue(':id', $this->id);
    $stmt->execute();

    // JOIN
  }
}