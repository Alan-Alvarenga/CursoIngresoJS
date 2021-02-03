/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno
	var numeroDos
	var resultado
/* Metodo largo
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno)
	numeroDos=parseInt(numeroDos)
	resultado= numeroUno + numeroDos

	Metodo Rapido*/
	numeroUno= parseInt (document.getElementById('txtIdNumeroUno').value);
	numeroDos= parseInt (document.getElementById('txtIdNumeroDos').value);
	resultado= numeroUno + numeroDos

	alert("La suma da: "+ resultado);
}

