<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");


$data = array(
    'h1' => 'will this work hmm'
);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if ($password == "mikel" && $username == "kris") {
        echo json_encode(array('username' => $username, 'password' => $password, 'additionalData' => $data, "msg" => "Nice, you are logged in"));    
    } else {
        echo json_encode(array('username' => $username, 'password' => $password, 'additionalData' => $data, "msg" => "Try again"));
    }

} else {
    echo json_encode($data);
}






?>
