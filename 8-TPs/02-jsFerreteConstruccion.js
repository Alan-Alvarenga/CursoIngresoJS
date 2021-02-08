/*2.	
Alvarenga, Alan David
TP 2

Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	let largo;
	let ancho;
	let resultado;

	largo= document.getElementById('txtIdLargo').value;
	ancho= document.getElementById('txtIdAncho').value;
	largo=parseFloat(largo);
	ancho=parseFloat(ancho);
	
	resultado=(largo*2)+(ancho*2);
	resultado=resultado.toFixed(2);

	alert("Deberas comprar "+ resultado + " metros de alambre");

}
function Circulo () 
{
	let radio;
	let circunferencia;
	let pi;
	let hilos
	let resultado;

	radio=document.getElementById("txtIdRadio").value;
	radio=parseFloat(radio);
	circunferencia=radio*2;
	pi:3.14;
	hilos:3;

	resultado= (circunferencia*pi)*hilos;
	resultado=resultado.toFixed(2);

	alert ("Deberas comprar "+ resultado +" metros de alambre");
}
function Materiales () 
{
	let largo;
	let ancho;
	let area
	let cemento;
	let cal;

	largo= document.getElementById('txtIdLargo').value;
	ancho= document.getElementById('txtIdAncho').value;
	largo=parseFloat(largo);
	ancho=parseFloat(ancho);
	area=largo*ancho;
	cemento=area*2;
	cal=area*3;

	area=area.toFixed(2);
	cemento=cemento.toFixed(2);
	cal=cal.toFixed(2);

	alert("Para un area de "+area+" metros, se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}