<?php 
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phno = $_POST['phno'];
$email = $_POST['email'];
$pass1 = $_POST['pass1']; 
$conn = mysqli_connect('localhost','root','','guvi');
if($conn->connect_error){
    die("Connection failure:". $conn->connect_error);
}
$select = "select * from registration where email='$email'";
$result = mysqli_query($conn, $select);
$count = mysqli_num_rows($result);

if($count<1){
    $insert = "INSERT INTO registration(firstName, lastName, phno, email, pass1) 
    VALUES('$firstName', '$lastName', '$phno', '$email', '$pass1')";
    mysqli_query($conn, $insert);


    echo 1;
    require_once __DIR__ . '/vendor/autoload.php';
$con = new MongoDB\Client("mongodb://localhost:27017");
// echo extension_loaded("mongodb") ? "loaded" : "unloaded";

$db = $con->guvi;
$tb = $db->profile;

$insertOne = $tb->insertOne(["name" => $firstName, "lname"=>$lastName, "phno"=>$phno, "email"=>$email]);

    exit;
}else{
    echo 2;
    exit;
}
?>
