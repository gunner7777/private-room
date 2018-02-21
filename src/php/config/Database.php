<?php
/*
return new object with set dbconfig params
*/
/*
require 'dbConfig.php';

$dbconfig = new dbConfig();
*/

class Database {
    private $host = "localhost";
    private $db = "u1959_houses";
    private $user = "u1959_houses";
    private $pass = "zB7cA2z";
    private $charset = "utf8";
    private $dsn;
    private $opt;
    public $pdo;

    /*function __construct($params) {
        $this->params = $params;
      }*/
    
    public function connect() {
        $this->pdo = null;
        
        $this->dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";charset=" . $this->charset;
	    $this->opt = array(
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );
        try {
            $this->pdo = new PDO($this->dsn, $this->user, $this->pass, $this->opt);
        } catch(PDOException $e) {
            return $e->getMessage();
        }
        return $this->pdo;

    }
}

//$dbconnect = new dbConnect($dbconfig);


/* in modules
example:

$db = $dbconnect->connect();
$idp = '398';
$res = $db->prepare("SELECT id_proj, proj_name FROM projects_gs WHERE id_proj = :idp");				
$res->bindValue(':idp', $idp);
$res->execute();
$res->fetchAll();

*/
