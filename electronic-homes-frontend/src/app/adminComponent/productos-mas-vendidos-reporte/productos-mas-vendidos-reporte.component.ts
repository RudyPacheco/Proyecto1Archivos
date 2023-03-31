import { Component } from '@angular/core';
import { ReporteMasVendidos } from 'src/app/model/reporteMasVendidos';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-productos-mas-vendidos-reporte',
  templateUrl: './productos-mas-vendidos-reporte.component.html',
  styleUrls: ['./productos-mas-vendidos-reporte.component.css']
})
export class ProductosMasVendidosReporteComponent {

  registroLista:ReporteMasVendidos[]=[];

  constructor(private adminService:adminServices){
  

    this.adminService.reporteProductoMasVendido().subscribe((lista:ReporteMasVendidos[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

}

}
