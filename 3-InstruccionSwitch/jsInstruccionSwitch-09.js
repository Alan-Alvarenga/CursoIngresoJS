function mostrar()
{	
	let estacion= document.getElementById('txtIdEstacion').value;
	let destino= document.getElementById("txtIdDestino").value;
	let precio= 15000;
	let precioFinal

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
				precioFinal= precio*1.2;
				break;

				case "Cordoba":
				case "Cataratas":
				precioFinal=precio*0.9;
				break;

				case "Mar del plata":
				precioFinal=precio*0.8;
				break;
			}
		break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
				precioFinal=precio*0.8;
				break;

				case "Cordoba":
				case "Cataratas":
				precioFinal=precio*1.1;
				break;

				case "Mar del plata":
				precioFinal=precio*1.2;
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				precioFinal=precio*1.1;
				break;

				default:
				precioFinal=precio;
				break;
			}
	}

	alert("El precio final es $" + precioFinal)

}//FIN DE LA FUNCIÓN