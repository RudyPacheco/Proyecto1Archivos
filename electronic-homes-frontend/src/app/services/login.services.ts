import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { usuarioLoged } from "../model/usuarioLoged";
import { usuarioLogin } from "../model/usuarioLogin";
import { empleadoLoged } from "../model/empleadoLoged";

@Injectable({
    providedIn:'root'
})

export class loginServices{
  
    

    TOKEN: string ="";
    usuario!: usuarioLoged;
    empleadoAc!:empleadoLoged;
    fechaActual!:string;
   readonly APY_URL = "http://localhost:8080/Empleados/";


   constructor(private httpClient: HttpClient) {  }

   /*  public createLogin(usuario: usuarioLogin): Observable<usuarioLogin>{
         return this.httpClient.post<usuarioLogin>(this.APY_URL+"LoginControler",usuario);
     }*/
 
     public createLogin(usuario: usuarioLogin): Observable<usuarioLoged>{
         return this.httpClient.post<usuarioLoged>(this.APY_URL+"LoginControler",usuario);      
     }

     public getUser(nombre:string,pasword:string): Observable<empleadoLoged>{
        return this.httpClient.get<empleadoLoged>(this.APY_URL+"login?id="+nombre+"&pass="+pasword);
     }
 
     public getUserLog(usuario:usuarioLogin): Observable<empleadoLoged>{
        return this.httpClient.post<empleadoLoged>(this.APY_URL+"usuario",usuario);
     }
 


     public agregarToken(token: string){
         this.TOKEN=token;
     }
 
     public getToken(){
         return this.TOKEN;
     }
 
     public eliminarToken(){
         this.TOKEN="";
     }
 
     public agregarUsuario(usuario: empleadoLoged){
         this.empleadoAc=usuario;
     }


 
     public getUsuario(){
         return this.usuario;
     }


}