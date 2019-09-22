<?php

$page = isset($_GET['page']) ? $page = $_GET['page'] : 1;

include_once('../classes/class.Database.php');
    $response = Database::get_todo_paginado( 'clientes', $page );
    echo json_encode($response);
?>