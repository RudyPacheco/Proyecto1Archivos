import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { productoSucursal } from "../model/productoSucursal";
import { solicitudProducto } from "../model/solicitudProducto";

@Injectable({
    providedIn:'root'
})

export class sucursalService{

    readonly APY_URL = "http://localhost:8080/Sucursal/";


    constructor(private httpClient: HttpClient) {  }

    public listarProducto(codigo:string):Observable<productoSucursal[]>{
        return this.httpClient.get<productoSucursal[]>(this.APY_URL+"listaProd?codigo_sucursarl="+codigo);
    }


    public enviarSolicitud(solicitud:solicitudProducto):Observable<solicitudProducto>{
        return this.httpClient.post<solicitudProducto>(this.APY_URL+"solicitud",solicitud);
    }

    public listarSolicitud(codigo_sucursal:string):Observable<solicitudProducto[]>{
        return this.httpClient.get<solicitudProducto[]>(this.APY_URL+"solicitudesEchas?codigo_sucursal="+codigo_sucursal);
    }

    public listarSolicitudRecibidas(codigo_sucursal:string):Observable<solicitudProducto[]>{
        return this.httpClient.get<solicitudProducto[]>(this.APY_URL+"solicitudesRecibidas?codigo_sucursal="+codigo_sucursal);
    }

    public enviarAceptacion(codigo_solicitud:number):Observable<any>{
        return this.httpClient.get<any>(this.APY_URL+"aceptacion?codigo_solicitud="+codigo_solicitud);
    }


    public enviarAceptacionSucursal(codigo_solicitud:number):Observable<any>{
        return this.httpClient.get<any>(this.APY_URL+"aceptacionSucursal?codigo_solicitud="+codigo_solicitud);
    }

    public enviarRechazo(codigo_solicitud:number):Observable<any>{
        return this.httpClient.get<any>(this.APY_URL+"rechazo?codigo_solicitud="+codigo_solicitud);
    }



}