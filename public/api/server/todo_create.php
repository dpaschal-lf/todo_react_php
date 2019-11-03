<?php

require_once('mysqlconnect.php');

$title = "title";
$description = "description";


$query = "INSERT INTO `todo_items` SET `title`='$title', `description`='$description', `status`='active', `created`=NOW(), `updated`=NOW()";

$result = mysqli_query($conn, $query);

if(mysqli_affected_rows($conn)>0){
    $id = mysqli_insert_id($conn);
    print(json_encode(['id'=>$id]));
}

?>