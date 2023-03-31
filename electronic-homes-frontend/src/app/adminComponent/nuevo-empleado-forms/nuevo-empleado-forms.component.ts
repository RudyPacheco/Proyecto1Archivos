import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { idGenerado } from 'src/app/model/idGenerado';
import { adminServices } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-empleado-forms',
  templateUrl: './nuevo-empleado-forms.component.html',
  styleUrls: ['./nuevo-empleado-forms.component.css']
})
export class NuevoEmpleadoFormsComponent {

  nuevoEmpForm!:FormGroup;  
  IdEmpleado:string="";

  constructor(private builder:FormBuilder,private router:Router,private adminService:adminServices) {
    this.nuevoEmpForm=this.builder.group({
      idEmpleado:[this.IdEmpleado],
      nombreEmpleado:['',Validators.required],
      apellidoEmpleado:['',Validators.required],
      passwordEmpleado:['',Validators.required],
      salarioEmpleado:['',Validators.required],
      areaEmpleado:['',Validators.required],
      sucursalEmpleado:['',Validators.required]

    })    

   }

   generarEmpleado(){

    console.log(this.nuevoEmpForm.value);
    //new empleadoLoged(this.nuevoEmpForm.get("idEmpleado")?.value,this.nuevoEmpForm.get("nombreEmpleado")?.value,this.nuevoEmpForm.get("apellidoEmpleado")?.value,this.nuevoEmpForm.get("passwordEmpleado")?.value,this.nuevoEmpForm.get("salarioEmpleado")?.value,this.nuevoEmpForm.get("areaEmpleado")?.value,this.nuevoEmpForm.get("sucursalEmpleado")?.value);
    console.log("--------");
    console.log(new empleadoLoged(this.IdEmpleado,this.nuevoEmpForm.get("nombreEmpleado")?.value,this.nuevoEmpForm.get("apellidoEmpleado")?.value,this.nuevoEmpForm.get("passwordEmpleado")?.value,this.nuevoEmpForm.get("salarioEmpleado")?.value,this.nuevoEmpForm.get("areaEmpleado")?.value,this.nuevoEmpForm.get("sucursalEmpleado")?.value));
    this.adminService.registrarEmpleado(this.IdEmpleado,new empleadoLoged(this.IdEmpleado,this.nuevoEmpForm.get("nombreEmpleado")?.value,this.nuevoEmpForm.get("apellidoEmpleado")?.value,this.nuevoEmpForm.get("salarioEmpleado")?.value,this.nuevoEmpForm.get("areaEmpleado")?.value,this.nuevoEmpForm.get("sucursalEmpleado")?.value,this.nuevoEmpForm.get("passwordEmpleado")?.value)).subscribe()
    this.popAfirmation();
    this.router.navigate(['controlEmpleados']);
  }

   generarID(){
    console.log("generando id ");
    this.adminService.generarID(this.nuevoEmpForm.get("areaEmpleado")?.value).subscribe((idGen:idGenerado)=>{
      this.IdEmpleado=idGen.id;
      console.log(this.IdEmpleado);
      console.log(idGen.id);

    


    })



   }

   public popAfirmation(){
    Swal.fire(
      'Empleado Registardo',
      'success'
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


