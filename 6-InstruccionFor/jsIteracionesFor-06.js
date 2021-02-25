function mostrar()
{
	let numeroIngresado
	let numerosPares=0
	let i

	numeroIngresado=parseInt(prompt("Ingrese un numero"))

	for (i=1; i<numeroIngresado; i++) {

		if (i%2==0) {
			numerosPares=numerosPares+1
		}
	}

	alert ("El numero tiene "+ numerosPares + " pares")

}//FIN DE LA FUNCIÓN