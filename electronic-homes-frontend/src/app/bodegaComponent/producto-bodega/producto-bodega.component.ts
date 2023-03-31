import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productoBodega } from 'src/app/model/productoBodega';
import { bodegaService } from 'src/app/services/bodega.service';

@Component({
  selector: 'app-producto-bodega',
  templateUrl: './producto-bodega.component.html',
  styleUrls: ['./producto-bodega.component.css']
})
export class ProductoBodegaComponent {

  productoLista:productoBodega[]=[];
  id_producto:string="";

  constructor(private bodegaService:bodegaService,private router:Router){
    this.bodegaService.listarProducto().subscribe((lista:productoBodega[])=>{
      this.productoLista=lista;
      console.log("ejecutado");
      console.log(this.productoLista);
    });

  }



  editarProducto(producto:productoBodega){
    console.log(producto.codigo_producto);
    console.log(producto.id);
    this.bodegaService.productoSeleccionado=producto;

    this.bodegaService.productoSeleccionado.descripcion;
    this.bodegaService.seleccionProducto.emit(producto);

    console.log("editando");
    this.bodegaService.seleccion.emit(producto);
    this.id_producto=producto.codigo_producto;

    this.bodegaService.idSelecciona.emit(this.id_producto);

    this.router.navigate(['EdicionProducto']);
  }

  redirIngresar(){
    this.router.navigate(['IngresarProducto']);
  }

  redirRegistrar(){
    this.router.navigate(['registrarProducto']);
  }







}
