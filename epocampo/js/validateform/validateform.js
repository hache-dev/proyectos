function validate_form ( )
{
    valid = true;
	var msg = '';
    if ( document.contacto.Nombre.value == "" ){ msg += "El campo 'Nombre' es requerido.\n"; valid = false; };
    if ( document.contacto.Email.value == "" ){ msg += "El campo 'Email' es requerido.\n"; valid = false; };
    
    // Email validation
    if ( document.contacto.Email.value != "" ){
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.contacto.Email.value ;
	if(reg.test(address) == false) {
    	    msg += "El Email no es valido.\n"; valid = false; 
  	    };
	};
	if ( valid == false ) {
	    alert(msg);
	};
    return valid;
}
////////////////////////////////

function mercado_form ( )
{
    valid = true;
	var msg = '';
    if ( document.mercado.Nombre.value == "" ){ msg += "El campo 'Nombre' es requerido.\n"; valid = false; };
    if ( document.mercado.Email.value == "" ){ msg += "El campo 'Email' es requerido.\n"; valid = false; };
    //if ( document.negocio.Asunto.value == "" ){ msg += "El campo Asunto' es requerido.\n"; valid = false; };
    if($("#asunto option:selected").val() == "") { alert("El asunto es obligatorio"); return false; }
    
    // Email validation
	 if ( document.mercado.Email.value != "" ){
	    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	    var address = document.mercado.Email.value ;
	    if(reg.test(address) == false) {
    		  msg += "El Email no es valido.\n"; valid = false; 
  		};
	};
	
	if ( valid == false ) {
		alert(msg);
	};
    return valid;
}


