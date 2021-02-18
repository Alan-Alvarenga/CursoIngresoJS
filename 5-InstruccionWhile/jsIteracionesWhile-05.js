/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado= prompt ("Ingrese si es de sexo masculino o femenino")

	while (!(sexoIngresado=="masculino" || sexoIngresado=="femenino")) {
		alert ("Incorrecto. Ingrese un sexo valido");
		sexoIngresado= prompt ("Ingrese si es de sexo masculino o femenino");
	}

	document.getElementById('txtIdSexo').value=sexoIngresado;
}//FIN DE LA FUNCIÓN