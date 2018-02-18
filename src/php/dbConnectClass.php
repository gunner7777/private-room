<?php
/*
return new object with set dbconfig params
*/

require 'dbConfig.php';

$dbconfig = new dbConfig();

class dbConnect {
    private $params;
    private $dsn;
    private $opt;

    function __construct($params) {
        $this->params = $params;
      }
    
    public function connect() {
        $this->dsn = "mysql:host=" . $this->params->host . ";dbname=" . $this->params->db . ";charset=" . $this->params->charset;
	    $this->opt = array(
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );
        try {
            return $pdo = new PDO($this->dsn, $this->params->user, $this->params->pass, $this->opt);
        } catch(PDOException $e) {
            return $e->getMessage();
        }

    }
}

$dbconnect = new dbConnect($dbconfig);


/* in modules
example:

$db = $dbconnect->connect();
$idp = '398';
$res = $db->prepare("SELECT id_proj, proj_name FROM projects_gs WHERE id_proj = :idp");				
$res->bindValue(':idp', $idp);
$res->execute();
$res->fetchAll();

*/