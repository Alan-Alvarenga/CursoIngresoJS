function mostrar()
{
	//tomo el mes
	let mes;
	mes=document.getElementById('txtIdMes').value;

	switch(mes) {
		case "Febrero":
		alert("Este mes tiene 28 dias");
		break;

		default:
		alert("Este mes tiene 30 dias o mas");
	}

}//FIN DE LA FUNCIÓN