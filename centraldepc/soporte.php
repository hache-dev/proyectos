<?

$Nombre			= $_POST['Nombre'];
$Apellido		= $_POST['Apellido'];
$Telefono 		= $_POST['Telefono'];
$Mensaje 		= $_POST['Mensaje'];
$Asunto 		= "Contacto Central de PC";

$gracias="end.html";

global $email; 

                  
$ip        = $_SERVER['REMOTE_ADDR'];           
$navegador = $_SERVER['HTTP_USER_AGENT'];       

mail ("turehh@gmail.com",                       
      "$Asunto",
      "Ip: $ip\nNavegador: $navegador\nNombre: $Nombre\nApellido: $Apellido\nTelefono: $Telefono\n\nMensaje: $Mensaje",
      "From: $Email"
     );
	 
Header ("Location: $gracias");

?>


	     

