function validate_form ( )
{
    valid = true;
	var msg = '';

    if ( document.form.Nombre.value == "" ){ msg += "El campo 'Nombre' es requerido.\n"; valid = false; };
    if ( document.form.Apellido.value == "" ){ msg += "El campo 'Apellido' es requerido.\n"; valid = false; };
    if ( document.form.Email.value == "" ){ msg += "El campo 'Email' es requerido.\n"; valid = false; };
    if ( document.form.Mensaje.value == "" ){ msg += "El campo 'Mensaje' es requerido.\n"; valid = false; };
	/*
	
	email validation
	
	*/
	 if ( document.form.Email.value != "" ){
	    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	    var address = document.form.Email.value ;
	    if(reg.test(address) == false) {
    		  msg += "El Email no es valido."; valid = false; 
  		};
	};
	
		/*
	
		num validation
	
		
		 if ( document.contacto.Telefono.value != "" ){
	    var reg = /^([0-9])*$/;
	    var address = document.contacto.Telefono.value ;
	    if(reg.test(address) == false) {
    		  msg += "El Telefono no es valido.\n"; valid = false; 
  		};
	};*/
	
	///////////////////////////////
	if ( valid == false ) {
		alert(msg);
	};
    return valid;
}


