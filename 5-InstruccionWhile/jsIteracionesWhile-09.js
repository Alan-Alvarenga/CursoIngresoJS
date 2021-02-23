/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo=0;
	let numeroMinimo=0;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="true";
	respuesta='si';

	while(respuesta=="si") {

		numeroIngresado= parseInt(prompt ("Ingrese un numero"))
		if (banderaDelPrimero==true || numeroIngresado<numeroMinimo) {
			numeroMinimo=numeroIngresado;
		}

		if (banderaDelPrimero==true || numeroIngresado>numeroMaximo) {
			numeroMaximo=numeroIngresado;
			banderaDelPrimero=false
		}

		respuesta= prompt ("Desea ingresar otro numero? si/no");
	}

	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN