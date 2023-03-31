import { Component } from '@angular/core';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { productoSucursal } from 'src/app/model/productoSucursal';
import { bodegaService } from 'src/app/services/bodega.service';
import { loginServices } from 'src/app/services/login.services';
import { sucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-producto-sucursal',
  templateUrl: './producto-sucursal.component.html',
  styleUrls: ['./producto-sucursal.component.css']
})
export class ProductoSucursalComponent {
  
  productoLista:productoSucursal[]=[];
  empleadoLog:empleadoLoged;
  constructor(private sucursalService:sucursalService,private loginService:loginServices){
    this.empleadoLog=loginService.empleadoAc;

    this.sucursalService.listarProducto(this.empleadoLog.codigo_sucursal).subscribe((lista:productoSucursal[])=>{
      this.productoLista=lista;
      console.log("ejecutado");
      console.log(this.productoLista);
    });


   
  }





}
