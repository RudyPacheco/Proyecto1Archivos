import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { solicitudProducto } from 'src/app/model/solicitudProducto';
import { loginServices } from 'src/app/services/login.services';
import { sucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-solicitudes-realizada',
  templateUrl: './solicitudes-realizada.component.html',
  styleUrls: ['./solicitudes-realizada.component.css']
})
export class SolicitudesRealizadaComponent {
  productoLista:solicitudProducto[]=[];
  empleadoLog:empleadoLoged;
  constructor(private sucursalService:sucursalService,private loginService:loginServices,private router:Router){
    this.empleadoLog=loginService.empleadoAc;
    if (this.empleadoLog.codigo_area==3) {
      this.sucursalService.listarSolicitud("bodega").subscribe((lista:solicitudProducto[])=>{
        this.productoLista=lista;
        console.log("ejecutado");
        console.log(this.productoLista);
      });
    }else{
      this.sucursalService.listarSolicitud(this.empleadoLog.codigo_sucursal).subscribe((lista:solicitudProducto[])=>{
        this.productoLista=lista;
        console.log("ejecutado");
        console.log(this.productoLista);
      });
    }
  


   
  }


  redirSolicitar(){
    this.router.navigate(['solicitudSucursalForm']);
  }
}
