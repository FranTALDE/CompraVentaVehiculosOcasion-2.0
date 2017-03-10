// Instanciamos el objeto principal
var oConcesionario = new Concesionario();

// Cargar datos desde XML
//oConcesionario.cargarDatosXML();

/*##################################################################################*/
// Creación de dialogo de mensajes
var oDlgMensaje = $("#mensajes").dialog({
	autoOpen: false,
	hide: "fold",
	show: "fold",
	height: "auto",
	width: "auto",
	modal: true
});

// DIALOGOS
/*  El dialogo de este formulario, tanto como el formulario los cargamos por carga dinamica
var oDlgGestionEmpleados = $("#frmGestionarEmpleados").dialog({
	autoOpen: false,
	hide: "fold",
	show: "fold",
	height: "auto",
	width: "788px",
	modal: true
});
*/

var oDlgGestionProveedores = $("#frmGestionarProveedores").dialog({
	autoOpen: false,
	hide: "fold",
	show: "fold",
	height: "auto",
	width: "765px",
	modal: true
});

var oDlgGestionClientes = $("#frmGestionarClientes").dialog({
	autoOpen: false,
	hide: "fold",
	show: "fold",
	height: "auto",
	width: "765px",
	modal: true
});

var oDlgGestionVehiculos = $("#frmGestionarVehiculos").dialog({
	autoOpen: false,
	hide: "fold",
	show: "fold",
	height: "auto",
	width: "765px",
	modal: true
});

var oDlgGestionCompraVenta = $('#frmGestionarCompraVenta').dialog({
	autoOpen: false,
	hide: "fold",
	show: "fold",
	height: "auto",
	width: "1070px",
	modal: true
});


//PETICIONES AJAX

var oAjax = null;

function inicializa_xhr() {
  if (window.XMLHttpRequest) {
	    return new XMLHttpRequest(); 
  } else if (window.ActiveXObject) {
	    return new ActiveXObject("Microsoft.XMLHTTP"); 
  } 
}

function peticionAjax(sURL,sParametros){
	// PRIMERO: configuracion de la peticion
	oAjax = inicializa_xhr();

	oAjax.open("POST",sURL,true);
	
	oAjax.addEventListener("readystatechange",procesarRespuesta,false);	

	oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	// SEGUNDO : hacer la peticion
	oAjax.send(sParametros);	
}

function procesarRespuesta(){
	// TERCERO: procesar respuesta cuando llega
	if (oAjax.readyState == 4 && oAjax.status == 200){
	
		// JSON.parse cadena --> objeto
		// JSON.stringify objeto --> cadena
		 var oObjeto = JSON.parse(oAjax.responseText);
		 
		 switch(oObjeto.accion){
		 	case 100: // alta
		 	case 200: // baja
			case 300: // modif
		 		oDlgMensaje.dialog("option","title", oObjeto.mensaje);
		 		$("#pResultado").text(oObjeto.resultado);

				oDlgMensaje.dialog("open");	 
			break;	

			case 400://listadoEmpleados
				oDlgMensaje.dialog("option","title", oObjeto.mensaje);
		 		$("#Empleados").text(oObjeto.resultado);

				oDlgMensaje.dialog("open");	 
			
		 }
	}
}  
/*
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
*/
function altaProveedor(){
	var oProveedor = { 
		idProveedor: frmGestionarProveedores.txtIdProveedor.value.trim(),
		nombreProveedor: frmGestionarProveedores.txtNombreProveedor.value.trim(),
		apellidoProveedor: frmGestionarProveedores.txtApellidoProveedor.value.trim(),
		telefonoProveedor: frmGestionarProveedores.textTelefonoProveedor.value.trim(),
		nombreEmpresaProveedor: frmGestionarProveedores.txtNombreEmpresa.value.trim()
	};
	
	var sURL = "php/altaProveedor.php";
	var sParametros = "datos=" + JSON.stringify(oProveedor);
	
	peticionAjax(sURL,sParametros);
}

function bajaProveedor(){
	var sURL = "php/bajaProveedor.php";
	var sParametros = "idProveedor=" + frmGestionarProveedores.txtIdProveedor.value.trim();

	peticionAjax(sURL,sParametros);
}

function modificarProveedor(){
	var oProveedor = {
		idProveedor: frmGestionarProveedores.txtIdProveedor.value.trim(),
		nombreProveedor: frmGestionarProveedores.txtNombreProveedor.value.trim(),
		apellidoProveedor: frmGestionarProveedores.txtApellidoProveedor.value.trim(),
		telefonoProveedor: frmGestionarProveedores.textTelefonoProveedor.value.trim(),
		nombreEmpresaProveedor: frmGestionarProveedores.txtNombreEmpresa.value.trim()
	};
	
	var sURL = "php/modificarProveedor.php";
	var sParametros = "datos=" + JSON.stringify(oProveedor);
	
	peticionAjax(sURL,sParametros);
}

function altaCliente(){
	var oCliente = { 
		idCliente: frmGestionarClientes.txtIdCliente.value.trim(),
		nombreCliente: frmGestionarClientes.txtNombre.value.trim(),
		apellidoCliente: frmGestionarClientes.txtApellido.value.trim(),
		telefonoCliente: frmGestionarClientes.textTelefono.value.trim()
	};
	
	var sURL = "php/altaCliente.php";
	var sParametros = "datos=" + JSON.stringify(oCliente);
	
	peticionAjax(sURL,sParametros);
}

