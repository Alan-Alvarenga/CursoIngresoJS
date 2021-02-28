/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	let jabon
	let cantJabon
	cantJabon=0
	let cantComprasJabon
	cantComprasJabon=0
	let barbijo
	let cantBarbijo
	cantBarbijo=0
	let cantComprasBarbijo
	cantComprasBarbijo=0
	let alcohol
	let cantAlcohol
	cantAlcohol=0
	let precioAlcoholBarat
	precioAlcoholBarat=0
	let cantAlcoholBarato
	let cantComprasAlcohol
	cantComprasAlcohol=0
	let promAlcohol
	let tipo
	let tipoMasUnid
	let promedioMasUnid
	let precio
	let cantidad
	let fabricante
	let fabricanteBarato
	let marca
	let marcaBarata
	let contador
	contador=0

	while (contador<5) {

		tipo= prompt ("Ingrese el tipo de producto. jabon/barbijo/alcohol")
		while (isNaN (tipo)==false || tipo!="jabon" && tipo!="barbijo" && tipo!="alcohol") {
			tipo=prompt ("ERROR. Ingrese un articulo valido. jabon/barbijo/alcohol")
		}

		precio= prompt ("Ingrese el precio de producto. entre $100 y $300")
		precio= parseInt(precio)
		while (isNaN (precio)==true || precio<100 || precio>300) {
			precio=prompt ("ERROR. Ingrese un precio valido")
		}

		cantidad= prompt ("Ingrese la cantidad de producto. entre 0 y 1000")
		cantidad= parseInt(cantidad)
		while (isNaN (cantidad)==true || cantidad<0 || cantidad>1000) {
			cantidad=prompt ("ERROR. Ingrese una cantidad valida. Entre 0 y 1000")
		}

		fabricante= prompt ("Ingrese el fabricante")
		marca= prompt ("Ingrese la marca")

		/*PUNTO A*/

		switch (tipo) {
			case "alcohol":
				cantAlcohol= cantAlcohol + cantidad
				cantComprasAlcohol= cantComprasAlcohol+1
				if (precioAlcoholBarat < precio) {
					precioAlcoholBarat=precio
					fabricanteBarato=fabricante
					marcaBarata=marca
					cantAlcoholBarato=cantidad
				}
			break

			case "barbijo":
				cantBarbijo= cantBarbijo + cantidad
				cantComprasBarbijo= cantComprasBarbijo+1
			break

			case "jabon":
				cantJabon= cantJabon + cantidad
				cantComprasJabon= cantComprasJabon+1
			break
		}

		contador=contador+1

	}

		if (cantAlcohol > cantBarbijo && cantAlcohol > cantJabon) {
			tipoMasUnid= "alcohol"
			promedioMasUnid= cantAlcohol/cantComprasAlcohol
		} 

		else if (cantBarbijo > cantJabon) {
			tipoMasUnid= "barbijo"
			promedioMasUnid= cantBarbijo/cantComprasBarbijo
		} 

		else {
			tipoMasUnid="Jabon"
			promedioMasUnid= cantJabon/cantComprasJabon
		}


	alert ("El fabricante de alcohol mas barato es "+ fabricanteBarato + " y la cantidad de unidades es " + cantAlcoholBarato)
	alert ("El tipo mas vendido fue "+ tipoMasUnid + " con un promedio de " + promedioMasUnid + " unidades por compra")
	alert ("Se vendieron " + cantBarbijo + " barbijos")

}
