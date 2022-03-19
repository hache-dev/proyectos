<?

$Nombre			= $_POST['Nombre'];
$Apellido		= $_POST['Apellido'];
$Email 			= $_POST['Email'];
$Cliente                = $_POST['Cliente'];
$Mensaje 		= $_POST['Mensaje'];
$Asunto 		= "Contacto CRSERVERS.com.ar";
$gracias		= "contacto.html";

global $email;

                  
$ip        = $_SERVER['REMOTE_ADDR'];           
$navegador = $_SERVER['HTTP_USER_AGENT'];       

mail ("tuemail@dominio.com",                       
      "$Asunto",
      "Ip: $ip\nNavegador: $navegador\nNombre: $Nombre\nApellido: $Apellido\nEmail: $Email\nCliente: $Cliente\n\nMensaje: $Mensaje",
      "From: $Email"
     );
	 
Header ("Location: $gracias");

?>

