<?

$Nombre			= $_POST['Nombre'];
$Email 			= $_POST['Email'];
$Mensaje 		= $_POST['Mensaje'];
$Asunto 		= $_POST['Asunto'];
$Contacto		= "Contacto desde Epocampo.com.ar";

$gracias="../contacto.html";

global $email; 

mail ("info@epocampo.com.ar",                       
        "$Contacto",
      "Nombre: $Nombre\nEmail: $Email\nAsunto: $Asunto\n\nMensaje: $Mensaje",
      "From: $Email"
     );

Header ("Location: $gracias");

?>

