<?php
header("Access-Control-Allow-Origin: *");
require_once('mysqlconnect.php');

if(empty($_GET['id'])){
    $query = "SELECT `title`, `ID`, `added`, `status` FROM `todoitems`";
} else {
    $query = "SELECT * FROM `todoitems` WHERE `ID` = ". intval($_GET['id']);
}

$result = mysqli_query($conn, $query);

$data = [];

if(mysqli_num_rows($result)){
    while($row=mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
}

print( json_encode($data));
?>