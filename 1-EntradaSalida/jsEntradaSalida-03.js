/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//Manera para chrome y navegadores compatibles
	//nombreIngresado=txtIdNombre.value;
	//Manera para todos los navegadores
	nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("Excelente "+ nombreIngresado);

}


