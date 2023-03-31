import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { productoBodega } from 'src/app/model/productoBodega';
import { adminServices } from 'src/app/services/admin.service';
import { bodegaService } from 'src/app/services/bodega.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-producto-form',
  templateUrl: './ingresar-producto-form.component.html',
  styleUrls: ['./ingresar-producto-form.component.css']
})
export class IngresarProductoFormComponent {
  nuevoEmpForm!:FormGroup;  
  IdEmpleado!:string;
  productoLista:productoBodega[]=[];

  constructor(private builder:FormBuilder,private router:Router,private adminService:adminServices,private bodegaService:bodegaService) {
    this.nuevoEmpForm=this.builder.group({
      id_producto:['',Validators.required],
      cantidad_producto:['',Validators.required],
    })    

    this.bodegaService.listarProducto().subscribe((lista:productoBodega[])=>{
      this.productoLista=lista;
      console.log("ejecutado");
      console.log(this.productoLista);
    });

   }

   ingresarProducto(){
      console.log(this.nuevoEmpForm.get("id_producto")?.value);
      console.log(this.nuevoEmpForm.get("cantidad_producto")?.value);
      this.bodegaService.insertarProducto(this.nuevoEmpForm.get("id_producto")?.value,this.nuevoEmpForm.get("cantidad_producto")?.value).subscribe();
      this.router.navigate(['bodegaProductos']);
      this.popAfirmation();
    }


    public popAfirmation(){
      Swal.fire(
        'Producto Ingresado',
      )
    }
  
  
    public popErro(){
      Swal.fire(
        'Error',
        'Ocurrio algun error',
        'error'
      )
    }

}
