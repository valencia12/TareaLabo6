producto = [];
ventas = [];

function agregarProducto(codigo, Descripcion, tipoProducto, PrecioDeCompra, PrecioDeVenta, stock){
    productos={};
    productos.codigo = codigo;
    productos.Descripcion = Descripcion;
    productos.tipoProducto = tipoProducto;
    productos.PrecioDeCompra = PrecioDeCompra;
    productos.PrecioDeVenta = PrecioDeVenta;
    productos.stock = stock;
    producto.push(productos); 

}

function ModificarStock(codProducto, nuevoStock){
    productos.forEach((element, index) =>  {
        if(element.codigo == codProducto){
            productos[index].stock = nuevoStock;
        }
    });
}

function RegistroDeVenta(codigo, cantidad, precio){
    venta = {};
    venta.codigo = codigo;
    venta.cantidad = cantidad;
    venta.precio = precio;
    ventas.push(venta);
}

function MostrarPromedio(){
    acu = 0;
    productos.forEach((element, index) => {
        acu = acu + productos[index];
    });
    console.log("Promedio de ventas" + acu);
}

function MostraProductosStock0(){
    axu="";
    productos.forEach((element, index) => {
        if(element.stock == 0){
            aux = aux + element.tipoProducto;
        }
    });
}

function menu (){

    var opc = prompt("1. Ingrese codigo\n 2.Modificar Stock\n 3.Registrar Venta\n 4. Mostrar Promedio\n 5. Mostrar Productos Stock 0\n 6. Salir");
    
    switch (opc) {
        case 1:
            
            var codigo = prompt("Ingrese codigo: ");
            var descrip = prompt("tipo: ");
            var precioC = prompt("Ingrese precio de compra");
            var precioV = prompt("Ingrese precio de venta");
            var stock = prompt("Ingrese el stock: ");
            agregarProducto(codigo, descrip, precioC, precioV, stock);
            break;
        case 2:
            var codproducto = prompt("Ingrese el codigo del producto");
            ModificarStock(codproduct);
            var nuevostock = prompt("Ingrese numero de el stock");        
            (nuevostock==0)? "": ModificarStock(codproduct);
            break;
        case 3:
            var cod = prompt("Ingrese codigo cantidad precio");
            var cantidad = prompt("Ingrese la cantidad");
            var precio = prompt("Ingrese precio");
            RegistroDeVenta(cod, cantidad, precio);
            break;
        case 4:
            prompt("Promedio" + MostrarPromedio(acu));
            case 5:
            MostraProductosStock0();
            break;
        
    }

}
