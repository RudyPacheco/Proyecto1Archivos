export class solicitudProducto{
    id_solicitud:number;
    codigo_producto:string;
    cantidad_producto:number;
    codigo_sucursal_origen:string;
    codigo_sucursal_destino:string;
    estado:string;

    constructor(id_solicitud:number,codigo_producto:string,cantidad_producto:number,codigo_sucursal_origen:string,codigo_sucursal_destino:string,estado:string){
        this.id_solicitud=id_solicitud;
        this.codigo_producto=codigo_producto;
        this.cantidad_producto=cantidad_producto;
        this.codigo_sucursal_origen=codigo_sucursal_origen;
        this.codigo_sucursal_destino=codigo_sucursal_destino;
        this.estado=estado
    }



}