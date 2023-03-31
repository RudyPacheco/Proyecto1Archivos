import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './service/login/login.component';
import { loginServices } from './services/login.services';
import { HomeVendedorComponent } from './vendedorComponent/home-vendedor/home-vendedor.component';
import { HomeInventarioComponent } from './inventarioComponent/home-inventario/home-inventario.component';
import { HomeBodegaComponent } from './bodegaComponent/home-bodega/home-bodega.component';
import { HomeAdminComponent } from './adminComponent/home-admin/home-admin.component';
import { HeaderAdminComponent } from './adminComponent/header-admin/header-admin.component';
import { HeaderBodegaComponent } from './bodegaComponent/header-bodega/header-bodega.component';
import { HeaderInventarioComponent } from './inventarioComponent/header-inventario/header-inventario.component';
import { HeaderVendedorComponent } from './vendedorComponent/header-vendedor/header-vendedor.component';
import { ControlEmpleadosComponent } from './adminComponent/control-empleados/control-empleados.component';
import { ReportesAdminComponent } from './adminComponent/reportes-admin/reportes-admin.component';
import { ProductoBodegaComponent } from './bodegaComponent/producto-bodega/producto-bodega.component';
import { SolicitudTraspasoComponent } from './bodegaComponent/solicitud-traspaso/solicitud-traspaso.component';
import { NuevoEmpleadoFormsComponent } from './adminComponent/nuevo-empleado-forms/nuevo-empleado-forms.component';
import { EditarProductoFormComponent } from './bodegaComponent/editar-producto-form/editar-producto-form.component';
import { IngresarProductoFormComponent } from './bodegaComponent/ingresar-producto-form/ingresar-producto-form.component';
import { RegistrarProductoFormComponent } from './bodegaComponent/registrar-producto-form/registrar-producto-form.component';
import { ProductoSucursalComponent } from './inventarioComponent/producto-sucursal/producto-sucursal.component';
import { SolicitudSucursalFormComponent } from './inventarioComponent/solicitud-sucursal-form/solicitud-sucursal-form.component';
import { TablaSolicitudComponent } from './inventarioComponent/tabla-solicitud/tabla-solicitud.component';
import { TablaSolicitudesComponent } from './bodegaComponent/tabla-solicitudes/tabla-solicitudes.component';
import { SolicitudesRealizadaComponent } from './inventarioComponent/solicitudes-realizada/solicitudes-realizada.component';
import { GenerarVentaComponent } from './vendedorComponent/generar-venta/generar-venta.component';
import { TablaClientesComponent } from './vendedorComponent/tabla-clientes/tabla-clientes.component';
import { ProductosMasVendidosReporteComponent } from './adminComponent/productos-mas-vendidos-reporte/productos-mas-vendidos-reporte.component';
import { ClienteMasGananciareporteComponent } from './adminComponent/cliente-mas-gananciareporte/cliente-mas-gananciareporte.component';
import { SucursalMasVentasReporteComponent } from './adminComponent/sucursal-mas-ventas-reporte/sucursal-mas-ventas-reporte.component';
import { SucursalMasIngresosReporteComponent } from './adminComponent/sucursal-mas-ingresos-reporte/sucursal-mas-ingresos-reporte.component';
import { EmpleadoMasVentasReporteComponent } from './adminComponent/empleado-mas-ventas-reporte/empleado-mas-ventas-reporte.component';
import { EmpleadoMasIngresosReporteComponent } from './adminComponent/empleado-mas-ingresos-reporte/empleado-mas-ingresos-reporte.component';
import { ProductoMasIngresoReporteComponent } from './adminComponent/producto-mas-ingreso-reporte/producto-mas-ingreso-reporte.component';
import { MasVendidoSucursalReporteComponent } from './adminComponent/mas-vendido-sucursal-reporte/mas-vendido-sucursal-reporte.component';
import { MasIngresoSucursalReporteComponent } from './adminComponent/mas-ingreso-sucursal-reporte/mas-ingreso-sucursal-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeVendedorComponent,
    HomeInventarioComponent,
    HomeBodegaComponent,
    HomeAdminComponent,
    HeaderAdminComponent,
    HeaderBodegaComponent,
    HeaderInventarioComponent,
    HeaderVendedorComponent,
    ControlEmpleadosComponent,
    ReportesAdminComponent,
    ProductoBodegaComponent,
    SolicitudTraspasoComponent,
    NuevoEmpleadoFormsComponent,
    EditarProductoFormComponent,
    IngresarProductoFormComponent,
    RegistrarProductoFormComponent,
    ProductoSucursalComponent,
    SolicitudSucursalFormComponent,
    TablaSolicitudComponent,
    TablaSolicitudesComponent,
    SolicitudesRealizadaComponent,
    GenerarVentaComponent,
    TablaClientesComponent,
    ProductosMasVendidosReporteComponent,
    ClienteMasGananciareporteComponent,
    SucursalMasVentasReporteComponent,
    SucursalMasIngresosReporteComponent,
    EmpleadoMasVentasReporteComponent,
    EmpleadoMasIngresosReporteComponent,
    ProductoMasIngresoReporteComponent,
    MasVendidoSucursalReporteComponent,
    MasIngresoSucursalReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [loginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
