/*3.	
Alvarenga, Alan David
TP 3

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let farenheit;
	let centigrados;

	farenheit=document.getElementById('txtIdTemperatura').value;
	farenheit=parseFloat(farenheit);

	centigrados=(farenheit-32)/1.8;
	centigrados=centigrados.toFixed(2);

	alert(farenheit+" grados farenheit son "+centigrados+" grados centigrados");
}

function CentigradosFahrenheit () 
{
	let centigrados;
	let farenheit;

	centigrados=document.getElementById('txtIdTemperatura').value;
	centigrados=parseFloat(centigrados);

	farenheit=(centigrados*1.8)+32;
	farenheit=farenheit.toFixed(2);

	alert(centigrados+" grados centigrados son "+farenheit+" grados farenheit");
}
