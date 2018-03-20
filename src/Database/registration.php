<?php
 
include 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$firstname = $obj['firstname'];
$lastname = $obj['lastname'];
$email = $obj['email'];
$password = $obj['password'];
$CheckSQL = "SELECT * FROM users WHERE email='$email'";
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
if(isset($check)){
    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
    $EmailExistJson = json_encode($EmailExistMSG);
    echo $EmailExistJson ;
 }
 else{
    // if(strlen($firstname) > 0 && strlen($lastname) > 0 && strlen($email) > 4 && strlen($password) > 6 && strlen($password) <= 20 )
    $Sql_Query = "insert into users (firstname,lastname,email,password) values ('$firstname', '$lastname','$email','$password')";
    if(mysqli_query($con,$Sql_Query)){
    $MSG = 'successful' ;
    $json = json_encode($MSG);
    echo $json ;
    }
    else{
        echo 'Try Again';
    }
}
mysqli_query($con,"DELETE from users WHERE firstname=");
mysqli_close($con);
?>