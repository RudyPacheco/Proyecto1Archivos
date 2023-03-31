import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/model/cliente';
import { sucursalService } from 'src/app/services/sucursal.service';
import { vendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent {

  ClienteLista:cliente[]=[];

  constructor(private vendedorService:vendedorService,private router:Router){
    this.vendedorService.listadoclientes().subscribe((lista:cliente[])=>{
      this.ClienteLista=lista;
      console.log(this.ClienteLista);
    
  });
  }


  
}
