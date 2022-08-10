
<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/json');

include 'dbConnect.php';


// $allCustData = array();

function SelectAllCust() {
	$conn2 = connect();
	$handle = $conn2->prepare(
		"SELECT * FROM Customer"
	);

	$handle->execute();

	$result = $handle -> fetch(PDO::FETCH_ASSOC);
	while($row = $result){
		var_dump($row);
		// return $result;
	}
}

SelectAllCust();
?>

            
