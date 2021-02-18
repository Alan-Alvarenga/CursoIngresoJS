function mostrar()
{
	let num;
	let contador=0;
	let suma=0;
	let promedio=suma;

	while (contador<5) {
		num= parseInt(prompt("Indique un numero"));
		suma=suma+num;
		contador=contador+1
	}

	promedio=suma/5;

	document.getElementById('txtIdSuma').value=suma
	document.getElementById('txtIdPromedio').value=promedio

}//FIN DE LA FUNCIÓN