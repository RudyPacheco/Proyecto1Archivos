import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { empleadoLoged } from "../model/empleadoLoged";
import { idGenerado } from "../model/idGenerado";
import { reporteClienteGanancias } from "../model/reporteClienteGanancias";
import { reporteEmpleadoIngreso } from "../model/reporteEmpleadoIngreso";
import { reporteMasIngreso } from "../model/reporteMasIngreso";
import { reporteMasIngresoSucursal } from "../model/reporteMasIngresoSucursal";
import { ReporteMasVendidos } from "../model/reporteMasVendidos";
import { reporteMasVendidoSucursal } from "../model/reporteMasVendidoSucursal";
import { reporteSucursalIngreso } from "../model/reporteSucursalIngreso";
import { reporteSucursalVentas } from "../model/reporteSucursalVentas";

@Injectable({
    providedIn:'root'
})


export class adminServices{

    readonly APY_URL = "http://localhost:8080/Empleados/";
    readonly APY_Admin = "http://localhost:8080/Admin/";
    readonly APY_Reporte = "http://localhost:8080/Reporte/";

    constructor(private httpClient: HttpClient) {  }


    public listarEmpleados():Observable<empleadoLoged[]>{
        return this.httpClient.get<empleadoLoged[]>(this.APY_URL+"lista");

    }


    public generarID(area:string):Observable<idGenerado>{
        return this.httpClient.get<idGenerado>(this.APY_Admin+"generarID?area="+area);
    }

    public registrarEmpleado(id:string,userNUevo:empleadoLoged):Observable<HttpStatusCode>{
        return this.httpClient.post<HttpStatusCode>(this.APY_Admin+"empleadoNuevo?id="+id,userNUevo);
    }

    //reportes 

    public reporteProductoMasVendido():Observable<ReporteMasVendidos[]>{
        return this.httpClient.get<ReporteMasVendidos[]>(this.APY_Reporte+"ProductosMasVendidos");
    }

    public reporteClienteMasGanancia():Observable<reporteClienteGanancias[]>{
        return this.httpClient.get<reporteClienteGanancias[]>(this.APY_Reporte+"ClienteMasGanancia");
    }
    
    public reporteSucursalVentas():Observable<reporteSucursalVentas[]>{
        return this.httpClient.get<reporteSucursalVentas[]>(this.APY_Reporte+"SucursalMasVentas");
    }

    public reporteSucursalIngreso():Observable<reporteSucursalIngreso[]>{
        return this.httpClient.get<reporteSucursalIngreso[]>(this.APY_Reporte+"SucursalMasIngresos");
    }

    public reporteEmpleadoVentas():Observable<reporteEmpleadoIngreso[]>{
        return this.httpClient.get<reporteEmpleadoIngreso[]>(this.APY_Reporte+"EmpleadoMasVentas");
    }

    public reporteEmpleadoIngreso():Observable<reporteEmpleadoIngreso[]>{
        return this.httpClient.get<reporteEmpleadoIngreso[]>(this.APY_Reporte+"EmpleadoMasIngresos");
    }

    public reporteMasIngreso():Observable<reporteMasIngreso[]>{
        return this.httpClient.get<reporteMasIngreso[]>(this.APY_Reporte+"ProductoMasIngresos");
    }

    public reporteMasVendidoSucursal(codigo_sucursal:string):Observable<reporteMasVendidoSucursal[]>{
        return this.httpClient.get<reporteMasVendidoSucursal[]>(this.APY_Reporte+"ProductoMasVendidosS?codigo_sucursal="+codigo_sucursal);
    }

    public reporteMasIngresoSucursal(codigo_sucursal:string):Observable<reporteMasIngresoSucursal[]>{
        return this.httpClient.get<reporteMasIngresoSucursal[]>(this.APY_Reporte+"ProductoMasIngresosS?codigo_sucursal="+codigo_sucursal);
    }










}