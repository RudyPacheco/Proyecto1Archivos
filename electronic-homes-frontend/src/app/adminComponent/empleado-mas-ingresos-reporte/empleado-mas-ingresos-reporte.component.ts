import { Component } from '@angular/core';
import { reporteEmpleadoIngreso } from 'src/app/model/reporteEmpleadoIngreso';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-empleado-mas-ingresos-reporte',
  templateUrl: './empleado-mas-ingresos-reporte.component.html',
  styleUrls: ['./empleado-mas-ingresos-reporte.component.css']
})
export class EmpleadoMasIngresosReporteComponent {
  registroLista:reporteEmpleadoIngreso[]=[];
  constructor(private adminService:adminServices){
  

    this.adminService.reporteEmpleadoIngreso().subscribe((lista:reporteEmpleadoIngreso[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

  }
}
