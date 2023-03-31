import { Component } from '@angular/core';
import { reporteMasIngresoSucursal } from 'src/app/model/reporteMasIngresoSucursal';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-mas-ingreso-sucursal-reporte',
  templateUrl: './mas-ingreso-sucursal-reporte.component.html',
  styleUrls: ['./mas-ingreso-sucursal-reporte.component.css']
})
export class MasIngresoSucursalReporteComponent {
  codigoSucursal:string="";


  registroLista:reporteMasIngresoSucursal[]=[];


  constructor(private adminService:adminServices){
  

  

   


  }


  cargarDatos(){
    if (this.codigoSucursal=="central") {
      this.adminService.reporteMasIngresoSucursal("central01").subscribe((lista:reporteMasIngresoSucursal[])=>{
        this.registroLista=lista;
        console.log("ejecutado");
        console.log(this.registroLista);
      });
    }else if (this.codigoSucursal=="sur") {
      this.adminService.reporteMasIngresoSucursal("sur01").subscribe((lista:reporteMasIngresoSucursal[])=>{
        this.registroLista=lista;
        console.log("ejecutado");
        console.log(this.registroLista);
    });
    }else if(this.codigoSucursal=="norte"){
      this.adminService.reporteMasIngresoSucursal("norte01").subscribe((lista:reporteMasIngresoSucursal[])=>{
        this.registroLista=lista;
        console.log("ejecutado");
        console.log(this.registroLista);
    });
    
    }
    
  }
}
