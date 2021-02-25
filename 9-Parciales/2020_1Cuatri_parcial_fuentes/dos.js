*/Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
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
  let cantidadTotal
  cantidadTotal=0
  let precio
  let precioTotal=0
  let precioDescuento
  let seguir
  seguir = si
  let descuento

  while (seguir==si) {
  	variedad= prompt ("Ingrese el tipo de articulo");
	
	while (isNaN (variedad)==false || variedad!="arena" || variedad!="cal" || variedad!="cemento") {
		variedad= prompt ("Error. Por favor ingrese un tipo de producto valido.")
	}

	precio= prompt ("Ingrese precio")
	precio= parseInt (precio)
	while (isNaN (precio)==true) {
		precio= prompt ("El precio no es correcto. Ingreselo nuevamente")
	}

	cantidad= prompt ("Ingrese la cantidad de unidades")
	cantidad= parseInt (cantidad)
		while (isNaN (cantidad)==true) {
		precio= prompt ("La cantidad de unidades no es correcta. Ingreselo nuevamente")
	}

	cantidadTotal= cantidadTotal + cantidad

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
		alert ("El precio con descuento es: $" + precioDescuento)
	}

	/*PUNTO d*/













  }

  alert ("El precio total, sin descuento, es " + precioTotal)
  if (descuento<1) {
  	alert ("El precio con descuento es " )
  }

}
