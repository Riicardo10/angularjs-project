<?php
    include_once('../classes/class.Database.php');

    $postData = file_get_contents("php://input");

    $request = json_decode($postData);

    $request = (array) $request;

    if( isset( $request['id'] ) ) {
        
        $query =    "UPDATE clientes 
                        SET 
                            nombre      ='" . $request['nombre'] . "',
                            correo      ='" . $request['correo'] . "',
                            zip         ='" . $request['zip'] . "',
                            telefono1   ='" . $request['telefono1'] . "',
                            telefono2   ='" . $request['telefono2'] . "',
                            pais        ='" . $request['pais'] . "',
                            direccion   ='" . $request['direccion'] . "'
                        WHERE
                            id=" . $request['id'];

        $success = Database::ejecutar_idu( $query );

        if( is_numeric( $success ) OR $success === true ) {
            $response = array(
                'err' => false,
                'msg' => 'Row updated'
            );
        }
        else {
            $response = array(
                'err' => true,
                'msg' => $success
            );
        }

    }
    else {

        $query =    "INSERT INTO clientes (nombre, correo, zip, telefono1, telefono2, pais, direccion)
                        VALUES (
                            '" . $request['nombre'] .  "',
                            '" . $request['correo'] .  "',
                            '" . $request['zip'] .  "',
                            '" . $request['telefono1'] .  "',
                            '" . $request['telefono2'] .  "',
                            '" . $request['pais'] .  "',
                            '" . $request['direccion'] . "')";

        $success = Database::ejecutar_idu( $query );

        if( is_numeric( $success ) OR $success === true ) {
            $response = array(
                'err' => false,
                'msg' => 'Row created'
            );
        }
        else {
            $response = array(
                'err' => true,
                'msg' => $success
            );
        }
    }

    echo json_encode($response);

?>