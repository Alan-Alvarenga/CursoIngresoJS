function mostrar()
{
	let destino=document.getElementById('txtIdDestino').value;

	switch(destino){
		case "Bariloche":
		alert ("Esta ciudad esta en el oeste");
		break;

		case "Mar del plata":
		alert ("Esta ciudad esta en el este");
		break;

		case "Cataratas":
		alert ("Esta ciudad esta en el norte");
		break;

		case "Ushuaia":
		alert ("Esta ciudad esta en el sur");
		break;
	}
	
}