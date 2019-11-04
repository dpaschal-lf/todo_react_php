<?php

if(!function_exists('errorHandler')){
    function errorHandler($error){
        http_response_code(500);
        print(json_encode(['error'=>$error->getMessage()]));
        exit();
    }
}

if(!function_exists('allowCORs')){
    function allowCORs(){
        header("Access-Control-Allow-Origin: *");
    }
}

?>