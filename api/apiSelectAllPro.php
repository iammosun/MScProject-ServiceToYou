
<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json');

include 'dbConnect.php';
$conn = connect();

$allCustData = array();

function SelectAllPro() {
	

	$handle = $conn->prepare(
		"SELECT * FROM Pro"
	);

	$handle->execute();

	$result = $handle -> fetchAll();
	if($result){
		return $result;
	} else{
		return false;
	};
}

?>

            
