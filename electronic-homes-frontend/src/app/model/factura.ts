export class factura{
    codigo_venta:string;
    nit:string;
    codigo_sucursal:string;
    id_empleado:string;
    total_gastado:number;
    descuento:number;
    total_final:number;

    constructor(codigo_venta:string,nit:string,codigo_sucursal:string,id_empleado:string,total_gastado:number,descuento:number,total_final:number){
        this.codigo_venta=codigo_venta;
        this.nit=nit;
        this.codigo_sucursal=codigo_sucursal;
        this.id_empleado=id_empleado;
        this.total_gastado=total_gastado;
        this.descuento=descuento;
        this.total_final=total_final;
    }






}