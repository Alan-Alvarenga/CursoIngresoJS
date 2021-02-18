/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado= parseInt(prompt("Ingrese un numero entre 0 y 9"))

	while (numeroIngresado<0 || numeroIngresado>9) {
		alert ("Incorrecto")
		numeroIngresado= parseInt(prompt("Ingrese un numero entre 0 y 9"))
	}

	document.getElementById('txtIdNumero').value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN