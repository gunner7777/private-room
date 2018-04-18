<?php

class Dogovor {
  private $db;
  private $table_name = "dogovor";
  private $table_name_docs = "docs";
  private $table_name_plan = "plan_rabot";
  private $table_name_payments = "payments";
  private $table_name_dogovor_workers = "dogovor_workers";
  private $table_name_workers = "workers";

  // dogovor table
  public $id;
  public $name;
  public $date;
  public $fi_zakaz;
  public $o_zakaz;
  public $phone;
  public $comments;

  // docs table
  //public $docs_type;
  //public $docs_link;
  public $doc_id;
  public $docs = array();

  // plan_rabot table
  //public $work_date;
  //public $workname;
  //public $work_status;
  public $plan_id;
  public $plan = array();

  // payments table
  //public $stage_payment;
  //public $summa;
  //public $payment_status;
  public $pay_id;
  public $payments = array();

  // dogovor-workers table
  public $dw_id;
  public $d_w = array();

  // workers table
  public $workers = array();


  public function __construct($db) {
    $this->conn = $db;
  }

  function create() {
    // add dogovor table
    $query = "INSERT INTO " . $this->table_name . "
      (name, date, fi_zakaz, o_zakaz, phone, comments) 
      VALUES(:name, :date, :fi_zakaz, :o_zakaz, :phone, :comments)";

      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->date = htmlspecialchars(strip_tags($this->date));
      $this->fi_zakaz = htmlspecialchars(strip_tags($this->fi_zakaz));
      $this->o_zakaz = htmlspecialchars(strip_tags($this->o_zakaz));
      $this->phone = htmlspecialchars(strip_tags($this->phone));
      $this->comments = htmlspecialchars(strip_tags($this->comments));

      // massiv ???
      
      
      try {
        $this->conn->beginTransaction();

        $res = $this->conn->prepare($query);
        $res->bindValue(':name', $this->name);
        $res->bindValue(':date', $this->date);
        $res->bindValue(':fi_zakaz', $this->fi_zakaz);
        $res->bindValue(':o_zakaz', $this->o_zakaz);
        $res->bindValue(':phone', $this->phone);
        $res->bindValue(':comments', $this->comments);
        $res->execute();

        $this->id = $this->conn->lastInsertId();

        $this->conn->commit();
      } catch(PDOException $e) {
        $this->conn->rollBack();
      }


      // insert into docs
      $query = "INSERT INTO " . $this->table_name_docs . "
      (id_dog, type, link) 
      VALUES(:id_dog, :type, :link)";

      try {
        $this->conn->beginTransaction();

        $res = $this->conn->prepare($query);
        $res->bindValue(':id_dog', $this->id);

        foreach($this->docs as $doc) {
          print_r($doc->type);
          $res->bindValue(':type', $doc->type);
          $res->bindValue(':link', $doc->link);
          $res->execute();
        }

        $this->conn->commit();
      } catch(PDOException $e) {
        $this->conn->rollBack();
      }


      // insert into plan_rabot
      $query = "INSERT INTO " . $this->table_name_plan . "
      (id_dog, date, workname, status) 
      VALUES(:id_dog, :date, :workname, :status)";

      try {
        $this->conn->beginTransaction();

        $res = $this->conn->prepare($query);
        $res->bindValue(':id_dog', $this->id);

        foreach($this->plan as $p) {
          $res->bindValue(':date', $p->date);
          $res->bindValue(':workname', $p->workname);
          $res->bindValue(':status', $p->status);
          $res->execute();
        }

        $this->conn->commit();
      } catch(PDOException $e) {
        $this->conn->rollBack();
      }

      // insert into payments
      $query = "INSERT INTO " . $this->table_name_payments . "
      (id_dog, stage_payment, date, summa, status) 
      VALUES(:id_dog, :stage_payment, :date, :summa, :status)";

      try {
        $this->conn->beginTransaction();

        $res = $this->conn->prepare($query);
        $res->bindValue(':id_dog', $this->id);

        foreach($this->payments as $pay) {
          $res->bindValue(':stage_payment', $pay->stage_payment);
          $res->bindValue(':date', $pay->date);
          $res->bindValue(':summa', $pay->summa);
          $res->bindValue(':status', $pay->status);
          $res->execute();
        }

        $this->conn->commit();
      } catch(PDOException $e) {
        $this->conn->rollBack();
      }


      // insert into dogovor_workers
      $query = "INSERT INTO " . $this->table_name_dogovor_workers . "
      (id_dog, id_worker, main_worker) 
      VALUES(:id_dog, :id_worker, :main_worker)";

      try {
        $this->conn->beginTransaction();

        $res = $this->conn->prepare($query);
        $res->bindValue(':id_dog', $this->id);

        foreach($this->d_w as $dw) {
          $res->bindValue(':id_worker', $dw->id_worker);
          $res->bindValue(':main_worker', $dw->main_worker);
          $res->execute();
        }

        $this->conn->commit();
      } catch(PDOException $e) {
        $this->conn->rollBack();
      }
      return true;
  }


