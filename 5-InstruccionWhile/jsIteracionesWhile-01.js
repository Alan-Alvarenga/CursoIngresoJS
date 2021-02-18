/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let num;
	let contador=0;
	let suma=0;

	while (contador<3) {
		num= parseInt(prompt("Indique un numero"));
		suma=suma+num;
		alert ("El numero es "+ num)
		contador=contador+1
	}

	alert("La suma es "+ suma)

}//FIN DE LA FUNCIÓN