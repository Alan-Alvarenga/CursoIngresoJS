/*
Alvarenga, Alan David
EJERCICIO 1 PARCIAL
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar()
{
	let contadorVueltas;
	contadorVueltas=0;

	let tipoIngresado;
	let precio
	let cantUnidades
	let marca
	let fabricante
	let primerAlcohol=true
	let menorPrecioAlc
	let menorPrecioFab
	let menorPrecioCant
	let contadorAlcohol
	let contadorBarbijo
	let contadorJabon
	let cantidadAlcohol =0
	let cantidadBarbijo =0
	let cantidadJabon =0
	let tipoMasVendido
	let promAlta

	while (contadorVueltas==5) {

		tipoIngresado= prompt ("Ingrese el tipo de articulo");
		while (isNaN (tipoIngresado)==false || tipoIngresado!="barbijo" || tipoIngresado!="jabon" || tipoIngresado!="alcohol") {
			tipoIngresado= prompt ("Error. Por favor ingrese un tipo de producto valido.")
		}

		precio= prompt ("Ingrese precio")
		precio= parseInt (precio)
		while (isNaN (precio)==true || precio<100 || precio>300) {
			precio= prompt ("El precio no es correcto. Ingreselo nuevamente")
		}

		cantUnidades= prompt ("Ingrese la cantidad de unidades")
		cantUnidades= parseInt (cantUnidades)
		while (isNaN (cantUnidades)==true || cantUnidades<0 || cantUnidades>1000) {
			precio= prompt ("La cantidad de unidades no es correcta. Ingreselo nuevamente")
		}

		marca= prompt ("Ingrese la marca")
			while (isNaN (marca)==false) {
				marca= prompt ("Error, ingrese un nombre valido")
			}

		fabricante= prompt ("Ingrese el fabricante")
			while (isNaN (fabricante)==false) {
				fabricante= prompt ("Error, ingrese un nombre valido")
			}
		
		/*PUNTO A*/

		if (tipoIngresado=="alcohol" && menorPrecioAlc<precio || primerAlcohol==true) {
			menorPrecioAlc == precio
			menorPrecioFab == fabricante
			menorPrecioCant == cantidad
			primerAlcohol == false
		}

		/*PUNTO B*/

		switch (tipoIngresadoo) {
			case "alcohol":
				contadorAlcohol = contadorAlcohol++;
				cantidadAlcohol = cantidadAlcohol + cantidad;
				break;

			case "barbijo":
				contadorBarbijo = contadorBarbijo++;
				cantidadBarbijo = cantidadBarbijo + cantidad;
				break;

			case "jabon":
				contadorJabon = contadorJabon++
				cantidadJabon = cantidadJabon + cantidad;
				break;
		}

		contadorVueltas=contadorVueltas++
	}

	if (contadorAlcohol > contadorBarbijo && contadorAlcohol > contadorJabon) {
		tipoMasVendido= "alcohol"
		promAlta = cantidadAlcohol / contadorAlcohol
	}
	else if (contadorBarbijo > contadorJabon) {
		tipoMasVendido = "barbijo"
		promAlta = cantidadBarbijo / contadorBarbijo
	}
	else {
		tipoMasVendido = "jabon"
		promAlta = cantidadJabon / contadorJabon
	}

	alert ("El alcohol mas barato es $" + menorPrecioAlc)
	alert ("El fabricante del alcohol mas barato es " + menorPrecioFab)
	alert ("La cantidad de ese alcohol es " + menorPrecioCant)

	alert ("El tipo mas vendido fue " + tipoMasVendido + ", con "+ promAlta + " unidades")

	alert ("Se vendieron "+ cantidadJabon + " jabones")
}
