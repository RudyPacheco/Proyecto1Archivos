export class productoFactura{
    codigo:number;
    codigo_venta:string;
    codigo_producto:string;
    precio:number;
    
    constructor(codigo:number,codigo_venta:string,codigo_producto:string,precio:number){
        this.codigo=codigo;
        this.codigo_venta=codigo_venta;
        this.codigo_producto=codigo_producto;
        this.precio=precio;
    }
    
}

