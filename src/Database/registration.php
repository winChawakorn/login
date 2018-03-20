<?php
 
include 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$firstname = $obj['firstname'];

$lastname = $obj['lastname'];
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM users WHERE email='$email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));


if(isset($check)){

    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
 
    // Converting the message into JSON format.
    $EmailExistJson = json_encode($EmailExistMSG);
 
    // Echo the message.
    echo $EmailExistJson ;
 }
 else{
 
    // Creating SQL query and insert the record into MySQL database table.
    if(strlen($firstname) > 0 && strlen($lastname) > 0 && strlen($email) > 4 && strlen($password) > 6 && strlen($password) <= 20 )
        $Sql_Query = "insert into users (firstname,lastname,email,password) values ('$firstname', '$lastname','$email','$password')";
 
 
    if(mysqli_query($con,$Sql_Query)){
 
        // If the record inserted successfully then show the message.
        $MSG = 'successful' ;
 
        // Converting the message into JSON format.
        $json = json_encode($MSG);
 
        // Echo the message.
        echo $json ;
 
    }
    else{
 
        echo 'Try Again';
    }
 }
 mysqli_close($con);
?>