/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

function mostrar()
{
  let arena
  let cantArena
  cantArena=0
  let arenaCara
  arenaCara=0
  let cal
  let cantCal
  cantCal=0
  let calCaro
  calCaro=0
  let cemento
  let cantCemento
  cantCemento=0
  let cementoCaro
  cementoCaro=0
  let cantidad
  let cantidadTotal
  cantidadTotal=0
  let precio
  let tipo
  let tipoMasCant
  let tipoMasCaro
  let seguir
  let precioFinal
  precioFinal=0
  let descuento
  descuento=1
  let precioConDescuento
  seguir="si"



  while (seguir=="si") {
  	tipo = prompt ("Ingrese el tipo de producto. arena/cal/cemento")
  	while (isNaN(tipo)==false || tipo!="arena" && tipo!="cal" && tipo!="cemento") {
  		tipo= prompt ("Tipo invalido. Ingreselo correctamente. arena/cal/cemento")
  	}

  	precio= prompt ("Ingrese precio por bolsa")
  	precio= parseInt(precio)
  	while (isNaN(precio)==true || precio<0) {
  		precio= prompt ("Ingrese un numero valido")
  	}

  	cantidad= prompt ("Ingrese la cantidad de bolsas")
  	cantidad= parseInt (cantidad)
  	while (isNaN(cantidad)==true) {
  		cantidad=prompt ("Ingrese un numero valido")
  	}

  	precioFinal= precioFinal + (cantidad*precio)
  	cantidadTotal= cantidadTotal + cantidad

  	if (cantidadTotal > 10) {
  		descuento=0.85
  		precioConDescuento= precioFinal * descuento
  	}
  	else if (cantidadTotal > 30) {
  		descuento= 0.75
  		precioConDescuento= precioFinal * descuento
  	}

  	switch (tipo) {
  		case "arena":
  			cantArena= cantArena++
  			if (arenaCara < precio) {
  				arenaCara=precio
  			}
  		break

  		case "cal":
  			cantCal= cantCal++
  			if (calCaro < precio) {
  				calCaro=precio
  			}
  		break

  		case "cemento":
  			cantCemento= cantCemento++
  			if (cementoCaro < precio) {
  				cementoCaro=precio
  			}
  		break
  	}

  	if (cantArena > cantCal && cantArena > cantCemento) {
  		tipoMasCant= "arena"
  	}
  	else if (cantCal > cantCemento) {
  		tipoMasCant= "cal"
  	}
  	else {
  		tipoMasCant= "cemento"
  	}




  	if (arenaCara > calCaro && arenaCara > cementoCaro) {
  		tipoMasCaro="arena"
  	}
  	else if (calCaro > cementoCaro) {
  		tipoMasCaro= "cal"
  	}
  	else {
  		tipoMasCaro= "cemento"
  	}


  	seguir=prompt ("Desea seguir? si/no")
  	while(seguir!="si" && seguir!="no")
  		seguir=prompt("Valor incorrecto. si/no")

  }

  alert ("El precio final sin descuento es $" + precioFinal)
  if (cantidadTotal > 10) {
  	alert ("El precio con descuento es $" + precioConDescuento)
  }
  alert ("El tipo con mas cantidad de bolsas es " + tipoMasCant)
  alert ("El tipo mas caro es " + tipoMasCaro)

}
