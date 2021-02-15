function mostrar()
{
	let estacion=document.getElementById('txtIdEstacion').value;
	let destino= document.getElementById("txtIdDestino").value;
	let mensaje;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
				mensaje= "Se viaja";
				break;

				default:
				mensaje= "No se viaja";
			}
		break;

		case "Verano":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":
				mensaje= "Se viaja";
				break;

				default:
				mensaje= "No se viaja";
			}
		break;

		case "Otoño":
		mensaje= "Se viaja";
		break;

		case "Primavera":
			switch (destino) {
				case "Bariloche":
				mensaje= "No se viaja";
				break;

				default:
				mensaje= "Se viaja";
			}
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN