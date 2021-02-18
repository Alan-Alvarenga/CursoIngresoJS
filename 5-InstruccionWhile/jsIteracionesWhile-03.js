/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let imputClave = prompt ("Ingrese la clave")
	let clave="utn750"

	while (imputClave!=clave) {
		alert ("Clave incorrecta, intente nuevamente")
		imputClave= prompt ("Ingrese la clave")
	}

	alert ("La clave fue ingresada correctamente")
	
}//FIN DE LA FUNCIÓN
