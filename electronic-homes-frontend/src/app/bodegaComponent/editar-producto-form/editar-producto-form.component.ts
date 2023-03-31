import { Component, OnInit } from '@angular/core';
import { productoBodega } from 'src/app/model/productoBodega';
import { bodegaService } from 'src/app/services/bodega.service';

@Component({
  selector: 'app-editar-producto-form',
  templateUrl: './editar-producto-form.component.html',
  styleUrls: ['./editar-producto-form.component.css']
})
export class EditarProductoFormComponent implements OnInit{

  producto!:productoBodega;
  id_producto:string = "xd";

  constructor(private bodegaService:bodegaService){
   

    

  }
  ngOnInit(): void {
  
      this.bodegaService.idSelecciona.subscribe(
      id_producto =>{
        this.id_producto=id_producto;
      }
      )

  }

}
