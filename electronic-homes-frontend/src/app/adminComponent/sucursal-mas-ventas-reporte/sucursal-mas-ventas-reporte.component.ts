import { Component } from '@angular/core';
import { reporteSucursalVentas } from 'src/app/model/reporteSucursalVentas';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sucursal-mas-ventas-reporte',
  templateUrl: './sucursal-mas-ventas-reporte.component.html',
  styleUrls: ['./sucursal-mas-ventas-reporte.component.css']
})
export class SucursalMasVentasReporteComponent {
  registroLista:reporteSucursalVentas[]=[];

  constructor(private adminService:adminServices){
  

    this.adminService.reporteSucursalVentas().subscribe((lista:reporteSucursalVentas[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

  }
}