function bajaCliente(){
	var sURL = "php/bajaCliente.php";
	var sParametros = "idCliente=" + frmGestionarClientes.txtIdCliente.value.trim();

	peticionAjax(sURL,sParametros);
}

function modificarCliente(){
	var oCliente = { 
		idCliente: frmGestionarClientes.txtIdCliente.value.trim(),
		nombreCliente: frmGestionarClientes.txtNombre.value.trim(),
		apellidoCliente: frmGestionarClientes.txtApellido.value.trim(),
		telefonoCliente: frmGestionarClientes.textTelefono.value.trim()
	};
	
	var sURL = "php/modificarCliente.php";
	var sParametros = "datos=" + JSON.stringify(oCliente);
	
	peticionAjax(sURL,sParametros);
}

function altaVehiculo(){
	var arrayExtras = [];
	$('#frmGestionarVehiculos [name="checkExtras[]"]:checked').map(function(){
		arrayExtras.push($(this).val());
	});

	//alert(arrayExtras.toString());

	var oVehiculo = {
		matricula: frmGestionarVehiculos.txtMatricula.value.trim(),
		precio: frmGestionarVehiculos.txtPrecio.value.trim(),
		categoria: frmGestionarVehiculos.lstCategoria.value,
		extras: arrayExtras
	};
	
	var sURL = "php/altaVehiculo.php";
	var sParametros = "datos=" + JSON.stringify(oVehiculo);
	
	peticionAjax(sURL,sParametros);
}

function bajaVehiculo(){
	var sURL = "php/bajaVehiculo.php";
	var sParametros = "matricula=" + frmGestionarVehiculos.lstVehiculos.value;

	peticionAjax(sURL,sParametros);
}
	
function modificarVehiculo(){
	var arrayExtras = [];
	$('#frmGestionarVehiculos [name="checkExtras[]"]:checked').map(function(){
		arrayExtras.push($(this).val());
	});

	//alert(arrayExtras.toString());

	var oVehiculo = {
		matricula: frmGestionarVehiculos.lstVehiculos.value,
		precio: frmGestionarVehiculos.txtPrecio.value.trim(),
		categoria: frmGestionarVehiculos.lstCategoria.value,
		extras: arrayExtras
	};
	
	var sURL = "php/modificarVehiculo.php";
	var sParametros = "datos=" + JSON.stringify(oVehiculo);
	
	peticionAjax(sURL,sParametros);
}	

function altaCompra(){
	var oCompra = {
		id: frmGestionarCompraVenta.txtIdCompra.value.trim(),
		importe: frmGestionarCompraVenta.txtImporteCompra.value.trim(),
		fecha: frmGestionarCompraVenta.fechaCompra.value,
		idPersona: frmGestionarCompraVenta.lstEmpleadosC.value,
		matricula: frmGestionarCompraVenta.lstVehiculosC.value
	};
	
	var sURL = "php/altaCompra.php";
	var sParametros = "datos=" + JSON.stringify(oCompra);
	
	peticionAjax(sURL,sParametros);
}

function altaVenta(){
	
	var oVenta = {
		id: document.getElementById("txtIdVenta").value.trim(),
		importe: document.getElementById("txtImporteVenta").value.trim(),
		fecha: document.getElementById("fechaVenta").value,
		idPersona: document.getElementById("lstEmpleadosV").value,
		matricula: document.getElementById("lstVehiculosV").value
	};
	
	var sURL = "php/altaVenta.php";
	var sParametros = "datos=" + JSON.stringify(oVenta);
	
	peticionAjax(sURL,sParametros);
}

/*##################################################################################*/

// Mostrar mensaje
function mostrarMensaje(mensaje, tipo){
	if(tipo === undefined) {
		tipo = "info";
	}
	document.getElementById("contenedor_mensaje").innerHTML = "<div class='alert alert-"+ tipo +"'>"+ mensaje +"</div>";
	document.getElementById("contenedor_mensaje").style.display = "block";
}

