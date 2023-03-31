import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { idGenerado } from 'src/app/model/idGenerado';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-registrar-producto-form',
  templateUrl: './registrar-producto-form.component.html',
  styleUrls: ['./registrar-producto-form.component.css']
})
export class RegistrarProductoFormComponent {


  nuevoEmpForm!:FormGroup;  
  IdGenerado:string="";

  constructor(private builder:FormBuilder,private router:Router,private adminService:adminServices) {
    this.nuevoEmpForm=this.builder.group({
      nombreProducto:['',Validators.required],
      DespcripcionProducto:['',Validators.required],
      precioProducto:['',Validators.required],
      cantidadProducto:['',Validators.required],
      
    })    

   }


   registrarProducto(){
    this.IdGenerado="lol";
   }
}
