
/*
const eleccionAroma = prompt('Elija un aroma de la lista : citrico, frutal, floral').toLowerCase()

if (eleccionAroma == 'citrico') {
    alert('Los aromas cítricos Puede ayudar a despejar la mente en estados de «agobio» o mucha actividad intelectual. Se le considera también estimulante y energizante en estados de fatiga.')
} else if (eleccionAroma == 'frutal') {
    alert('Los aromas como el limón, toronja, mandarina y naranja son revitalizantes, una descarga de energía a los sentidos que puede neutralizar el estrés, crear una atmósfera agradable e influir en la percepción del lugar, ya que suelen asociarse con la limpieza y favorecen la concentración.')
} else if (eleccionAroma == 'floral') {
    alert('El aroma floral es el más popular y extenso de todas las familias. En concreto, las variedades más utilizadas son la rosa y el jazmín, que se encuentran en el corazón de la mayoría de creaciones de perfumes.')
} else {
    alert('El aroma seleccionado no se encuentra en stock por el momento. Ingrese un aroma en Stock.')
}
*/


/*const ingreseNombre = prompt('Ingrese su Nombre').toLowerCase()

let ingreseNumero = Number(prompt('Ingresar Numero'));


for (let i = 1; i <= 10 ; i++) {
    let resultado = ingreseNumero + i ;
    console.log(ingreseNumero +" + " + i +" = "+ resultado);
}*/


//SIMULADOR INTERACTIVO

const calcularCuotas= (montoTotal, cantidadCuotas) =>
{
    return montoTotal/cantidadCuotas
}

let montoTotal= Number(prompt('Por favor ingrese el monto TOTAL de su saldo'))

let cantidadCuotas= Number(prompt('Ingrese en cuantas cuotas quiere realizar el pago : 6, 12 o 24 CUOTAS'))
let resultado= calcularCuotas (montoTotal,cantidadCuotas)


if (cantidadCuotas==6) {
 alert('Usted seleccionó 6 cuotas de :  $' + resultado);
} else if (cantidadCuotas==12) {
    alert('Usted seleccionó 12 cuotas de :  $' + resultado);
}else if (cantidadCuotas==24) {
    alert('Usted seleccionó 24 cuotas de :  $' + resultado);
}else {
    alert ('La cantidad de cuotas ingesadas no está habilitada, pruebe nuevamente.')
}




