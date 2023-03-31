export class reporteMasIngreso{
    codigo_producto:string;
    nombre_producto:string;
    descripcion:string;
    sum:number;
    total:number;

    constructor(codigo_producto:string,nombre_producto:string,descripcion:string,sum:number,total:number){
        this.codigo_producto=codigo_producto;
        this.nombre_producto=nombre_producto;
        this.descripcion=descripcion;
        this.sum=sum;
        this.total=total;
    }


}