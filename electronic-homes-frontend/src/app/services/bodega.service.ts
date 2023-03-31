import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { Observable } from "rxjs";
import { productoBodega } from "../model/productoBodega";


@Injectable({
    providedIn:'root'
})

export class bodegaService{

    @Output() seleccionProducto:EventEmitter<productoBodega> = new EventEmitter();

    seleccion:EventEmitter<productoBodega> = new EventEmitter<productoBodega>();

    idSelecciona:EventEmitter<string> = new EventEmitter<string>();

    productoSeleccionado!:productoBodega;


    readonly APY_URL = "http://localhost:8080/Bodega/";

    constructor(private httpClient: HttpClient) {  }

    public listarProducto():Observable<productoBodega[]>{
        return this.httpClient.get<productoBodega[]>(this.APY_URL+"lista");
    }

    public insertarProducto(id:number,cantidad:number):Observable<HttpStatusCode>{
        return this.httpClient.get<HttpStatusCode>(this.APY_URL+"insertar?id="+id+"&cantidad="+cantidad);
    }

}