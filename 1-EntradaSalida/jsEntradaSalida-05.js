/*
Alvarenga, Alan David
Ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	nombre=document.getElementById('txtIdNombre').value;
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	var apellido;
	apellido = prompt ("Indique su apellido", "Perez")
	alert(apellido + ", su nombre es "+ nombre + " y usted tiene " + edad + " años");
}

