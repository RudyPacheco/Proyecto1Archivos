export class productoBodega{
    id:number;
    codigo_bodega:string;
    codigo_producto:string;
    cantidad_producto:number;
    nombre_producto:string;
    descripcion:string;
    imagen:string;
    precio:number;



    constructor(id:number,codigo_bodega:string,codigo_producto:string,cantidad_producto:number,nombre_producto:string,descripcion:string,imagen:string,precio:number){
        this.id=id;
        this.codigo_bodega=codigo_bodega;
        this.codigo_producto=codigo_producto;
        this.cantidad_producto=cantidad_producto;
        this.nombre_producto=nombre_producto;
        this.descripcion=descripcion;
        this.imagen=imagen;
        this.precio=precio;
    }



}