/* Funciones Mostrar / ocultar el menu*/
/*function mostrarMenu(){
	document.getElementById("principal").style.display = "block";
	document.getElementById("portada").style.display = "block";
}

function ocultarMenu(){
	document.getElementById("principal").style.display = "none";
	document.getElementById("portada").style.display = "none";
}

 FUNCION OCULTAR FORMULARIOS

function ocultarFormularios(){
	document.getElementById("frmGestionarEmpleados").style.display = "none";
	document.getElementById("frmGestionarProveedores").style.display = "none";
	document.getElementById("frmGestionarClientes").style.display = "none";
	document.getElementById("frmGestionarVehiculos").style.display = "none";
	document.getElementById("frmGestionarCompraVenta").style.display = "none";
	document.getElementById("frmAltaCompra").style.display = "none";
	document.getElementById("frmAltaVenta").style.display = "none";
	document.getElementById("contenedor_mensaje").style.display = "none";
}

FUNCIONES  HABILITAR / DESABILITAR CAMPOS EN LOS FORMULARIOS
Gestion de Empleados
function desabilitarGestionEmpleados(){
	document.getElementById("radiosTipoEmpleado").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de empleados
function gestionEmpleadosAlta(){
	document.getElementById("radiosTipoEmpleado").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de empleados
function gestionEmpleadosBaja(){
	document.getElementById("radiosTipoEmpleado").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los empleados
function gestionEmpleadosModificar(){
	document.getElementById("radiosTipoEmpleado").style.display = "block";
}

Gestion de Proveedores*/
function desabilitarGestionProveedores(){
	document.getElementById("filaNombreProveedor").style.display = "none";
	document.getElementById("filaApellidoProveedor").style.display = "none";
	document.getElementById("filaTelefonoProveedor").style.display = "none";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de Proveedores
function gestionProveedoresAlta(){
	document.getElementById("filaNombreProveedor").style.display = "block";
	document.getElementById("filaApellidoProveedor").style.display = "block";
	document.getElementById("filaTelefonoProveedor").style.display = "block";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de Proveedores
function gestionProveedoresBaja(){
	document.getElementById("filaNombreProveedor").style.display = "none";
	document.getElementById("filaApellidoProveedor").style.display = "none";
	document.getElementById("filaTelefonoProveedor").style.display = "none";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los Proveedores
function gestionProveedoresModificar(){
	document.getElementById("filaNombreProveedor").style.display = "block";
	document.getElementById("filaApellidoProveedor").style.display = "block";
	document.getElementById("filaTelefonoProveedor").style.display = "block";
	document.getElementById("filaNombreEmpresaProveedor").style.display = "block";
}

/*Gestion de Clientes*/
function desabilitarGestionClientes(){
	document.getElementById("filaNombreCliente").style.display = "none";
	document.getElementById("filaApellidoCliente").style.display = "none";
	document.getElementById("filaTelefonoCliente").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de Clientes
function gestionClientesAlta(){
	document.getElementById("filaNombreCliente").style.display = "block";
	document.getElementById("filaApellidoCliente").style.display = "block";
	document.getElementById("filaTelefonoCliente").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de Clientes
function gestionClientesBaja(){
	document.getElementById("filaNombreCliente").style.display = "none";
	document.getElementById("filaApellidoCliente").style.display = "none";
	document.getElementById("filaTelefonoCliente").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los Clientes
function gestionClientesModificar(){
	document.getElementById("filaNombreCliente").style.display = "block";
	document.getElementById("filaApellidoCliente").style.display = "block";
	document.getElementById("filaTelefonoCliente").style.display = "block";
}

/*Gestion de Vehículos*/
function desabilitarGestionVehiculos(){
	document.getElementById("filaPrecioVehiculo").style.display = "none";
	document.getElementById("filaCategoriaVehiculo").style.display = "none";
	document.getElementById("filaExtrasVehiculo").style.display = "none";
}

//Habilitamos los campos del formulario para el alta de Vehículos
function gestionVehiculosAlta(){
	document.getElementById("filaListaMatriculaVehiculo").style.display = "none";
	document.getElementById("filaMatriculaVehiculo").style.display = "block";
	document.getElementById("filaPrecioVehiculo").style.display = "block";
	document.getElementById("filaCategoriaVehiculo").style.display = "block";
	document.getElementById("filaExtrasVehiculo").style.display = "block";
}

//Habilitamos los campos del formulario para la baja de Vehículos
function gestionVehiculosBaja(){
	document.getElementById("filaListaMatriculaVehiculo").style.display = "block";
	document.getElementById("filaMatriculaVehiculo").style.display = "none";
	document.getElementById("filaPrecioVehiculo").style.display = "none";
	document.getElementById("filaCategoriaVehiculo").style.display = "none";
	document.getElementById("filaExtrasVehiculo").style.display = "none";
}

//Habilitamos los campos del formulario para modificar los Vehículos
function gestionVehiculosModificar(){
	document.getElementById("filaListaMatriculaVehiculo").style.display = "block";
	document.getElementById("filaMatriculaVehiculo").style.display = "none";
	document.getElementById("filaPrecioVehiculo").style.display = "block";
	document.getElementById("filaCategoriaVehiculo").style.display = "block";
	document.getElementById("filaExtrasVehiculo").style.display = "block";
}

function gestionarCompra(){
	document.getElementById("frmAltaCompra").style.display = "block";	
	document.getElementById("frmAltaVenta").style.display = "none";
}

function gestionarVenta(){
	document.getElementById("frmAltaVenta").style.display = "block";
	document.getElementById("frmAltaCompra").style.display = "none";
}

/*#############################################################################################################################*/
/*VALIDACIONES DE LOS FORMULARIOS*/
/*VALIDACIONES EMPLEADOS*/
function reiniciarValidacionesEmpleados(){
	document.getElementById("textIdEmpleado").style.background = "none";
	document.getElementById("spanIdEmpleado").style.display = "none";
}

function validarAltaEmpleados(){
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
			/*var oEmpleado = new Empleado(idEmpleado,tipoEmpleado);
			sMensaje = oConcesionario.altaEmpleado(oEmpleado);*/
			altaEmpleado();
		}
		//Hacemos la baja
		if(document.getElementById("bajaGestionEmpleados").checked){
			//sMensaje = oConcesionario.bajaEmpleado(idEmpleado);
			bajaEmpleado();
		}
		//Hacemos la modificación
		if(document.getElementById("modificarGestionEmpleados").checked){
			/*oEmpleado = oConcesionario.getEmpleado(idEmpleado);
			oEmpleado.tipoEmpleado = tipoEmpleado;*/
			//sMensaje = "<strong>Empleado</strong> modificado correctamente";
			modificarEmpleado();
		}
		//mostrarMensaje(sMensaje);

		recargarFormularios();
	}
}

/*VALIDACIONES PROVEEDORES*/
function reiniciarValidacionesProveedores(){
	document.getElementById("txtIdProveedor").style.background = "none";
	document.getElementById("txtNombreProveedor").style.background = "none";
	document.getElementById("txtApellidoProveedor").style.background = "none";
	document.getElementById("textTelefonoProveedor").style.background = "none";
	document.getElementById("txtNombreEmpresa").style.background = "none";
	
	document.getElementById("spanIdProveedor").style.display = "none";
	document.getElementById("spanNombreProveedor").style.display = "none";
	document.getElementById("spanApellidoProveedor").style.display = "none";
	document.getElementById("spanTelefonoProveedor").style.display = "none";
	document.getElementById("spanNombreEmpresaProveedor").style.display = "none";
}

function validarAltaProveedores(){
	var idProveedor = document.getElementById("txtIdProveedor").value.trim();
	var nombreProveedor = document.getElementById("txtNombreProveedor").value.trim();
	var apellidoProveedor = document.getElementById("txtApellidoProveedor").value.trim();
	var telefonoProveedor = document.getElementById("textTelefonoProveedor").value.trim();
	var nombreEmpresa = document.getElementById("txtNombreEmpresa").value.trim();

	var sMensaje = "";

	var expRegNombreProveedor = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;//Campo obligatorio, debe contener 3 o más letras y empezar por mayúscula
	var expRegIdProveedor = /^\d{8}\w+$/;//Campo obligatorio, admite 1 o más dígitos
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;//Campo obligatorio de 9 digitos y que deben empezar por 9 o por 7 o por 6
	var expNombreEmpresa = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+((S.L|S.A)?)+$/; //Campo obligatorio, el nombre debe empezar por mayúscula y puede acabar con las siglas S.L o S.A

	var fallos = false;

	//Si está pulsado alta
	if(document.getElementById("altaGestionProveedores").checked){
		if(expRegIdProveedor.test(idProveedor) == false){
			document.getElementById("txtIdProveedor").style.background = "yellow";
			document.getElementById("spanIdProveedor").style.display = "block";
			fallos = true;
		}
		else{
			document.getElementById("txtIdProveedor").style.background = "none";
			document.getElementById("spanIdProveedor").style.display = "none";
		}
		
		if(expRegNombreProveedor.test(nombreProveedor) == false){
			document.getElementById("txtNombreProveedor").style.background = "yellow";
			document.getElementById("spanNombreProveedor").style.display = "block";
			fallos=true;
		}
		else{
			document.getElementById("txtNombreProveedor").style.background = "none";
			document.getElementById("spanNombreProveedor").style.display = "none";
		}
		
		if(expRegNombreProveedor.test(apellidoProveedor) == false){
			document.getElementById("spanApellidoProveedor").style.display = "block";
			document.getElementById("txtApellidoProveedor").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtApellidoProveedor").style.background = "none";
			document.getElementById("spanApellidoProveedor").style.display = "none";
		}
		
		if(expRegTelefono.test(telefonoProveedor) == false){
			document.getElementById("spanTelefonoProveedor").style.display = "block";
			document.getElementById("textTelefonoProveedor").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("spanTelefonoProveedor").style.display = "none";
			document.getElementById("textTelefonoProveedor").style.background = "none";
		}
		
		if(expNombreEmpresa.test(nombreEmpresa) == false){
			document.getElementById("spanNombreEmpresaProveedor").style.display = "block";
			document.getElementById("txtNombreEmpresa").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtNombreEmpresa").style.background = "none";
			document.getElementById("spanNombreEmpresaProveedor").style.display = "none";
		}
		//si no hay fallos en las validaciones hacemos el alta empleado	
		if(fallos==false){
			//var oProveedor = new Proveedor(idProveedor,nombreProveedor,apellidoProveedor,telefonoProveedor,nombreEmpresa);
			//sMensaje = oConcesionario.altaProveedor(oProveedor);
			altaProveedor();
		}
	}
	else{
		//Si está pulsado baja
		if(document.getElementById("bajaGestionProveedores").checked){
			if(expRegIdProveedor.test(idProveedor) == false){
				document.getElementById("spanIdProveedor").style.display = "block";
				document.getElementById("txtIdProveedor").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtIdProveedor").style.background = "none";
				document.getElementById("spanIdProveedor").style.display = "none";
			}
			//si no hay fallos hacemos la baja del proveedor
			if(fallos==false){
				//sMensaje = oConcesionario.bajaProveedor(idProveedor);
				bajaProveedor();
			}
		}
		else{
			//Si está pulsado modificar
			if(expRegIdProveedor.test(idProveedor) == false){
				document.getElementById("txtIdProveedor").style.background = "yellow";
				document.getElementById("spanIdProveedor").style.display = "block";
				fallos=true;
			}
			else{
				document.getElementById("txtIdProveedor").style.background = "none";
				document.getElementById("spanIdProveedor").style.display = "none";
			}
		
			if(expRegNombreProveedor.test(nombreProveedor) == false){
				document.getElementById("txtNombreProveedor").style.background = "yellow";
				document.getElementById("spanNombreProveedor").style.display = "block";
				fallos=true;
			}
			else{
				document.getElementById("txtNombreProveedor").style.background = "none";
				document.getElementById("spanNombreProveedor").style.display = "none";
			}
				
			if(expRegNombreProveedor.test(apellidoProveedor) == false){
				document.getElementById("spanApellidoProveedor").style.display = "block";
				document.getElementById("txtApellidoProveedor").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtApellidoProveedor").style.background = "none";
				document.getElementById("spanApellidoProveedor").style.display = "none";
			}
				
			if(expRegTelefono.test(telefonoProveedor) == false){
				document.getElementById("spanTelefonoProveedor").style.display = "block";
				document.getElementById("textTelefonoProveedor").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("spanTelefonoProveedor").style.display = "none";
				document.getElementById("textTelefonoProveedor").style.background = "none";
			}
				
			if(expNombreEmpresa.test(nombreEmpresa) == false){
				document.getElementById("spanNombreEmpresaProveedor").style.display = "block";
				document.getElementById("txtNombreEmpresa").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtNombreEmpresa").style.background = "none";
				document.getElementById("spanNombreEmpresaProveedor").style.display = "none";
			}
			//Si no hay fallos modificamos al proveedor
			if(fallos==false){
				//oProveedor = oConcesionario.getProveedor(idProveedor);
				//oProveedor.nombre = nombreProveedor;
				//oProveedor.apellido = apellidoProveedor;
				//oProveedor.movil = telefonoProveedor;
				//oProveedor.nomEmpresa = nombreEmpresa;
				//sMensaje = "<strong>Proveedor</strong> modificado correctamente";
				modificarProveedor();
			}
		}
	}
	if(sMensaje!="")
		mostrarMensaje(sMensaje);

	recargarFormularios();
}

/*VALIDACIONES CLIENTES*/
function reiniciarValidacionesClientes(){
	document.getElementById("txtIdCliente").style.background = "none";
	document.getElementById("txtNombre").style.background = "none";
	document.getElementById("txtApellido").style.background = "none";
	document.getElementById("textTelefono").style.background = "none";
	
	document.getElementById("spanIdCliente").style.display = "none";
	document.getElementById("spanNombreCliente").style.display = "none";
	document.getElementById("spanApellidoCliente").style.display = "none";
	document.getElementById("spanTelefonoCliente").style.display = "none";
}

function validarAltaClientes(){
	var idCliente = document.getElementById("txtIdCliente").value.trim();
	var nombreCliente = document.getElementById("txtNombre").value.trim();
	var apellidoCliente = document.getElementById("txtApellido").value.trim();
	var telefonoCliente = document.getElementById("textTelefono").value.trim();

	var sMensaje = "";

	var expRegNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;//Campo obligatorio, debe contener 3 o más letras y empezar por mayúscula
	var expRegId = /^\d{8}\w$/;//Campo obligatorio, admite 1 o más dígitos
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;//Campo obligatorio de 9 digitos y que deben empezar por 9 o por 7 o por 6

	var fallos = false;

	//Si está pulsado alta
	if(document.getElementById("altaGestionClientes").checked){
		if(expRegId.test(idCliente) == false){
			document.getElementById("spanIdCliente").style.display = "block";
			document.getElementById("txtIdCliente").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtIdCliente").style.background = "none";
			document.getElementById("spanIdCliente").style.display = "none";
		}
		
		if(expRegNombre.test(nombreCliente) == false){
			document.getElementById("spanNombreCliente").style.display = "block";
			document.getElementById("txtNombre").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtNombre").style.background = "none";
			document.getElementById("spanNombreCliente").style.display = "none";
		}
		
		if(expRegNombre.test(apellidoCliente) == false){
			document.getElementById("spanApellidoCliente").style.display = "block";
			document.getElementById("txtApellido").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("txtApellido").style.background = "none";
			document.getElementById("spanApellidoCliente").style.display = "none";
		}
		
		if(expRegTelefono.test(telefonoCliente) == false){
			document.getElementById("spanTelefonoCliente").style.display = "block";
			document.getElementById("textTelefono").style.background = "yellow";
			fallos=true;
		}
		else{
			document.getElementById("textTelefono").style.background = "none";
			document.getElementById("spanTelefonoCliente").style.display = "none";
		}
		//Si no hay fallos hacemos la alta del cliente
		if(fallos==false){
			//var oCliente = new Cliente(idCliente,nombreCliente,apellidoCliente,telefonoCliente);
			//sMensaje = oConcesionario.altaCliente(oCliente);
			altaCliente();
			
		}
	}
	else{
		//Si está pulsado baja
		if(document.getElementById("bajaGestionClientes").checked){
			if (expRegId.test(idCliente) == false){
				document.getElementById("spanIdCliente").style.display = "block";
				document.getElementById("txtIdCliente").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtIdCliente").style.background = "none";
				document.getElementById("spanIdCliente").style.display = "none";
			}
			//Si no hay fallos hacemos la baja del cliente
			if(fallos==false){
				//sMensaje = oConcesionario.bajaCliente(idCliente);
				bajaCliente();
			}
		}
		else{
			//Si está pulsado modificar
			if(expRegId.test(idCliente) == false){
				document.getElementById("spanIdCliente").style.display = "block";
				document.getElementById("txtIdCliente").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtIdCliente").style.background = "none";
				document.getElementById("spanIdCliente").style.display = "none";
			}
			
			if(expRegNombre.test(nombreCliente) == false){
				document.getElementById("spanNombreCliente").style.display = "block";
				document.getElementById("txtNombre").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtNombre").style.background = "none";
				document.getElementById("spanNombreCliente").style.display = "none";
			}
			
			if(expRegNombre.test(apellidoCliente) == false){
				document.getElementById("spanApellidoCliente").style.display = "block";
				document.getElementById("txtApellido").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("txtApellido").style.background = "none";
				document.getElementById("spanApellidoCliente").style.display = "none";
			}
			
			if(expRegTelefono.test(telefonoCliente) == false){
				document.getElementById("spanTelefonoCliente").style.display = "block";
				document.getElementById("textTelefono").style.background = "yellow";
				fallos=true;
			}
			else{
				document.getElementById("textTelefono").style.background = "none";
				document.getElementById("spanTelefonoCliente").style.display = "none";
			}
			//Si no hay fallos hacemos la modificación del cliente
			if(fallos==false){
				//oCliente = oConcesionario.getCliente(idCliente);
				//oCliente.nombre = nombreCliente;
				//oCliente.apellido = apellidoCliente;
				//oCliente.movil = telefonoCliente;
				//sMensaje = "<strong>Cliente</strong> modificado correctamente";
				modificarCliente();
			}
		}
	}
	if(sMensaje!="")
		mostrarMensaje(sMensaje);

	recargarFormularios();	
}

/*VALIDACIONES VEHICULO*/
function reiniciarValidacionesVehiculos(){
	document.getElementById("txtMatricula").style.background = "none";
	document.getElementById("txtPrecio").style.background = "none";
	
	document.getElementById("spanMatriculaVehiculo").style.display = "none";
	document.getElementById("spanPrecioVehiculo").style.display = "none";
}

function validarAltaVehiculo(){
	var matricula = document.getElementById("txtMatricula").value.trim();
	var lstMatricula = document.getElementById("lstVehiculos").value;
	var precio = document.getElementById("txtPrecio").value.trim();
	var lstCategoria = document.getElementById("lstCategoria").value;

	var sMensaje = "";

	var extras = [];

	for(var i = 0; i < oConcesionario.extras.length; i++){
		if(document.getElementById("checkExtras-" + i).checked){
			var extra = oConcesionario.getExtra(document.getElementById("checkExtras-"+i).value);
			extras.push(extra);
		}
	}

	var expRegMatricula = /^\d{4}([A-Z]{1,3})$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}$/;

	var errores = false;

	if(expRegMatricula.test(matricula) == false){
		document.getElementById("spanMatriculaVehiculo").style.display = "block";
		document.getElementById("txtMatricula").style.background = "yellow";
		errores = true;
	}
	else{
		document.getElementById("txtMatricula").style.background = "none";
		document.getElementById("spanMatriculaVehiculo").style.display = "none";
		errores = false;
	}
	
	if(expRegPrecio.test(precio) == false){
		document.getElementById("spanPrecioVehiculo").style.display = "block";
		document.getElementById("txtPrecio").style.background = "yellow";
		errores = true;
	}
	else{
		document.getElementById("txtPrecio").style.background = "none";
		document.getElementById("spanPrecioVehiculo").style.display = "none";
		errores = false;
	}

	//Hacemos la baja
	if(document.getElementById("bajaGestionVehiculos").checked){
		//sMensaje = oConcesionario.bajaVehiculo(lstMatricula);
		bajaVehiculo();
		recargarFormularios();
	}

	if(!errores){
		//Hacemos el alta
		if(document.getElementById("altaGestionVehiculos").checked){
			//var oVehiculo = new Vehiculo(matricula, precio, oConcesionario.getCategoria(lstCategoria), extras);
			//sMensaje = oConcesionario.altaVehiculo(oVehiculo);
			altaVehiculo();
		}
		//Hacemos la modificación
		if(document.getElementById("modificarGestionVehiculos").checked){
			//oVehiculo = oConcesionario.getVehiculo(lstMatricula);
			//oVehiculo.precio = precio;
			//oVehiculo.categoria = oConcesionario.getCategoria(lstCategoria);
			//oVehiculo.extras = extras;
			//sMensaje = "<strong>Vehiculo</strong> modificado correctamente";
			modificarVehiculo();
		}
		recargarFormularios();
	}

	if(sMensaje!="")
		mostrarMensaje(sMensaje);
}
/*VALIDACIONES COMPRA*/
function reiniciarValidacionesCompra(){
	document.getElementById("txtIdCompra").style.background = "none";
	document.getElementById("fechaCompra").style.background = "none";
	document.getElementById("txtImporteCompra").style.background="none"
	
	document.getElementById("spanImporteCompra").style.display = "none";
	document.getElementById("spanIdCompra").style.display = "none";
	document.getElementById("spanFechaCompra").style.display = "none";
}

function validarAltaCompra(){
	var oProveedor = oConcesionario.getProveedor(document.getElementById("lstProveedores").value);
	var oVehiculo = oConcesionario.getVehiculo(document.getElementById("lstVehiculosC").value);
	var idCompra = document.getElementById("txtIdCompra").value.trim();
	var importe = document.getElementById("txtImporteCompra").value.trim();
	var fecha = document.getElementById("fechaCompra").value.trim();
	var oEmpleado = oConcesionario.getEmpleado(document.getElementById("lstEmpleadosC").value);

	var sMensaje = "";

	var expRegIdCompra = /^\d{1,5}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}$/;
	var expRegFecha = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

	var fallos = false;

	if(expRegIdCompra.test(idCompra) == false){
		document.getElementById("txtIdCompra").style.background = "yellow";
		document.getElementById("spanIdCompra").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("txtIdCompra").style.background = "none";
		document.getElementById("spanIdCompra").style.display = "none";
	}
	if(expRegPrecio.test(importe) == false){
		document.getElementById("spanImporteCompra").style.display = "block";
		document.getElementById("txtImporteCompra").style.background = "yellow";
		errores = true;
	}
	else{
		document.getElementById("txtImporteCompra").style.background = "none";
		document.getElementById("spanImporteCompra").style.display = "none";
		errores = false;
	}
	if(expRegFecha.test(fecha) == false){
		document.getElementById("fechaCompra").style.background = "yellow";
		document.getElementById("spanFechaCompra").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("fechaCompra").style.background = "none";
		document.getElementById("spanFechaCompra").style.display = "none";
	}
	if(fallos==false){
		//var oCompra = new Compra(oProveedor,oVehiculo,idCompra,importe,fecha,oEmpleado);
		//sMensaje = oConcesionario.altaCompra(oCompra);
		//mostrarMensaje(sMensaje);
		altaCompra();
	}		
}

/*VALIDACIONES VENTA*/
function reiniciarValidacionesVenta(){
	document.getElementById("txtIdVenta").style.background = "none";
	document.getElementById("fechaVenta").style.background = "none";
	document.getElementById("txtImporteVenta").style.background="none"
	
	document.getElementById("spanIdVenta").style.display = "none";
	document.getElementById("spanFechaVenta").style.display = "none";
	document.getElementById("spanImporteVenta").style.display = "none";
}

function validarAltaVenta(){
	var oCliente = oConcesionario.getCliente(document.getElementById("lstClientes").value);
	var oVehiculo = oConcesionario.getVehiculo(document.getElementById("lstVehiculosV").value);
	var idVenta = document.getElementById("txtIdVenta").value.trim();
	var importe = document.getElementById("txtImporteVenta").value.trim();
	var fecha = document.getElementById("fechaVenta").value.trim();
	var oEmpleado = oConcesionario.getEmpleado(document.getElementById("lstEmpleadosV").value);

	var sMensaje = "";
	
	var expRegIdVenta = /^\d{1,5}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}$/;
	var expRegFecha = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

	var fallos = false;

	if(expRegIdVenta.test(idVenta) == false){
		document.getElementById("txtIdVenta").style.background = "yellow";
		document.getElementById("spanIdVenta").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("txtIdVenta").style.background = "none";
		document.getElementById("spanIdVenta").style.display = "none";
	}
	if(expRegPrecio.test(importe) == false){
		document.getElementById("spanImporteVenta").style.display = "block";
		document.getElementById("txtImporteVenta").style.background = "yellow";
		errores = true;
	}
	else{
		document.getElementById("txtImporteVenta").style.background = "none";
		document.getElementById("spanImporteVenta").style.display = "none";
		errores = false;
	}
	if(expRegFecha.test(fecha) == false){
		document.getElementById("fechaVenta").style.background = "yellow";
		document.getElementById("spanFechaVenta").style.display = "block";
		fallos = true;
	}
	else{
		document.getElementById("fechaVenta").style.background = "none";
		document.getElementById("spanFechaVenta").style.display = "none";
	}
	if(fallos==false){
		//var oVenta = new Venta(oCliente,oVehiculo,idVenta,importe,fecha,oEmpleado);
		//sMensaje = oConcesionario.altaVenta(oVenta);
		//mostrarMensaje(sMensaje);
		altaVenta();
	}
}
/*#############################################################################################################################*/

/* EVENTOS QUE SE PRODUCEN AL PULSAR EN LOS DIVERSOS BOTONES DE LOS FORMULARIOS*/
//Eventos según el botón o el radio en los formularios
function mostrarCompraVenta(oEvento){
	var oE = oEvento || window.event;
	
	// <> de undefined
	if(oE.target.id){
		opcion = oE.target.id;
		
		switch(opcion){
			//caso volver todos los formularios
			case 'volver':
				//oDlgGestionEmpleados.dialog("close");
				oDlgGestionProveedores.dialog("close");
				oDlgGestionClientes.dialog("close");
				oDlgGestionVehiculos.dialog("close");
				oDlgGestionCompraVenta.dialog("close");
				//ocultarFormularios();
				//mostrarMenu();
			break;
			
			// Formulario gestion Empleados
			/*case 'altaGestionEmpleados':
				desabilitarGestionEmpleados();
				reiniciarValidacionesEmpleados();
				gestionEmpleadosAlta();				
			break;
			
			case 'bajaGestionEmpleados':
				desabilitarGestionEmpleados();
				reiniciarValidacionesEmpleados();
				gestionEmpleadosBaja();
			break;
			
			case 'modificarGestionEmpleados':
				desabilitarGestionEmpleados();
				reiniciarValidacionesEmpleados();
				gestionEmpleadosModificar();
			break;
			
			case 'aceptarEmpleados':
				validarAltaEmpleados();
			break;*/
			
			// Formulario gestion Proveedores
			case 'altaGestionProveedores':
				desabilitarGestionProveedores();
				reiniciarValidacionesProveedores();
				gestionProveedoresAlta();
			break;
			
			case 'bajaGestionProveedores':
				desabilitarGestionProveedores();
				reiniciarValidacionesProveedores();
				gestionProveedoresBaja();
			break;
			
			case 'modificarGestionProveedores':
				desabilitarGestionProveedores();
				reiniciarValidacionesProveedores();
				gestionProveedoresModificar();
			break;
			
			case 'aceptarProveedores' :
				validarAltaProveedores();
			break;
			
			//Formulario gestion Clientes
			case 'altaGestionClientes':
				desabilitarGestionClientes();
				reiniciarValidacionesClientes();
				gestionClientesAlta();
			break;
			
			case 'bajaGestionClientes':
				desabilitarGestionClientes();
				reiniciarValidacionesClientes();
				gestionClientesBaja();
			break;
			
			case 'modificarGestionClientes':
				desabilitarGestionClientes();
				reiniciarValidacionesClientes();
				gestionClientesModificar();
			break;

			case 'aceptarClientes' :
				validarAltaClientes();
			break;
			
			//Formulario Gestion Vehículos
			case 'altaGestionVehiculos':
				desabilitarGestionVehiculos();
				reiniciarValidacionesVehiculos();
				document.getElementById("frmGestionarVehiculos").reset();
				gestionVehiculosAlta();				
			break;

			case 'bajaGestionVehiculos':
				desabilitarGestionVehiculos();
				gestionVehiculosBaja();
				reiniciarValidacionesVehiculos();
			break;

			case 'modificarGestionVehiculos':
				desabilitarGestionVehiculos();
				gestionVehiculosModificar();
				reiniciarValidacionesVehiculos();
			break;

			case 'aceptarGestionVehiculo':
				validarAltaVehiculo();
			break;
			
			//formularios compra/venta 
			case 'compra':
				gestionarCompra();
			break;
			
			case 'venta':
				gestionarVenta();						
			break;
			
			case 'aceptarAltaCompra' :
				validarAltaCompra();
			break;
			
			case 'aceptarAltaVenta' :
				validarAltaVenta();
			break;
		}
	}
}




/* EVENTOS QUE SE PRODUCEN AL PULSAR LOS BOTONES DEL MENU*/

			$("#gestionarEmpleados").click(function () {
				// Verifico si ya he cargado el formulario antes
				if ($('#frmGestionarEmpleados').size() == 0){ 
					$('<div id="capaFrmGestionEmpleados"></div>').appendTo('#formularios').load("formularios/empleados.html", function () {	$.getScript("js/gestionEmpleados.js")}
					);
				} else {
					// Lo abro si está cerrado					
					$('#capaFrmGestionEmpleados').dialog("open");
					reiniciarValidacionesEmpleados();
				}
				/*reiniciarValidacionesEmpleados();
				oDlgGestionEmpleados.dialog("open");
				document.getElementById("frmGestionarEmpleados").reset();						
				gestionEmpleadosAlta();*/
			});
		
			$("#gestionarProveedores").click(function () {
				//ocultarFormularios();
				//ocultarMenu();
				reiniciarValidacionesProveedores();
				oDlgGestionProveedores.dialog("open");
				document.getElementById("frmGestionarProveedores").reset();
				//document.getElementById("frmGestionarProveedores").style.display = "block";
				gestionProveedoresAlta();
			});
			
			$("#gestionarClientes").click(function () {
				//ocultarFormularios();
				//ocultarMenu();
				reiniciarValidacionesClientes();
				oDlgGestionClientes.dialog("open");
				document.getElementById("frmGestionarClientes").reset();
				//document.getElementById("frmGestionarClientes").style.display = "block";
				gestionClientesAlta();
			});
			
			$("#gestionarVehiculos").click(function () {
				//ocultarFormularios();
				//ocultarMenu();
				reiniciarValidacionesVehiculos();
				oDlgGestionVehiculos.dialog("open");
				document.getElementById("frmGestionarVehiculos").reset();
				//document.getElementById("frmGestionarVehiculos").style.display = "block";
				gestionVehiculosAlta();
			});
			
			$("#gestionarCompraVenta").click(function () {
				//ocultarFormularios();
				//ocultarMenu();
				reiniciarValidacionesVenta();
				reiniciarValidacionesCompra();
				document.getElementById("frmAltaCompra").style.display = "none";
				document.getElementById("frmAltaVenta").style.display = "none";
				oDlgGestionCompraVenta.dialog("open");
				document.getElementById("frmGestionarCompraVenta").reset();
				//document.getElementById("frmAltaVenta").reset();
				//document.getElementById("frmAltaCompra").reset();
				//document.getElementById("frmGestionarCompraVenta").style.display = "block";
			});
			
			$("#listados").click(function () {
				window.open("listados.html");
			});
		
	
