function mostrar()
{
	let numero;
	let mensaje;
	numero= Math.floor(Math.random()*10)+1;

	if (numero>8) {
		mensaje="Excelente, sacaste ";
	} 
	else if (numero>3) {
		mensaje="Aprobaste, sacaste ";
	} 
	else {
		mensaje="Vamos, la proxima se puede, sacaste ";
	}

	alert(mensaje + numero)

}//FIN DE LA FUNCIÓN