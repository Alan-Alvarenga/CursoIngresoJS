function mostrar()
{	
	let estacion= document.getElementById('txtIdEstacion').value;
	let destino= document.getElementById("txtIdDestino").value;
	let precio= 15000;
	let descuento;
	let aumento;
	let descuentoTotal;
	let aumentoTotal;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
				aumento=1.2;
				break;

				case "Cordoba":
				case "Cataratas":
				descuento=0.9;
				break;

				case "Mar del plata":
				descuento=0.8;
				break;
			}
		
		case "Verano":
			switch (destino) {
				case "Bariloche"
			}
	}

}//FIN DE LA FUNCIÓN