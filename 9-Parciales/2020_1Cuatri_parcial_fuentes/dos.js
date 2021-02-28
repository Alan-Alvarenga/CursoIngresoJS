/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  let variedad
  let cantidad
  let cantidadArena=0
  let precioArena
  let cantidadCal=0
  let precioCal
  let cantidadCemento=0
  let precioCemento
  let cantidadTotal
  cantidadTotal=0
  let varianteMasCant
  let varianteMasCara
  let precio
  let precioTotal=0
  let precioDescuento
  let seguir
  seguir = "si"
  let descuento

  while (seguir=="si") {
  	variedad= prompt ("Ingrese el tipo de articulo. arena/cal/cemento");
	
	while (isNaN (variedad)==false || variedad!="arena" && variedad!="cal" && variedad!="cemento") {
		variedad= prompt ("Error. Por favor ingrese un tipo de producto valido.")
	}

	precio= prompt ("Ingrese precio")
	precio= parseInt (precio)
	while (isNaN (precio)==true) {
		precio= prompt ("El precio no es correcto. Ingreselo nuevamente")
	}

	cantidad= prompt ("Ingrese cantidad")
	cantidad= parseInt (cantidad)
	while (isNaN (cantidad)==true) {
		cantidad= prompt ("El cantidad no es correcto. Ingreselo nuevamente")
	}

	switch (variedad) {
		case "arena":
			cantidadArena=cantidadArena + cantidad
			cantidadTotal= cantidadTotal + cantidad
			if (precioArena < precio) {
				precioArena=precio
		}
			break

		case "cal":
			cantidadCal=cantidadCal + cantidad
			cantidadTotal= cantidadTotal + cantidad
			if (precioCal < precio) {
				precioCal=precio
		}
			break

		case "cemento":
			cantidadCemento=cantidadCemento + cantidad
			cantidadTotal= cantidadTotal + cantidad
			if (precioCemento < precio) {
				precioCemento=precio
		}
			break

	}

	if (cantidadTotal>30) {
		descuento= 0.75
	}
	else if (cantidadTotal>10) {
		descuento= 0.85
	}

	/*PUNTO A*/

	precioTotal = precioTotal + (cantidad * precio);

	/*PUNTO B*/

	if (cantidadTotal>10) {
		precioDescuento = precioTotal * descuento
	}

	/*PUNTO d*/

  	if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
  		varianteMasCant="arena"
  	}
  	else if (cantidadCal > cantidadCemento) {
  		varianteMasCant="cal"
  	}
  	else {
  		varianteMasCant="cemento"
  	}

  	/*PUNTO F*/

    if (precioArena > precioCal && precioArena > precioCemento) {
  		varianteMasCara="arena"
  	}
  	else if (precioCal > precioCemento) {
  		varianteMasCara="cal"
    }
  	else {
  		varianteMasCara="cemento"
  	}

  	seguir=prompt ("Desea seguir? si/no")
  	while (isNaN(seguir)==false | seguir!="si" && seguir!="no") {
  		seguir=prompt ("Ingrese un valor correcto. si/no")
  	}

  }

  alert ("El precio total, sin descuento, es " + precioTotal)
  if (descuento<1) {
  	alert ("El precio con descuento es $" + precioDescuento)
  }

  alert ("La variante con mas cantidad de bolsas es "+varianteMasCant)

  alert ("La variante mas cara es "+varianteMasCara)

}
