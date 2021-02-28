/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	let nombre
	let nacionalidad
	let maxTemp
	maxTemp=0
	let maxTempNaci
	let edad
	let sexo
	let estadoCivil
	let mayoresSolteros
	mayoresSolteros=0
	let mujeresSolteViud
	mujeresSolteViud=0
	let viejosFiebre
	viejosFiebre=0
	let edadMujeresCasa
	edadMujeresCasa=0
	let cantMujeresCasa
	cantMujeresCasa=0
	let promMujeresCasa
	promMujeresCasa=0
	let temperatura
	let seguir="si"

	while (seguir=="si") {

		nombre= prompt ("Ingrese el nombre")

		nacionalidad= prompt ("Ingrese su nacionalidad")

		edad=prompt ("Ingrese su edad")
		edad=parseInt (edad)
		while (isNaN(edad)==true || edad>100) {
			edad= prompt ("Ingrese un numero valido")
		}

		sexo= prompt ("Ingrese su sexo. m/f")
		while (isNaN(sexo)==false || sexo !="f" && sexo!="m") {
			sexo=prompt ("Ingrese un sexo valido. m/f")
		}

		estadoCivil= prompt ("Ingrese su estado civil. soltero/casado/viudo")
		while (isNaN(estadoCivil)==false || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo") {
			estadoCivil=prompt("Ingrese un estado civil valido. soltero/casado/viudo")
		}

		temperatura= prompt ("Ingrese la temperatura")
		while (isNaN(temperatura)==true) {
			temperatura= prompt ("Ingrese un valor valido")
		}


	if (maxTemp < temperatura) {
		maxTemp=temperatura
		maxTempNaci=nacionalidad
	}



	if (edad > 17 && estadoCivil=="soltero") {
		mayoresSolteros=mayoresSolteros++
	}


	if (sexo=="f" && estadoCivil=="soltero" || estadoCivil=="viudo") {
		mujeresSolteViud= mujeresSolteViud++
	}


	if (edad>60 && temperatura>38) {
		viejosFiebre= viejosFiebre ++
	}


	if (sexo=="f" && estadoCivil=="casado") {
		cantMujeresCasa= cantMujeresCasa++
		edadMujeresCasa= edadMujeresCasa + edad
		promMujeresCasa= edadMujeresCasa / cantMujeresCasa
	}

	seguir=prompt("Desea seguir? si/no")
	while (isNaN(seguir)==false || seguir!="si" && seguir!="no")
		seguir=prompt("Ingrese una respuesta valida. si/no")

	} 

	alert ("La persona con mayor cantidad de grados es de nacionalidad" + maxTempNaci)
	alert ("Hay en total " + mayoresSolteros + " mayores solteros")
	alert ("Hay en total " + mujeresSolteViud + " mujeres solteras o viudas")
	alert ("Hay en total " + viejosFiebre + " ancianos con fiebre")
	alert ("El promedio de edad de las mujeres casadas es de " + promMujeresCasa + " años")
}
