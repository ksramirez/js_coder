
//Array Carrito
let carrito= []

//Productos
class Producto {
    constructor(prod, aroma, modelo, descripcion, precio) {
        this.pord = prod
        this.aroma = aroma
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
    }

}

const producto1 = new Producto('VelaMinimal', ['Vainilla','Frutos Rojos','Lavanda','Pop Corn','Jazmín'], 'Minimal', 'Vela de cera de soja artesanal', 2500)
const producto2 = new Producto('VelaCeramica', ['Frutilla','Flores Blancas','Frambuesa Melón','Frambuesa y Pimienta Rosa'], 'Ceramica', 'Vela de cera de soja artesanal', 2800)
const producto3= new Producto('DifusorVidrio', ['Bebé','Wanama','Vainilla Caramelo', 'Lemon Grass', 'Fresias', 'Nag Champa'], 'Home Deco', 'Difusor de varillas en recipiente de vidrio', 3000)
const producto4 = new Producto('DifusorCeramica', ['Bebé','Wanama','Vainilla Caramelo', 'Lemon Grass', 'Fresias', 'Nag Champa'], 'Minimal', 'Difusor de varillas en recipiente de cerámica', 3500)
const producto5 = new Producto('PerlasAromaticas', ['Cher','Wanama','Caricias de Algodón'], 'Minimal', 'Perlas de cerámica para perfumar ambientes y roperos', 2000)


const productos = [producto1, producto2, producto3, producto4, producto5]





 //Elección de Características del Producto
const editarProductoSelec = (prodSeleccionado) => {

    const productoElegido = {
        prod: prodSeleccionado.prod,
        descripcion: prodSeleccionado.descripcion,
        mod: prodSeleccionado.modelo,
        fragancia: '',
        cantidad: 1,
        precio: prodSeleccionado.precio,
    }

    productoElegido.fragancia = prompt('Por Favor seleccione un aroma de la lista:  ' + prodSeleccionado.aroma.join(' - ')).toLowerCase()
    productoElegido.cantidad = Number(prompt('Ingrese cuántas unidades desea: '))

    return productoElegido
} 

//Elección de producto
const seleccionarProducto = () => {
    const seleccionUsuario = prompt('Seleccione el producto que le interese: VelaMinimal, VelaCeramica, DifusorVidrio, DifusorCeramica, PerlasAromaticas').toLowerCase()

    switch (seleccionUsuario) {
        case 'velaminimal':
            console.log('Seleccionaste : Vela Minimal')
            carrito.push(editarProductoSelec(producto1))
            break
        case 'velaceramica':
            console.log('Seleccionaste : Vela Ceramica')
            carrito.push(editarProductoSelec(producto2))
            break
        case 'difusorvidrio':
            console.log('Seleccionaste : Difusor de vidrio')
            carrito.push(editarProductoSelec(producto3))
            break
        case 'difusorceramica':
            console.log('Seleccionaste : Difusor de Cerámica')
            carrito.push(editarProductoSelec(producto4))
            break
        case 'perlasaromaticas':
            console.log('Seleccionaste : Perlas Aromaticas')
            carrito.push(editarProductoSelec(producto5))
            break

        default:
            console.log('Por favor, elegi un modelo dentro de las opciones')
            break
    }

    if (confirm('Desea agregar otro producto a su compra?')) {
        seleccionarProducto()
    }
}

seleccionarProducto()


//Carrito Total

const TotalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}
console.log(carrito);



alert('Gracias por su compra, su total es de $' + TotalCarrito())
console.log('Gracias por su compra, su total es de $' + TotalCarrito())

