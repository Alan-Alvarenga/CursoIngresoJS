/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resultado;

	precioUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	precioDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	precioTres=parseInt(document.getElementById('txtIdPrecioTres').value);
	resultado=precioUno+precioDos+precioTres;

	alert("El resultado es: " + resultado);
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resultado;

	precioUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	precioDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	precioTres=parseInt(document.getElementById('txtIdPrecioTres').value);
	resultado=(precioUno+precioDos+precioTres)/3;

	resultado=resultado.toFixed(2)

	alert("El promedio es: " + resultado);
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let iva
	let resultado;

	precioUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	precioDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	precioTres=parseInt(document.getElementById('txtIdPrecioTres').value);
	iva=1.21
	resultado=(precioUno+precioDos+precioTres)*iva;

	resultado=resultado.toFixed(2)

	alert("El precio final es: " + resultado);
}