// CREAR ID
function creoID() {
    return parseInt(Math.random() * 500)
}

// AGREGAR PRODUCTOS
function agregarProductos() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto")
    let importe = parseInt(prompt("Ingresa el importe del producto"))
    let stock = parseInt(prompt("Ingresa el stock del producto"))
    productos.push(new Producto(id, nombre, importe, stock))
    console.table(productos) 
}


// GENERADOR DE PRODUCTOS(ES UN EJEMPLO)
function generadorProductos() {
    productos.push(new Producto(68, "remera negra", 4200, 69))
    productos.push(new Producto(47, "remera blanca", 4200, 46))
    productos.push(new Producto(25, "remera gris", 4200, 25))
    productos.push(new Producto(79, "remera roja", 4200, 32))
    productos.push(new Producto(14, "remera sumo", 5200, 10))
    productos.push(new Producto(16, "remera divididos", 5200, 11))
    productos.push(new Producto(09, "remera cerati", 5200, 17))
    productos.push(new Producto(88, "remera charly", 5200, 12))
}

// GENERADOR DE CARRITO(ES OTRO EJEMPLO)
function generadorCarrito() {
    carrito.push(new Producto(68, "remera negra", 4200))
    carrito.push(new Producto(47, "remera blanca", 4200))
    carrito.push(new Producto(25, "remera gris", 4200))
    carrito.push(new Producto(14, "remera sumo", 5200))
}



function recorrerProductos() {
    productos.forEach(elemento => {
        console.table(elemento)
    })
}

// BUSCADOR DE PRODUCTOS
function buscadorProductos() {
    let prod = prompt("Ingresa el producto que quieres buscar")
    const resultado = productos.find(producto => producto.nombre === prod)
    console.table(resultado)
}

// FILTRAR PRODUCTOS
function filtrarProductos() {
    let prod = prompt("Ingresa el término a buscar:")
    const resultado = productos.filter(producto => producto.nombre.includes(prod))
    console.table(resultado)

}

// VER LA EXISTENCIA DE PRODCUTOS
function existenciaProductos() {
    let codigo = prompt("Ingresa el código del producto")
    const resultado = productos.some(producto => producto.id === parseInt(codigo))
    console.log("resultado", resultado)
}

// CALCULAR CARRITO
function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, 0)
    console.log("Total a pagar $", total)
}

// ORDENA LOS PRODUCTOS 
function ordenarProductos() {
    console.clear()
    console.table(productos)
    productos.sort((a, b) => {
        if (a.importe > b.importe) {
            return 1
        }
        if (a.importe < b.importe) {
            return -1
        }
        return 0
    })
    console.table(productos)
}