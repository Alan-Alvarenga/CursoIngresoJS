function mostrar()
{
	let destino= document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
		alert ("Aqui hace frio");
		break;

		case "Cataratas":
		case "Mar del plata":
		alert ("Aqui hace calor");
		break;
	}
}//FIN DE LA FUNCIÓN