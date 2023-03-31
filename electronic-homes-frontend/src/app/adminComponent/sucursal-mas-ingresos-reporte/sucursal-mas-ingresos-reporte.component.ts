import { Component } from '@angular/core';
import { reporteSucursalIngreso } from 'src/app/model/reporteSucursalIngreso';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sucursal-mas-ingresos-reporte',
  templateUrl: './sucursal-mas-ingresos-reporte.component.html',
  styleUrls: ['./sucursal-mas-ingresos-reporte.component.css']
})
export class SucursalMasIngresosReporteComponent {
  registroLista:reporteSucursalIngreso[]=[];

  constructor(private adminService:adminServices){
  

    this.adminService.reporteSucursalIngreso().subscribe((lista:reporteSucursalIngreso[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

  }
}
