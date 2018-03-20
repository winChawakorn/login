<?php
    include 'config.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-headers: *");
    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $email = $obj['email'];
    $password = $obj['password'];
    $CheckSQL = "SELECT * FROM users WHERE email='$email' and password='$password'";
    $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
    if(isset($check)){
        $trueMsg = json_encode('true');
        echo($trueMsg);   
    }else{
        $falseMsg = json_encode('false');
        echo($falseMsg);
    }
    mysqli_close($con);
?>