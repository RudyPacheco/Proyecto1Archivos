import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from 'src/app/services/login.services';

@Component({
  selector: 'app-header-vendedor',
  templateUrl: './header-vendedor.component.html',
  styleUrls: ['./header-vendedor.component.css']
})
export class HeaderVendedorComponent implements OnInit{
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





}
