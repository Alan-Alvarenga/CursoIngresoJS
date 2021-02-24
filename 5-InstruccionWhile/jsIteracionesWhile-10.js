/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta="si";
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantNegativos=0;
	let cantPositivos=0;
	let cantCeros=0;
	let cantPares=0;
	let promNegativos;
	let promPositivos;
	let difPosNeg;

	while (respuesta=="si") {
		numeroIngresado= parseInt (prompt ("Ingrese un numero"))

		if (numeroIngresado<0) {
			sumaNegativos= sumaNegativos + numeroIngresado
			cantNegativos= cantNegativos++
			promNegativos= sumaNegativos/cantNegativos
		}

		if (numeroIngresado>0) {
			sumaPositivos= sumaPositivos + numeroIngresado
			cantPositivos= cantNegativos++
			promPositivos= sumaPositivos/cantPositivos
		}

		else {
			cantCeros= cantCeros++
		}

		respuesta= prompt ("Desea seguir? si/no")
	}

	difPosNeg= sumaPositivos - sumaNegativos

	document.write("la suma de negativos es :"+sumaNegativos);
	document.write("la suma de positivos es :"+sumaPositivos);
	document.write("la cantidad de negativos es :"+cantNegativos);
	document.write("la cantidad de positivos es :"+cantPositivos);
	document.write("la cantidad de ceros es :"+cantCeros);
	document.write("la cantidad de numero par es :");
	document.write("el promedio de negativos es :"+promNegativos);
	document.write("el promedio de positivos es :"+promPositivos);
	document.write("la diferencia de positivos y negativos es :"+difPosNeg);

}//FIN DE LA FUNCIÓN