<?

// Formulario de contacto 
// Branca-Team.com.ar

$Nombre			= $_POST['Nombre'];
$Email 			= $_POST['Email'];
$Mensaje 		= $_POST['Mensaje'];
$Asunto 		= "Contacto desde Branca-Team.com.ar";

$gracias="end.html";

global $email; 

$ip        = $_SERVER['REMOTE_ADDR'];           
$navegador = $_SERVER['HTTP_USER_AGENT'];       

mail ("ventas@branca-team.com.ar",                       
      "$Asunto",
      "Ip: $ip\nNavegador: $navegador\nNombre: $Nombre\nEmail: $Email\n\nMensaje: $Mensaje",
      "From: $Email"
     );
	 
Header ("Location: $gracias");

?>
