<?php
$email = $_POST['email'];
$pass1 = $_POST['pass1'];

$conn = mysqli_connect('localhost','root','','guvi');


if($conn->connect_error){
    die("Connection failure:". $conn->connect_error);
}
$select = "select * from registration where email = '$email'";
$result = mysqli_query($conn, $select);
$count = mysqli_num_rows($result);
if($count > 0){
    $data = $result->fetch_assoc();
    if($data['pass1'] === $pass1){
        echo 1;
        header("location: /guvi/profile.html");
        exit;
    }else{
        echo "Invalid password";
    }
}
else{
    echo "Invalid credential";
    exit;
}
?>