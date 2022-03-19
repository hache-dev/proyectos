<?

$Nombre			= $_POST['Nombre'];
$Email 			= $_POST['Email'];
$Provincia		= $_POST['Provincia'];
$Ciudad			= $_POST['Ciudad'];
$Telefono		= $_POST['Telefono'];
$Asunto 		= $_POST['Asunto'];
$Comentario		= $_POST['Comentario'];
$Contacto		= "Contacto desde Entra al mercado";

$gracias="../contacto.html";

global $email; 

mail ("ventas@epocampo.com.ar",                       
        "$Contacto",
      "Nombre: $Nombre\nEmail: $Email\nProvincia: $Provincia\nCiudad: $Ciudad\nTelefono: $Telefono\nAsunto: $Asunto\n\nComentario: $Comentario",
      "From: $Email"
     );

Header ("Location: $gracias");

?>

