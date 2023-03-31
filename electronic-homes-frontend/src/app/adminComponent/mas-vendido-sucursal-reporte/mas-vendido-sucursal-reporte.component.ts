import { Component } from '@angular/core';
import { reporteMasVendidoSucursal } from 'src/app/model/reporteMasVendidoSucursal';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-mas-vendido-sucursal-reporte',
  templateUrl: './mas-vendido-sucursal-reporte.component.html',
  styleUrls: ['./mas-vendido-sucursal-reporte.component.css']
})
export class MasVendidoSucursalReporteComponent {
  codigoSucursal:string="";


  registroLista:reporteMasVendidoSucursal[]=[];


  constructor(private adminService:adminServices){
  

  

   


  }


  cargarDatos(){
    if (this.codigoSucursal=="central") {
      this.adminService.reporteMasVendidoSucursal("central01").subscribe((lista:reporteMasVendidoSucursal[])=>{
        this.registroLista=lista;
        console.log("ejecutado");
        console.log(this.registroLista);
      });
    }else if (this.codigoSucursal=="sur") {
      this.adminService.reporteMasVendidoSucursal("sur01").subscribe((lista:reporteMasVendidoSucursal[])=>{
        this.registroLista=lista;
        console.log("ejecutado");
        console.log(this.registroLista);
    });
    }else if(this.codigoSucursal=="norte"){
      this.adminService.reporteMasVendidoSucursal("norte01").subscribe((lista:reporteMasVendidoSucursal[])=>{
        this.registroLista=lista;
        console.log("ejecutado");
        console.log(this.registroLista);
    });
    
    }
    
  }
}
