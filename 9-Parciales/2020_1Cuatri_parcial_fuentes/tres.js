function mostrar()
{
	let nombre
	let sexo
	let edad
	let estadoCivil
	let temperatura
	let maxTempName
	let maxTemp
	maxTemp=0
	let cantViudo
	cantViudo=0
	let cantSolViu
	cantSolViu=0
	let cantAncianosFiebre
	cantAncianosFiebre=0
	let edadTotalHSolteros
	edadTotalHSolteros=0
	let cantHSolteros=0
	cantHSolteros=0
	let promedioHSolteros
	let seguir
	seguir="si"

	while (seguir=="si") {

		nombre=prompt("Ingrese el nombre")

		edad=prompt("Ingrese la edad")
		edad=parseInt(edad)
		while (isNaN (edad)==true) {
			edad=prompt ("Ingrese un valor valido")
		}
		
		sexo=prompt("Ingrese el sexo. m/f")
		while (isNaN (sexo)==false || sexo!="f" || sexo!="m") {
			sexo=prompt("Ingrese un sexo valido")
		}
		
		estadoCivil=prompt("Ingrese el estado civil. soltero/casado/viudo")
		while (isNaN (estadoCivil)==false || estadoCivil!="soltero" || estadoCivil!="casado" || estadoCivil!="viudo") {
			estadoCivil=prompt("Ingrese un estado civil valido")
		}
		
		temperatura=prompt("Ingrese temperatura")
		temperatura=parseFloat(temperatura)
		while (isNaN (temperatura)==true) {
			temperatura=prompt("Ingrese un valor valido")
		}

		/*PUNTO A*/

		if (maxTemp<temperatura) {
			maxTemp=temperatura
			maxTempName=nombre
		}

		/*PUNTO B*/

		if (edad<17 && estadoCivil=="viudo") {
			cantViudo=cantViudo++
		}

		/*PUNTO C*/

		if (sexo=="m" && estadoCivil=="soltero" || estadoCivil=="viudo") {
			cantSolViu=cantSolViu++
		}

		/*PUNTO D*/

		if (edad>60 && temperatura>38) {
			cantAncianosFiebre=cantAncianosFiebre++
		}

		/*PUNTO E*/

		if (sexo=="m" && estadoCivil=="soltero") {
			edadTotalHSolteros=edadTotalHSolteros+edad;
			cantHSolteros=cantHSolteros++
			promedioHSolteros=edadTotalHSolteros/cantHSolteros
		}

		seguir=prompt("Desea continuar= si/no")

	}


alert ("La persona con mayor temperatura es " + maxTempName)
alert ("Hay en total "+ cantViudo+ " viudos")
alert ("Hay en total "+ cantSolViu+ " hombres solteros o viudos")
alert ("Hay en total "+ cantAncianosFiebre+ " ancianos con mas de 38 grados")
alert ("El promedio de edad de los hombres solteros es "+ promedioHSolteros)

	
}
