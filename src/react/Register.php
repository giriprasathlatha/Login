<?php

use FTP\Connection;

   $name = $_POST['name'];
   $email = $_POST['email'];
   $password = $_POST['password'];

   if(!empty($name) || !empty($email) || !empty($password)){
    $host ="localhost";
    $dbusername ="root";
    $dbpassword = "";
    $dbname ="own project";

    $conn = new mysqli($name, $email, $password);

    if(mysqli_connect_error()){
        die('Connect Error ('.
         mysqli_connect_errno() .')'
        . mysqli_connect_error() );
    }

    else{
        $SELECT = "SELECT email FROM signup Where email=? Limit 1";
        $INSERT = "INSERT Into signup (name, email, password) Values(?,?,?,?)";

        $stmt  = $conn->prepare($SELECT);
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum==0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("s,s,s", $name, $email, $password);
            $stmt->execute();
            echo "New Id Created Sucessfully";
        }
        else{
            echo "This Id is already registred";
        } 
        $stmt->close();
        $conn->close();
    }
   }
   else{
    echo"All field are required";
    die();
   }
?>