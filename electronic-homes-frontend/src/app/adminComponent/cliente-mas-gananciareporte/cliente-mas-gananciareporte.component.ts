import { Component } from '@angular/core';
import { reporteClienteGanancias } from 'src/app/model/reporteClienteGanancias';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-cliente-mas-gananciareporte',
  templateUrl: './cliente-mas-gananciareporte.component.html',
  styleUrls: ['./cliente-mas-gananciareporte.component.css']
})
export class ClienteMasGananciareporteComponent {
  registroLista:reporteClienteGanancias[]=[];

  constructor(private adminService:adminServices){
  

    this.adminService.reporteClienteMasGanancia().subscribe((lista:reporteClienteGanancias[])=>{
      this.registroLista=lista;
      console.log("ejecutado");
      console.log(this.registroLista);
    });

}
}
