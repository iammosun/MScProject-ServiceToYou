
<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/json');

include 'dbConnect.php';


// $allCustData = array();

function SelectAllBookings() {
	$conn2 = connect();
	$handle = $conn2->prepare(
		"SELECT * FROM Booking"
	);

	$handle->execute();

	$result = $handle -> fetchAll();
	if($result){
		// var_dump($result);
        return $result;
	} else{
		return false;
	};
}

SelectAllBookings();
?>

            
