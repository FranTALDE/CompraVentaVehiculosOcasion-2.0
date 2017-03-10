
// Creacion del dialogo

$("#capaFrmGestionEmpleados").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmGestionarEmpleados")[0].reset();
    },
    closeOnEscape: false, // No se cierra con ESCAPE
    hide: {
        effect: "fold",
        duration: 1000
    },
	modal: true,
    show: "fold",
    width:"765px",
   buttons: [{
        text: "Aceptar",
        click: validar
    }, {
        text: "Volver",
        click: function() {
            $(this).dialog("close");
        }
    }]
});
		
    




function validar(){
	var idEmpleado = document.getElementById("textIdEmpleado").value.trim();
	var tipoEmpleado = "";

	var sMensaje = "";

	var expReg = /^\d{8}\w$/; //Campo obligatorio. Admite 8 dígitos y 1 letra

	var fallos = false;

	//Miramos que tipo de empleado es
	if(document.getElementById("tipoEmpleado0").checked)
		tipoEmpleado = "Director Compras";
	else
		tipoEmpleado = "Comercial Ventas";
		
	if(expReg.test(idEmpleado) == false){
		document.getElementById("spanIdEmpleado").style.display = "block";
		document.getElementById("textIdEmpleado").style.background = "yellow";
		fallos=true;
	}
	else{
		document.getElementById("textIdEmpleado").style.background = "none";
		document.getElementById("spanIdEmpleado").style.display = "none";
	}
	//Si no hay fallos miramos que opcion esta marcada (alta,baja,modificar)
	if(fallos==false){
		//Hacemos el alta
		if(document.getElementById("altaGestionEmpleados").checked){
			altaEmpleado();
		}
		//Hacemos la baja
		if(document.getElementById("bajaGestionEmpleados").checked){
			bajaEmpleado();
		}
		//Hacemos la modificación
		if(document.getElementById("modificarGestionEmpleados").checked){
			modificarEmpleado();
		}		
	}	
}
function altaEmpleado(){
	var oEmpleado = { 
		idEmpleado: frmGestionarEmpleados.textIdEmpleado.value.trim(),
		tipoEmpleado: frmGestionarEmpleados.tipoEmpleado.value.trim()
	};
	
	var sURL = "php/altaEmpleado.php";
	var sParametros = "datos=" + JSON.stringify(oEmpleado);
	
	peticionAjax(sURL,sParametros);
}

function bajaEmpleado(){
	var sURL = "php/bajaEmpleado.php";
	var sParametros = "idEmpleado=" + frmGestionarEmpleados.textIdEmpleado.value.trim();

	peticionAjax(sURL,sParametros);
}

function modificarEmpleado(){
	var oEmpleado = { 
		idEmpleado: frmGestionarEmpleados.textIdEmpleado.value.trim(),
		tipoEmpleado: frmGestionarEmpleados.tipoEmpleado.value.trim()		
	};
	
	var sURL = "php/modificarEmpleado.php";
	var sParametros = "datos=" + JSON.stringify(oEmpleado);
	
	peticionAjax(sURL,sParametros);
}


/* Gestion de Empleados*/

$("#altaGestionEmpleados").click(function () {//Habilitamos los campos del formulario para el alta de empleados

	document.getElementById("radiosTipoEmpleado").style.display = "block";
});

$("#bajaGestionEmpleados").click(function () {//Habilitamos los campos del formulario para la baja de empleados

	document.getElementById("radiosTipoEmpleado").style.display = "none";
});

$("#modificarGestionEmpleados").click(function () {//Habilitamos los campos del formulario para modificar los empleados

	document.getElementById("radiosTipoEmpleado").style.display = "block";
});



