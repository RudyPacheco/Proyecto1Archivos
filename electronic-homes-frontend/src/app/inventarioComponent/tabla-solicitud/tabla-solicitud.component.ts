import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { solicitudProducto } from 'src/app/model/solicitudProducto';
import { loginServices } from 'src/app/services/login.services';
import { sucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-solicitud',
  templateUrl: './tabla-solicitud.component.html',
  styleUrls: ['./tabla-solicitud.component.css']
})
export class TablaSolicitudComponent {

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
      this.sucursalService.listarSolicitudRecibidas(this.empleadoLog.codigo_sucursal).subscribe((lista:solicitudProducto[])=>{
        this.productoLista=lista;
        console.log("ejecutado");
        console.log(this.productoLista);
      });
    }
  


   
  }


  redirSolicitar(){
    this.router.navigate(['solicitudSucursalForm']);
  }


  aceptar(solicitud:solicitudProducto){
    console.log(solicitud.id_solicitud);
    this.sucursalService.enviarAceptacionSucursal(solicitud.id_solicitud).subscribe();
    this.router.navigate(['inventario']);
    this.popAfirmation();
  }


  rechazar(solicitud:solicitudProducto){
    console.log(solicitud.id_solicitud);
    this.sucursalService.enviarRechazo(solicitud.id_solicitud).subscribe();
    this.router.navigate(['inventario']);
    this.popErro();
  }

  public popAfirmation(){
    Swal.fire(
      'Solicitud Aceptada',
    )
  }

  public popErro(){
    Swal.fire(
      'Solicitud Rechazada',
      
      
    )
  }


}
