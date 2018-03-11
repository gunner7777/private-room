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
            (fi, post, photo_link, phone, mail) 
            VALUES(:fi, :post, :photo_link, :phone, :mail)";

        $this->fi = htmlspecialchars(strip_tags($this->fi));
        $this->post = htmlspecialchars(strip_tags($this->post));
        $this->photo_link = htmlspecialchars(strip_tags($this->photo_link));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->mail = htmlspecialchars(strip_tags($this->mail));
        
        try {
            $this->conn->beginTransaction();
            $stmt = $this->conn->prepare($query);
            $stmt->bindValue(':fi', $this->fi);
            $stmt->bindValue(':post', $this->post);
            $stmt->bindValue(':photo_link', $this->photo_link);
            $stmt->bindValue(':phone', $this->phone);
            $stmt->bindValue(':mail', $this->mail);

            if($stmt->execute()) {
                $this->conn->commit();
                return true;
            }
            return false;
        }
        catch(PDOException $e) {
            $this->conn->rollBack();
        }
    }

    function readAll() {
        $query = "SELECT * 
            FROM " . $this->table_name;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    function readOne() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id_worker = :id";
        
        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(':id', $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->fi = $row['fi'];
        $this->post = $row['post'];
        $this->photo_link = $row['photo_link'];
        $this->phone = $row['phone'];
        $this->mail = $row['mail'];
    }

    function delete() {
        $query = "DELETE FROM " . $this->table_name . " WHERE id_worker = :id";
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
                fi = :fi,
                post = :post,
                photo_link = :photo_link,
                phone = :phone,
                mail = :mail
            WHERE id_worker = :id";
        
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->fi = htmlspecialchars(strip_tags($this->fi));
        $this->post = htmlspecialchars(strip_tags($this->post));
        $this->photo_link = htmlspecialchars(strip_tags($this->photo_link));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->mail = htmlspecialchars(strip_tags($this->mail));
        try {
            $this->conn->beginTransaction();
            $stmt = $this->conn->prepare($query);
            
            $stmt->bindValue(':id', $this->id);
            $stmt->bindValue(':fi', $this->fi);
            $stmt->bindValue(':post', $this->post);
            $stmt->bindValue(':photo_link', $this->photo_link);
            $stmt->bindValue(':phone', $this->phone);
            $stmt->bindValue(':mail', $this->mail);

            if($stmt->execute()) {
                $this->conn->commit();
                return true;
            }
            return false;
        } catch(PDOException $e) {
            $this->conn->rollBack();
        }
    }
}