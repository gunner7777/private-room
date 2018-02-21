<?php

class Worker {
    private $conn;
    private $table_name = "workers";
    private $rel_table_name = "dogovor_workers";

    public $id;
    public $fi;
    public $post;
    public $photo_link;
    public $phone;
    public $mail;

    public function __construct($db) {
        $this->conn = $db;
    }

    function create() {
        $query = "INSERT INTO " . $this->table_name . " 
            (FI, post, photo_link, phone, mail) 
            VALUES(:FI, :post, :photo_link, :phone, :mail)";

        $this->FI = htmlspecialchars(strip_tags($this->FI));
        $this->post = htmlspecialchars(strip_tags($this->post));
        $this->photo_link = htmlspecialchars(strip_tags($this->photo_link));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->mail = htmlspecialchars(strip_tags($this->mail));

        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':FI', $this->FI);
        $stmt->bindValue(':post', $this->post);
        $stmt->bindValue(':photo_link', $this->photo_link);
        $stmt->bindValue(':phone', $this->phone);
        $stmt->bindValue(':mail', $this->mail);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    function readAll() {
        $query = "SELECT 
                id_worker, FI, post, photo_link 
            FROM " . $this->table_name;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
        
        /*$workersArr = array();
        foreach($stmt->fetchAll() as $k => $v) {
            $workersArr.push()
        }
        return json_encode();*/
    }

    function readOne() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id_worker = :id";
        
        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':id', $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->fi = $row['FI'];
        $this->post = $row['post'];
        $this->photo_link = $row['photo_link'];
        $this->phone = $row['phone'];
        $this->mail = $row['mail'];
    }

    function delete() {
        // удаляем из двух таблиц. Если в таблице сотрудник-договор нет сотрудника с полем ответственный за проект, то выводим ответсвтвенный не назначен.
        $query = "DELETE " . $this->table_name . ", " . $this->rel_table_name . " FROM " . $this->table_name . " INNER JOIN " . $this->rel_table_name . " ON " . $this->table_name . ".id_worker = " . $this->rel_table_name . ".id_worker WHERE " . $this->table_name . ".id_worker = :id";
        //$query = "DELETE FROM workers WHERE id_worker = :id";
        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt = $this->conn->prepare($query);  
        $stmt->bindValue(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }

    function update() {
        $query = "UPDATE " . $this->table_name . "
            SET 
                FI = :fi,
                post = :post,
                photo_link = :photo_link,
                phone = :phone,
                mail = :mail
            WHERE id_worker = :id";
        
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->FI = htmlspecialchars(strip_tags($this->FI));
        $this->post = htmlspecialchars(strip_tags($this->post));
        $this->photo_link = htmlspecialchars(strip_tags($this->photo_link));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->mail = htmlspecialchars(strip_tags($this->mail));

        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':id', $this->id);
        $stmt->bindValue(':FI', $this->FI);
        $stmt->bindValue(':post', $this->post);
        $stmt->bindValue(':photo_link', $this->photo_link);
        $stmt->bindValue(':phone', $this->phone);
        $stmt->bindValue(':mail', $this->mail);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }
}