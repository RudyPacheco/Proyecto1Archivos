import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { productoBodega } from 'src/app/model/productoBodega';
import { productoSucursal } from 'src/app/model/productoSucursal';
import { solicitudProducto } from 'src/app/model/solicitudProducto';
import { adminServices } from 'src/app/services/admin.service';
import { bodegaService } from 'src/app/services/bodega.service';
import { loginServices } from 'src/app/services/login.services';
import { sucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-sucursal-form',
  templateUrl: './solicitud-sucursal-form.component.html',
  styleUrls: ['./solicitud-sucursal-form.component.css']
})
export class SolicitudSucursalFormComponent {
  nuevoEmpForm!:FormGroup;  
  IdEmpleado!:string;
  productoLista:any[]=[];
  nombres:string[]=[];
  cantidadDisp:number=0;


  constructor(private sucursalService:sucursalService,private builder:FormBuilder,private router:Router,private adminService:adminServices,private bodegaService:bodegaService,private loginService:loginServices) {
    this.nuevoEmpForm=this.builder.group({
      sucursalOrigen:['',Validators.required],
      idProducto:['',Validators.required],
      cantidad:['',Validators.required],
    })    

    if (this.loginService.empleadoAc.codigo_sucursal=="central01") {
      this.nombres.push("sur01");
      this.nombres.push("norte01");
      this.nombres.push("bodega01");
    }else if(this.loginService.empleadoAc.codigo_sucursal=="sur01"){
      this.nombres.push("central01");
      this.nombres.push("norte01");
      this.nombres.push("bodega01");
    }else if (this.loginService.empleadoAc.codigo_sucursal=="norte01") {
      this.nombres.push("central01");
      this.nombres.push("sur01");
      this.nombres.push("bodega01")
    }


   }

   solicitarProducto(){
      if (this.nuevoEmpForm.get("cantidad")?.value<=this.cantidadDisp) {
        
        this.popAfirmation();
        //falta enviar la peticion xd
        this.sucursalService.enviarSolicitud(new solicitudProducto(0,this.nuevoEmpForm.get("idProducto")?.value,this.nuevoEmpForm.get("cantidad")?.value,this.nuevoEmpForm.get("sucursalOrigen")?.value,this.loginService.empleadoAc.codigo_sucursal,"Pendiente")).subscribe((result:solicitudProducto)=>{
          this.router.navigate(['inventario']);
        });
      }else{
        this.popErro();
      }
   }

   cargarProduto(){
    console.log("xd")
    if (this.nuevoEmpForm.get("sucursalOrigen")?.value=="bodega01") {
      this.bodegaService.listarProducto().subscribe((lista:productoBodega[])=>{
        this.productoLista=lista;
        console.log("ejecutado");
        console.log(this.productoLista);
      });
    }else  {
      
    this.sucursalService.listarProducto(this.nuevoEmpForm.get("sucursalOrigen")?.value).subscribe((lista:productoSucursal[])=>{
      this.productoLista=lista;
      console.log("ejecutado");
      console.log(this.productoLista);
     


    });
    
  

    }

   }


   cantidadStock(){
    
    if (this.nuevoEmpForm.get("sucursalOrigen")?.value=="bodega") {
      console.log("entrando stock")
      console.log(this.nuevoEmpForm.get("idProducto")?.value);
      for (let index = 0; index < this.productoLista.length; index++) {

          let element =this.productoLista[index] as productoBodega ;
        if (this.nuevoEmpForm.get("idProducto")?.value==element.codigo_producto) {
            this.cantidadDisp=element.cantidad_producto;
            console.log(element.cantidad_producto);
        } 
      }
    }else{
      for (let index = 0; index < this.productoLista.length; index++) {
         const element =this.productoLista[index] as productoSucursal ;
        if (this.nuevoEmpForm.get("idProducto")?.value==element.codigo_producto) {
            this.cantidadDisp=element.cantidad_producto;
            console.log(element.cantidad_producto);
        } 
      }
    }
   

   }




   public popAfirmation(){
    Swal.fire(
      'Solicitud Enviada',
    )
  }


  public popErro(){
    Swal.fire(
      'Error',
      'La cantidad solicitada es mayor a la existente',
      'error'
    )
  }


  resetForm(){
    this.nuevoEmpForm.reset({
      cantidad: ''
    });
  }

}
