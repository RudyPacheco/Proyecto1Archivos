import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteMasGananciareporteComponent } from './adminComponent/cliente-mas-gananciareporte/cliente-mas-gananciareporte.component';
import { ControlEmpleadosComponent } from './adminComponent/control-empleados/control-empleados.component';
import { EmpleadoMasIngresosReporteComponent } from './adminComponent/empleado-mas-ingresos-reporte/empleado-mas-ingresos-reporte.component';
import { EmpleadoMasVentasReporteComponent } from './adminComponent/empleado-mas-ventas-reporte/empleado-mas-ventas-reporte.component';
import { HomeAdminComponent } from './adminComponent/home-admin/home-admin.component';
import { MasIngresoSucursalReporteComponent } from './adminComponent/mas-ingreso-sucursal-reporte/mas-ingreso-sucursal-reporte.component';
import { MasVendidoSucursalReporteComponent } from './adminComponent/mas-vendido-sucursal-reporte/mas-vendido-sucursal-reporte.component';
import { NuevoEmpleadoFormsComponent } from './adminComponent/nuevo-empleado-forms/nuevo-empleado-forms.component';
import { ProductoMasIngresoReporteComponent } from './adminComponent/producto-mas-ingreso-reporte/producto-mas-ingreso-reporte.component';
import { ProductosMasVendidosReporteComponent } from './adminComponent/productos-mas-vendidos-reporte/productos-mas-vendidos-reporte.component';
import { ReportesAdminComponent } from './adminComponent/reportes-admin/reportes-admin.component';
import { SucursalMasIngresosReporteComponent } from './adminComponent/sucursal-mas-ingresos-reporte/sucursal-mas-ingresos-reporte.component';
import { SucursalMasVentasReporteComponent } from './adminComponent/sucursal-mas-ventas-reporte/sucursal-mas-ventas-reporte.component';
import { AppComponent } from './app.component';
import { EditarProductoFormComponent } from './bodegaComponent/editar-producto-form/editar-producto-form.component';
import { HomeBodegaComponent } from './bodegaComponent/home-bodega/home-bodega.component';
import { IngresarProductoFormComponent } from './bodegaComponent/ingresar-producto-form/ingresar-producto-form.component';
import { ProductoBodegaComponent } from './bodegaComponent/producto-bodega/producto-bodega.component';
import { RegistrarProductoFormComponent } from './bodegaComponent/registrar-producto-form/registrar-producto-form.component';
import { SolicitudTraspasoComponent } from './bodegaComponent/solicitud-traspaso/solicitud-traspaso.component';
import { HomeInventarioComponent } from './inventarioComponent/home-inventario/home-inventario.component';
import { ProductoSucursalComponent } from './inventarioComponent/producto-sucursal/producto-sucursal.component';
import { SolicitudSucursalFormComponent } from './inventarioComponent/solicitud-sucursal-form/solicitud-sucursal-form.component';
import { SolicitudesRealizadaComponent } from './inventarioComponent/solicitudes-realizada/solicitudes-realizada.component';
import { TablaSolicitudComponent } from './inventarioComponent/tabla-solicitud/tabla-solicitud.component';
import { productoBodega } from './model/productoBodega';
import { LoginComponent } from './service/login/login.component';
import { GenerarVentaComponent } from './vendedorComponent/generar-venta/generar-venta.component';
import { HomeVendedorComponent } from './vendedorComponent/home-vendedor/home-vendedor.component';
import { TablaClientesComponent } from './vendedorComponent/tabla-clientes/tabla-clientes.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'vendedor',component:HomeVendedorComponent},
  {path:'generarVenta',component:GenerarVentaComponent},
  {path:'tablaClientes',component:TablaClientesComponent},
  {path:'inventario',component:HomeInventarioComponent},
  {path:'bodega',component:HomeBodegaComponent},
  {path:'admin',component:HomeAdminComponent},
  {path:'controlEmpleados',component:ControlEmpleadosComponent},
  {path:'reportes',component:ReportesAdminComponent},
  {path:'bodegaProductos',component:ProductoBodegaComponent},
  {path:'NuevoEmpleado',component:NuevoEmpleadoFormsComponent},
  {path:'EdicionProducto',component:EditarProductoFormComponent},
  {path:'IngresarProducto',component:IngresarProductoFormComponent},
  {path:'registrarProducto',component:RegistrarProductoFormComponent},
  {path:'solicitudBodega',component:SolicitudTraspasoComponent},
  {path:'solicitudSucursalForm',component:SolicitudSucursalFormComponent},
  {path:'productoSucursal',component:ProductoSucursalComponent},
  {path:'SolicitudSucursal',component:TablaSolicitudComponent},
  {path:'SolicitudRealizadas',component:SolicitudesRealizadaComponent},
  {path:'ReporteTenVendidas',component:ProductosMasVendidosReporteComponent},
  {path:'ReporteClienteGanancia',component:ClienteMasGananciareporteComponent},
  {path:'ReporteSucursalMasVenta',component:SucursalMasVentasReporteComponent},
  {path:'ReporteSucursalMasIngreso',component:SucursalMasIngresosReporteComponent},
  {path:'ReporteEmpleadoMasVentas',component:EmpleadoMasVentasReporteComponent},
  {path:'ReporteEmpleadoMasIngresos',component:EmpleadoMasIngresosReporteComponent},
  {path:'ReporteProductoMasIngresos',component:ProductoMasIngresoReporteComponent},
  {path:'ReporteMasIngresoSucursal',component:MasIngresoSucursalReporteComponent},
  {path:'ReporteMasVentasSucursal',component:MasVendidoSucursalReporteComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
