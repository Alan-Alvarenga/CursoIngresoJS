function mostrar()
{
	let edad;
	let estadoCivil;

	edad=parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil=document.getElementById("estadoCivil").value;

	if (edad<18 && estadoCivil!="Soltero") {
	} else if (edad>17 && estadoCivil=="Soltero") {
	alert ("Es soltero y mayor de edad");
	}


}//FIN DE LA FUNCIÓN