import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from 'src/app/services/login.services';

@Component({
  selector: 'app-header-inventario',
  templateUrl: './header-inventario.component.html',
  styleUrls: ['./header-inventario.component.css']
})
export class HeaderInventarioComponent implements OnInit {

  nombreUsuario:string="";

  constructor(private loginService:loginServices,private router:Router) { 
    this.nombreUsuario=this.loginService.empleadoAc.nombre;
  }

  ngOnInit(): void {
  }

  salir(){
    this.loginService.eliminarToken();
    this.router.navigate(['login']);
  }


  perfil(){
    this.router.navigate(['MiPerfilE']);
  }




}
