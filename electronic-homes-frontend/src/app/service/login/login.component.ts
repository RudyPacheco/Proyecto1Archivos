import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empleadoLoged } from 'src/app/model/empleadoLoged';
import { usuarioLoged } from 'src/app/model/usuarioLoged';
import { usuarioLogin } from 'src/app/model/usuarioLogin';
import { loginServices } from 'src/app/services/login.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  usuarioL!:empleadoLoged;
  userPet!:usuarioLogin;

  constructor(private serviceLogin:loginServices,private router:Router) {}

  ngOnInit(): void {}

  email: string= "";
  password: string="";
  area: string | undefined;

 

  login() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.area);
    
 


    this.serviceLogin.getUser(this.email,this.password).subscribe(
(created:empleadoLoged) =>{

  if (created==null || created == undefined) {
    console.log("manejando el error");
    this.popErro();

  }else{
    this.serviceLogin.empleadoAc=created;   
    if (created.pasword==this.password) {
      
      console.log(created.codigo_sucursal);
      console.log(created.nombre);
      console.log(created.codigo_area);
      this.serviceLogin.empleadoAc=created;
      this.serviceLogin.agregarUsuario(created);
      switch (created.codigo_area) {
        case 1:
          console.log("redireccionar a 1");
          this.router.navigate(['vendedor']);
          break;
        case 2:
          this.router.navigate(['inventario']);
          break;
        case 3:
          this.router.navigate(['bodega']);
          break;
        case 4:
          this.router.navigate(['admin']);
          break;
        default:
          break;
      }
  
    }else{
      this.popContrsenia();
    }
  
  }
  
  
}

    )

  }


  public popAfirmation(){
    Swal.fire(
      'Empleado Registardo',
      'success'
    )
  }


  public popContrsenia(){
    Swal.fire(
      'Error',
      'Contraseña incorrecta',
      
    )
  }


  public popErro(){
    Swal.fire(
      'Error',
      'El usuario no existe',
      
    )
  }


  

}
