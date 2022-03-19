<?

// Formulario de contacto 
// Arosil.com.ar

$Nombre			= $_POST['Nombre'];
$Apellido		= $_POST['Apellido'];
$Telefono 		= $_POST['Telefono'];
$Email 			= $_POST['Email'];
$Mensaje 		= $_POST['Mensaje'];
$Asunto 		= "Contacto desde Arosil.com.ar";

$gracias="end.html";

global $email; 

                  
$ip        = $_SERVER['REMOTE_ADDR'];           
$navegador = $_SERVER['HTTP_USER_AGENT'];       

mail ("arosildecoraciones@yahoo.com.ar",                       
      "$Asunto",
      "Ip: $ip\nNavegador: $navegador\nNombre: $Nombre\nApellido: $Apellido\nTelefono: $Telefono\nEmail: $Email\n\nMensaje: $Mensaje",
      "From: $Email"
     );
	 
Header ("Location: $gracias");

?>


	     

