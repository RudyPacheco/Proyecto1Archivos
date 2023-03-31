import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { cliente } from "../model/cliente";
import { factura } from "../model/factura";
import { idGenerado } from "../model/idGenerado";
import { productoFactura } from "../model/productoFactura";

@Injectable({
    providedIn:'root'
})
export class vendedorService{

    readonly APY_URL = "http://localhost:8080/Ventas/";


    constructor(private httpClient: HttpClient) {  }


    public buscarCliente(nit:string):Observable<cliente>{
        return this.httpClient.get<cliente>(this.APY_URL+"buscarCliente?nit="+nit);
    }


    public generarID():Observable<idGenerado>{
        return this.httpClient.get<idGenerado>(this.APY_URL+"generarId");
    }


    public generarDescuento(nit:string):Observable<number>{
        return this.httpClient.get<number>(this.APY_URL+"validarDescuento?nit="+nit);
    }

    public enviarFactura(factura:factura):Observable<any>{
        return this.httpClient.post<any>(this.APY_URL+"recibirFactura",factura);
    }
    public enviarProductos(codigo_sucursal:string,productos:productoFactura[]):Observable<any>{
        return this.httpClient.post<any>(this.APY_URL+"listaProductos?codigo_sucursal="+codigo_sucursal,productos);
    }

    public registrarCliente(clien:cliente):Observable<any>{
        return this.httpClient.post<any>(this.APY_URL+"registrarCliente",clien);
    }

    public listadoclientes():Observable<cliente[]>{
        return this.httpClient.get<cliente[]>(this.APY_URL+"listaClientes");
    }


}