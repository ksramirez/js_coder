
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


const ingreseNombre = prompt('Ingrese su Nombre').toLowerCase()

let ingreseNumero = Number(prompt('Ingresar Numero'));


for (let i = 1; i <= 10 ; i++) {
    let resultado = ingreseNumero + i ;
    console.log(ingreseNumero +" + " + i +" = "+ resultado);
}


