<?php
header('Content-Type: application/json'); 
require_once 'connection.php'; 

try {    
    $conn = ConexionBD::setConnection(); // Corrige el nombre de la clase
    echo json_encode(["estadoDB" => "Conexión exitosa!!"]); 

} catch (Exception $e) {
    echo json_encode(["errorDB" => $e->getMessage()]); 
}
?>
