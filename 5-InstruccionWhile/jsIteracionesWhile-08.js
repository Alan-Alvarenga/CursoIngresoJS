/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta=="si") {
		contador= parseInt (prompt ("Ingrese un numero", "0"));
		if (contador > 0) {
			sumaPositivos= sumaPositivos + contador;
		}
		
		else {
			multiplicacionNegativos= multiplicacionNegativos * contador;
		}

	respuesta= prompt ("Desea seguir? si/no");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN