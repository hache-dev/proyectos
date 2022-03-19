function validate_form ( )
{
    valid = true;
	var msg = '';

    if ( document.contacto.Nombre.value == "" ){ msg += "El campo 'Nombre' es requerido.\n"; valid = false; };
	if ( document.contacto.Apellido.value == "" ){ msg += "El campo 'Apellido' es requerido.\n"; valid = false; };
	if ( document.contacto.Telefono.value == "" ){ msg += "El campo 'Telefono' es requerido.\n"; valid = false; };
    if ( document.contacto.Mensaje.value == "" ){ msg += "El campo 'Mensaje' es requerido.\n"; valid = false; };
		/*
	
		num validation
	
		*/
		 if ( document.contacto.Telefono.value != "" ){
	    var reg = /^([0-9])*$/;
	    var address = document.contacto.Telefono.value ;
	    if(reg.test(address) == false) {
    		  msg += "El Telefono no es valido.\n"; valid = false; 
  		};
	};
	
	///////////////////////////////
	if ( valid == false ) {
		alert(msg);
	};
    return valid;
}


