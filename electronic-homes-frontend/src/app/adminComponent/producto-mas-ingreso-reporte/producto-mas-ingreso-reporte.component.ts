import { Component } from '@angular/core';
import { reporteMasIngreso } from 'src/app/model/reporteMasIngreso';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-producto-mas-ingreso-reporte',
  templateUrl: './producto-mas-ingreso-reporte.component.html',
  styleUrls: ['./producto-mas-ingreso-reporte.component.css']
})
export class ProductoMasIngresoReporteComponent {
  registroLista:reporteMasIngreso[]=[];

  constructor(private adminService:adminServices){
  

    this.adminService.reporteMasIngreso().subscribe((lista:reporteMasIngreso[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

}
}
