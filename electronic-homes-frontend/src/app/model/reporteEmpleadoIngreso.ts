export class reporteEmpleadoIngreso{
    id_empleado:string;
    nombre:string;
    apellido:string;
    codigo_sucursal;
    sum:number;
    total:number;

    constructor(id_empleaado:string,nombre:string,apellido:string,codigo_sucursal:string,sum:number,total:number){
        this.id_empleado=id_empleaado;
        this.nombre=nombre;
        this.apellido=apellido;
        this.codigo_sucursal=codigo_sucursal;
        this.sum=sum;
        this.total=total;
    }
}