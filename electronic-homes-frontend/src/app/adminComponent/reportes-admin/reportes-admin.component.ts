import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes-admin',
  templateUrl: './reportes-admin.component.html',
  styleUrls: ['./reportes-admin.component.css']
})
export class ReportesAdminComponent {

  constructor(private router:Router){

  }


  reporte1(){
    this.router.navigate(['ReporteTenVendidas']);
  }

  reporte2(){
    this.router.navigate(['ReporteClienteGanancia']);
  }

  reporte3(){
    this.router.navigate(['ReporteSucursalMasVenta']);
  }


  reporte4(){
    this.router.navigate(['ReporteSucursalMasIngreso']);
  }



  reporte5(){
    this.router.navigate(['ReporteEmpleadoMasVentas']);
  }

  reporte6(){
    this.router.navigate(['ReporteEmpleadoMasIngresos']);
  }

  reporte7(){
    this.router.navigate(['ReporteProductoMasIngresos']);
  }

  reporte8(){
    this.router.navigate(['ReporteMasIngresoSucursal']);
  }

  reporte9(){
    this.router.navigate(['ReporteMasVentasSucursal']);
  }

  
  
}



