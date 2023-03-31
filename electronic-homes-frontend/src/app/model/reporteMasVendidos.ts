export class ReporteMasVendidos{
    codigo_producto:string;
    nombre_producto:string;
    descripcion:string;
    precio:number;
    total:number;

    constructor(codigo_producto:string,nombre_producto:string,descripcion:string,precio:number,total:number){
        this.codigo_producto=codigo_producto;
        this.nombre_producto=nombre_producto;
        this.descripcion=descripcion;
        this.precio=precio;
        this.total=total;
    }
}