  function readAll() {
    $query = "SELECT *  
        FROM " . $this->table_name;

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }

  function readOne() {
    // dogovor join docs
    $query = "SELECT dog.id_dog, dog.name, dog.date, dog.fi_zakaz, dog.o_zakaz, dog.phone, dog.comments, docs.id_doc, docs.type, docs.link 
      FROM " . $this->table_name . " dog 
      INNER JOIN " . $this->table_name_docs . " docs 
      ON dog.id_dog = docs.id_dog
      WHERE dog.id_dog = :id";

    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt = $this->conn->prepare($query);
    $stmt->bindValue(':id', $this->id);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      $this->id = $row['id_dog'];
      $this->name = $row['name'];
      $this->date = $row['date'];
      $this->fi_zakaz = $row['fi_zakaz'];
      $this->o_zakaz = $row['o_zakaz'];
      $this->phone = $row['phone'];
      $this->comments = $row['comments'];
      $this->docs[] = array(
        'id_doc' => $row['id_doc'],
        'type' => $row['type'],
        'link' => $row['link']
      );
    }

    // dogovor join plan
    $query = "SELECT id_plan, date, workname, status 
      FROM " . $this->table_name_plan . " 
      WHERE id_dog = :id";

    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt = $this->conn->prepare($query);
    $stmt->bindValue(':id', $this->id);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      $this->plan[] = array(
        'id_plan' => $row['id_plan'],
        'date' => $row['date'],
        'workname' => $row['workname'],
        'status' => $row['status'],
      );
    }

    // dogovor join payments
    $query = "SELECT id_pay, stage_payment, date, summa, status 
      FROM " . $this->table_name_payments . " 
      WHERE id_dog = :id";

    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt = $this->conn->prepare($query);
    $stmt->bindValue(':id', $this->id);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      $this->payments[] = array(
        'id_pay' => $row['id_pay'],
        'stage_payment' => $row['stage_payment'],
        'date' => $row['date'],
        'summa' => $row['summa'],
        'status' => $row['status']
      );
    }

    // dogovor join workers
    $query = "SELECT w.id_worker, w.fi, w.post, w.photo_link, w.phone, w.mail, dw.id_dw, dw.main_worker
      FROM " . $this->table_name_workers . " w 
      INNER JOIN " . $this->table_name_dogovor_workers . " dw 
      ON w.id_worker = dw.id_worker
      WHERE dw.id_dog = :id";

    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt = $this->conn->prepare($query);
    $stmt->bindValue(':id', $this->id);
    $stmt->execute();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      $this->workers[] = array(
        'id_dw' => $row['id_dw'],
        'id_worker' => $row['id_worker'],
        'fi' => $row['fi'],
        'post' => $row['post'],
        'photo_link' => $row['photo_link'],
        'phone' => $row['phone'],
        'mail' => $row['mail'],
        'main_worker' => $row['main_worker']
      );
    }
  }

  function delete() {
    $query = "DELETE FROM " . $this->table_name . " WHERE id_dog = :id";
    $this->id = htmlspecialchars(strip_tags($this->id));

    $stmt = $this->conn->prepare($query);  
    $stmt->bindValue(':id', $this->id);

    if($stmt->execute()) {
        return true;
    }
    return false;
  }

  function deleteItem($type) {
    switch($type) {
      case "doc":
        $query = "DELETE FROM " . $this->table_name_docs . " WHERE id_doc = :id";
        $this->doc_id = htmlspecialchars(strip_tags($this->doc_id));

        $stmt = $this->conn->prepare($query);  
        $stmt->bindValue(':id', $this->doc_id);
        break;

      case "plan":
        $query = "DELETE FROM " . $this->table_name_plan . " WHERE id_plan = :id";
        $this->plan_id = htmlspecialchars(strip_tags($this->plan_id));
        
        $stmt = $this->conn->prepare($query);  
        $stmt->bindValue(':id', $this->plan_id);
        break;

      case "pay":
        $query = "DELETE FROM " . $this->table_name_payments . " WHERE id_pay = :id";
        $this->pay_id = htmlspecialchars(strip_tags($this->pay_id));
        
        $stmt = $this->conn->prepare($query);  
        $stmt->bindValue(':id', $this->pay_id);
        break;
      
      case "dw":
        $query = "DELETE FROM " . $this->table_name_dogovor_workers . " WHERE id_dw = :id";
        $this->dw_id = htmlspecialchars(strip_tags($this->dw_id));
        
        $stmt = $this->conn->prepare($query);  
        $stmt->bindValue(':id', $this->dw_id);
        break;

      default: break;
    }

    if($stmt->execute()) {
      return true;
    }
    return false;
  }

  function update($type) {
    try {
      $this->conn->beginTransaction();
      $this->id = htmlspecialchars(strip_tags($this->id));
      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->date = htmlspecialchars(strip_tags($this->date));
      $this->fi_zakaz = htmlspecialchars(strip_tags($this->fi_zakaz));
      $this->o_zakaz = htmlspecialchars(strip_tags($this->o_zakaz));
      $this->phone = htmlspecialchars(strip_tags($this->phone));
      $this->comments = htmlspecialchars(strip_tags($this->comments));

      switch($type) {
        case "dog":
          $query = "UPDATE " . $this->table_name . "
            SET
              name = :name,
              date = :date,
              fi_zakaz = :fi_zakaz,
              o_zakaz = :o_zakaz,
              phone = :phone,
              comments = :comments
            WHERE id_dog = :id";

          $stmt = $this->conn->prepare($query);
          $stmt->bindValue(':id', $this->id);
          $stmt->bindValue(':name', $this->name);
          $stmt->bindValue(':date', $this->date);
          $stmt->bindValue(':fi_zakaz', $this->fi_zakaz);
          $stmt->bindValue(':o_zakaz', $this->o_zakaz);
          $stmt->bindValue(':phone', $this->phone);
          $stmt->bindValue(':comments', $this->comments);
          $stmt->execute();
          break;

        case "docs": 
          $query = "INSERT INTO " . $this->table_name_docs . "
            (id_doc, id_dog, type, link)
            VALUES(:id_doc, :id_dog, :type, :link)
            ON DUPLICATE KEY UPDATE type=:type, link=:link";  
        /*$query = "UPDATE " . $table_name_docs . "
            SET
              type = :type,
              link = :link
            WHERE id_dog = :id_dog AND id_doc = :id_doc";*/

          $res = $this->conn->prepare($query);
          $res->bindValue(':id_dog', $this->id);
         // print_r($this->docs);
          foreach($this->docs as $doc) {
            //print_r($doc->id_doc);
            $res->bindValue(':id_doc', $doc->id_doc);
            $res->bindValue(':type', $doc->type);
            $res->bindValue(':link', $doc->link);
            $res->execute();
            $this->doc_id = $this->conn->lastInsertId();
          }
          break;

        case "plan":
          $query = "INSERT INTO " . $this->table_name_plan . "
            (id_plan, id_dog, date, workname, status)
            VALUES(:id_plan, :id_dog, :date, :workname, :status)
            ON DUPLICATE KEY UPDATE date=:date, workname=:workname, status=:status";
          /*$query = "UPDATE " . $table_name_plan . "
            SET 
              date = :date,
              workname = :workname,
              status = :status
            WHERE id_dog = :id_dog";*/

          $res = $this->conn->prepare($query);
          $res->bindValue(':id_dog', $this->id);

          foreach($this->plan as $p) {
            $res->bindValue(':id_plan', $p->id_plan);
            $res->bindValue(':date', $p->date);
            $res->bindValue(':workname', $p->workname);
            $res->bindValue(':status', $p->status);
            $res->execute();
            $this->plan_id = $this->conn->lastInsertId();
          }
          break;
        
        case "pay":
          $query = "INSERT INTO " . $this->table_name_payments . "
              (id_pay, id_dog, stage_payment, date, summa, status)
              VALUES(:id_pay, :id_dog, :stage_payment, :date, :summa, :status)
              ON DUPLICATE KEY UPDATE stage_payment=:stage_payment, date=:date, summa=:summa, status=:status";
        /*$query = "UPDATE " . $table_name_payments . "
          SET
            stage_payment = :stage_payment,
            summa = :summa,
            status = :status
          WHERE id_dog = :id_dog";*/

          $res = $this->conn->prepare($query);
          $res->bindValue(':id_dog', $this->id);
//print_r($this->payments);
          foreach($this->payments as $pay) {
            //print_r($pay->id_pay);
            $res->bindValue(':id_pay', $pay->id_pay);
            $res->bindValue(':stage_payment', $pay->stage_payment);
            $res->bindValue(':date', $pay->date);
            $res->bindValue(':summa', $pay->summa);
            $res->bindValue(':status', $pay->status);
            $res->execute();
            $this->pay_id = $this->conn->lastInsertId();
          }
          break;

        case "dw":
          $query = "INSERT INTO " . $this->table_name_dogovor_workers . "
            (id_dw, id_dog, id_worker, main_worker)
            VALUES(:id_dw, :id_dog, :id_worker, :main_worker)
            ON DUPLICATE KEY UPDATE id_worker=:id_worker, main_worker=:main_worker";
            $res = $this->conn->prepare($query);
            $res->bindValue(':id_dog', $this->id);
  
          foreach($this->dw as $d_w) {
            $res->bindValue(':id_dw', $d_w->id_dw);
            $res->bindValue(':id_worker', $d_w->id_worker);
            $res->bindValue(':main_worker', $d_w->main_worker);
            $res->execute();
            $this->dw_id = $this->conn->lastInsertId();
          }

        default: break;
      }
      
      $this->conn->commit();
      return true;
    } catch(PDOException $e) {
      $this->conn->rollBack();
    }
  }
}