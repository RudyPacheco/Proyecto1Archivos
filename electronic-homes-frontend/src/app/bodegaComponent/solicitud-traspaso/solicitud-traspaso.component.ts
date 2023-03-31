import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { solicitudProducto } from 'src/app/model/solicitudProducto';
import { loginServices } from 'src/app/services/login.services';
import { sucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-traspaso',
  templateUrl: './solicitud-traspaso.component.html',
  styleUrls: ['./solicitud-traspaso.component.css']
})
export class SolicitudTraspasoComponent {

  productoLista:solicitudProducto[]=[];
  usuarioLog:empleadoLoged;

  constructor(private loginService:loginServices,private router:Router,private sucursalService:sucursalService){
    this.usuarioLog=loginService.empleadoAc;


    this.sucursalService.listarSolicitudRecibidas("bodega01").subscribe((lista:solicitudProducto[])=>{
      this.productoLista=lista;
      console.log("ejecutado");
      console.log(this.productoLista);
    });



  
  }

  aceptar(solicitud:solicitudProducto){
    console.log(solicitud.id_solicitud);
    this.sucursalService.enviarAceptacion(solicitud.id_solicitud).subscribe();
    this.router.navigate(['bodega']);
    this.popAfirmation();
  }

  rechazar(solicitud:solicitudProducto){
    console.log(solicitud.id_solicitud);
    this.sucursalService.enviarRechazo(solicitud.id_solicitud).subscribe();
    this.router.navigate(['bodega']);
    this.popErro();
  }








  solicitud(){
    console.log(this.usuarioLog.codigo_sucursal);
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
