function mostrar()
{
	let numero;
	numero= Math.floor(Math.random()*10)+1;

	if (numero>=9) {
		alert ("Excelente, sacaste "+numero)
	} else if (numero>4 && numero<9) {
		alert ("Aprobaste, sacaste "+numero)
	} else {
		alert ("Vamos, la proxima se puede, sacaste "+numero)
	}

}//FIN DE LA FUNCIÓN