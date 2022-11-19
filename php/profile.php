<?php
$location = $_POST['location'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$age = $_POST['age'];

require_once __DIR__ . '/vendor/autoload.php';
$con = new MongoDB\Client("mongodb://localhost:27017");
// echo extension_loaded("mongodb") ? "loaded" : "unloaded";

$db = $con->guvi;
$tb = $db->upload;

$insertOne = $tb->insertOne(["location" => $location, "dob"=>$dob, "gender"=>$gender, "age"=>$age]);
echo 1;
?>
