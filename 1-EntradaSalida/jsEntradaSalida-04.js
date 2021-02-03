/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	/*No valido ya que toma nombre por ID
	nombre = document.getElementById('txtIdNombre').value;*/
	nombre = prompt ("Introduzca su nombre");
	//Ahora para mostrarlo en la linea de texto se usa el siguiente comando
	document.getElementById('txtIdNombre').value = "Hi "+ nombre;

	/*
	ENTRADA
	nombre = prompt ("Introduzca su nombre");
	nombreIngresado=document.getElementById('txtIdNombre').value;

	MOSTRAR
	alert (nombre)
	document.getElementById('txtIdNombre').value = "Hi "+ nombre;*/


}

