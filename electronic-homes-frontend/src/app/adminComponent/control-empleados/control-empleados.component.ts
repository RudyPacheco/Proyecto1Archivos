import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { adminServices } from 'src/app/services/admin.service';

@Component({
  selector: 'app-control-empleados',
  templateUrl: './control-empleados.component.html',
  styleUrls: ['./control-empleados.component.css']
})
export class ControlEmpleadosComponent {

  empleadosLista:empleadoLoged[]=[];

  constructor(private adminService:adminServices,private router:Router){
    this.adminService.listarEmpleados().subscribe((lista:empleadoLoged[])=>{
      this.empleadosLista=lista;
      console.log(this.empleadosLista);
    
  });
  }


  

  formulario(){
    this.router.navigate(['NuevoEmpleado']);
  }
}
