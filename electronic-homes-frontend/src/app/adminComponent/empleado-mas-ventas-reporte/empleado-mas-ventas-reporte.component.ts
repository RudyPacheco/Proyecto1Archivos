import { Component } from '@angular/core';
import { reporteEmpleadoIngreso } from 'src/app/model/reporteEmpleadoIngreso';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-empleado-mas-ventas-reporte',
  templateUrl: './empleado-mas-ventas-reporte.component.html',
  styleUrls: ['./empleado-mas-ventas-reporte.component.css']
})
export class EmpleadoMasVentasReporteComponent {
  registroLista:reporteEmpleadoIngreso[]=[];

  constructor(private adminService:adminServices){
  

    this.adminService.reporteEmpleadoIngreso().subscribe((lista:reporteEmpleadoIngreso[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

  }
}
