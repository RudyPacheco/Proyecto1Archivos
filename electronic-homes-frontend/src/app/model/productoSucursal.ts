export class productoSucursal{
    codigo:number;
    codigo_sucursal:string;
    codigo_producto:string;
    cantidad_producto:number;
    nombre_producto:string;
    descripcion:string;
    precio:number;



    constructor(codigo:number,codigo_sucursal:string,codigo_producto:string,cantidad_producto:number,nombre_producto:string,descripcion:string,precio:number){
        this.codigo=codigo;
        this.codigo_sucursal=codigo_sucursal;
        this.codigo_producto=codigo_producto;
        this.cantidad_producto=cantidad_producto;
        this.nombre_producto=nombre_producto;
        this.descripcion=descripcion;
        this.precio=precio;
    }



}