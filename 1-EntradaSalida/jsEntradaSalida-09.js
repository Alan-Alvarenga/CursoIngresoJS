/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentaje_aumento;
	let resultado1;

	sueldo=parseFloat(document.getElementById('txtIdSueldo').value);
	porcentaje_aumento=1.10;
	resultado=sueldo*porcentaje_aumento;
	resultado=resultado.toFixed(2)

	document.getElementById("txtIdResultado").value=resultado;
}
