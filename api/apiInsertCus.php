<?php

// Headers
header('Access-Control-Allow-Origin: https://raptor.kent.ac.uk/~moo40/sservice-to-you/src/components/SignUpCustPage.js');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');

include 'dbConnect.php';

$firstName;
$surname;
$email;
$passwd;


function InsertCus() {
	$data = json_decode(file_get_contents('https://raptor.kent.ac.uk/~moo40/sservice-to-you/src/components/SignUpCustPage.js'));
    $conn = connect();

	// input validation/checking no field is empty and in right data type
	if(($data->firstName !== null)
	&& strlen($data->firstName)>0 
	&& ($data->surname !== null) 
	&& strlen($data->surname)>0
	&& ($data->email !== null) 
	&& strlen($data->email)>0
	&& ($data->pwd !== null) 
	&& (strlen($data->pwd)>5) ){

		$firstName = $data->firstName;
		$surname = $data->surname;
		$email = $data->email;
		$passwd = $data->pwd;
		// echo $email;
		
	}else{
		// redirection to home page
		echo "could not insert";
		echo $data->surname;
		return false;
	}

    //check if email already exist in db


	//prepare the insert query
	$handle = $conn->prepare(
		"INSERT INTO Customer (firstName, lastName, email, pwd)
		VALUES (:fn, :sn, :em, :pwd);"
	);
    
	// execute the query
    $done = $handle->execute(array(
		':fn' => $firstName,
		':sn' => $surname, 
		':em' => $email, 
		':pwd' => $passwd
	));


	// mysql_insert_id();
	$lastCustId = $conn->lastInsertId();

    if($done){
		$custId = array(
			'id'=> $lastCustId
		);

		return $custId;
        
    } else {
		return false;
		echo 'could not insert';
	}
}

InsertCus();

?>


