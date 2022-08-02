
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

/* const calcularCuotas= (montoTotal, cantidadCuotas) =>
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

 */


class Producto {
    constructor(prod, aroma, modelo, descripcion, precio) {
        this.pord = prod
        this.aroma = aroma
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
    }

    mostrarAroma() {
        console.log('El aroma del producto seleccionado es: ' + this.aroma)
    }
}

const producto1 = new Producto('Vela', 'Vainilla', 'Minimal', 'Vela de cera de soja artesanal', 2500)
const producto2 = new Producto('Vela', 'Frutilla', 'Ceramica', 'Vela de cera de soja artesanal', 2800)
const producto3= new Producto('Difusor', 'Bebé', 'Home Deco', 'Difusor de varillas en recipiente de vidrio', 3000)
const producto4 = new Producto('Difusor', 'Fresias', 'Minimal', 'Difusor de varillas en recipiente de cerámica', 3500)
const producto5 = new Producto('Perlas aromáticas', 'Cher', 'Minimal', 'Perlas de cerámica para perfumar ambientes', 2000)

console.log(producto4)
producto4.mostrarAroma()



const productos = [producto1, producto2, producto3, producto4, producto5]
console.log(productos)


for (const producto of productos) {
    console.log(producto.descripcion, producto.precio)
}
