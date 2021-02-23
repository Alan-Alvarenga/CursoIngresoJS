/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let suma=0;
	let acumulador=0;
	let seguir="si";
	let promedio;

	while (seguir=="si") {
		numero= parseInt (prompt ("Ingrese un numero", "0"));
		suma= suma + numero;
		acumulador=acumulador+1
		promedio= suma / acumulador
		seguir= prompt ("Si desea seguir escriba si, en caso negativo escriba no")
	}

	document.getElementById('txtIdSuma').value=suma
	document.getElementById('txtIdPromedio').value=promedio


}//FIN DE LA FUNCIÓN