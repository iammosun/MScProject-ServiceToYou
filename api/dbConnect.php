
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/json');


// <!-- Storing the connection to make it reusable in other files -->
function connect(){
    // <!-- // connecting to database -->
    $host = 'dragon.ukc.ac.uk';
    $dbname = 'moo40';
    $user = 'moo40';
    $pwd = 'xoca&lm';
    
    try{
        $conn = new PDO("mysql:host=$host; dbname=$dbname", $user, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        if($conn){
            // $handle = $conn->prepare("SELECT * FROM Customer");
            // $handle->execute();
            // $result = $handle -> fetchAll();
            // if($result){
            //     var_dump($result);
            //     return true;
            // }
            return $conn;
        } else {
            echo 'Failed to connect';
        }
    }catch(PDOException $e){
        echo "Failed to connect, PDOException: " . $e->getMessage();
    }
}

?>