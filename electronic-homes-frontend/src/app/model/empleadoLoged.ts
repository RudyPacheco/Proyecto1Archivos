export class empleadoLoged{
    id_empleado:string;
    nombre:string;
    apellido:string;
    salario:number;
    codigo_area:number;
    codigo_sucursal:string;
    pasword:string;

    constructor(id_empleado:string,nombre:string,apellido:string,salario:number,codigo_area:number,codigo_sucursal:string,pasword:string){
        this.id_empleado=id_empleado;
        this.nombre=nombre;
        this.apellido=apellido;
        this.salario=salario;
        this.codigo_area = codigo_area;
        this.codigo_sucursal=codigo_sucursal;
        this.pasword=pasword;
    }    

    get idEmpleado(){
        return this.id_empleado;
    }
    
    get nombreEmpleado(){
        return this.nombre;
    }

    











}