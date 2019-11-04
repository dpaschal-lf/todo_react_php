<?php
require('functions.php');
set_exception_handler('errorHandler');
allowCORs();
require_once('mysqlconnect.php');

$allowedFields = ['title','description','status'];

$query = "UPDATE `todoitems` SET ";

foreach($allowedFields as $key){
    if(!empty($_POST[$key])){
        $query .= "`$key`='".addSlashes($_POST[$key])."',";
    }
}
$query = substr($query, 0, -1);

if(empty($_POST['id']) || !is_numeric($_POST['id'])){
    throw new Exception('id must be supplied and be a number');
}

$query.=" WHERE `ID`=".intval($_POST['id']);

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception('error with query '. mysqli_error($conn));
}

if(mysqli_affected_rows($conn)>0){
    print( json_encode(['success'=>true]));
}

?>