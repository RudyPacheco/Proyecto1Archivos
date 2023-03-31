import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cliente } from 'src/app/model/cliente';
import { factura } from 'src/app/model/factura';
import { idGenerado } from 'src/app/model/idGenerado';
import { productoFactura } from 'src/app/model/productoFactura';
import { productoSucursal } from 'src/app/model/productoSucursal';
import { adminServices } from 'src/app/services/admin.service';
import { loginServices } from 'src/app/services/login.services';
import { sucursalService } from 'src/app/services/sucursal.service';
import { vendedorService } from 'src/app/services/vendedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrls: ['./generar-venta.component.css']
})
export class GenerarVentaComponent {
  nuevoEmpForm!:FormGroup;  
  tipoCliente:string="";

  NIT:string="";
  nombre:string="";
  apellido:string="";
  direccion:string="";
  existe=true;
  clienteValido=false;
  productoLista:productoSucursal[]=[];
  productoAgregado:productoFactura[]=[];
  productoTabla:productoSucursal[]=[];

  codigo_producto:number=0;
  cantidadVenta:number=0;
  id_generado:string="";
  total_gastado:number=0;
  descuento:number=0;
  total_final:number=0;

  constructor(private builder:FormBuilder,private router:Router,private adminService:adminServices,private sucursalService:sucursalService,private loginService:loginServices,private ventaService:vendedorService) {
    this.nuevoEmpForm=this.builder.group({
      idEmpleado:['',Validators.required],
      nombreEmpleado:['',Validators.required],
      apellidoEmpleado:['',Validators.required],
      passwordEmpleado:['',Validators.required],
      salarioEmpleado:['',Validators.required],
      areaEmpleado:['',Validators.required],
      sucursalEmpleado:['',Validators.required]

    })    


    this.sucursalService.listarProducto(this.loginService.empleadoAc.codigo_sucursal).subscribe((lista:productoSucursal[])=>{
      this.productoLista=lista;
      console.log("ejecutado");
      console.log(this.productoLista);
     


    });
    
    this.ventaService.generarID().subscribe((id:idGenerado)=>{
      this.id_generado=id.id;
    })



   }


   agregar(){
    console.log("agregando----")
      console.log(this.codigo_producto);
      console.log(this.productoLista[this.codigo_producto]);
      const prod = this.productoLista[this.codigo_producto];
      prod.cantidad_producto=this.cantidadVenta;
      this.productoTabla.push(prod);
      for (let index = 0; index < this.cantidadVenta; index++) {
      //  new productoFactura(0, this.id_generado, prod.codigo_producto, prod.precio);
        this.total_gastado=this.total_gastado+prod.precio;
        this.productoAgregado.push(new productoFactura(prod.codigo, this.id_generado, prod.codigo_producto, prod.precio));  
        
      }
      this.cantidadVenta=0;
      


     


   }


   quitar(index:number){
    this.productoAgregado.splice(index,1);
    this.productoTabla.splice(index,1);
    const prod = this.productoAgregado[index];
    this.total_gastado=this.total_gastado-prod.precio;

   }


   generarVenta(){
    console.log(this.productoAgregado);
    console.log(this.tipoCliente)
    if (this.tipoCliente=="CF") {
      console.log("venta de cf");
     // new factura(this.id_generado, this.NIT, this.loginService.empleadoAc.codigo_sucursal, this.loginService.empleadoAc.id_empleado, this.cantidadVenta, this.descuento, this.total_final);
      if (this.descuento!=0) {
       let netoDescuento = this.total_gastado*this.descuento;
       this.descuento=netoDescuento;
       this.total_final=this.total_gastado-netoDescuento;
      }else{
        this.total_final=this.total_gastado;
      }
      
      this.ventaService.enviarFactura(new factura(this.id_generado,"00000", this.loginService.empleadoAc.codigo_sucursal, this.loginService.empleadoAc.id_empleado, this.total_gastado, this.descuento, this.total_final)).subscribe((xd:any)=>{
        this.ventaService.enviarProductos(this.loginService.empleadoAc.codigo_sucursal,this.productoAgregado).subscribe();
          this.popAfirmation();
          this.router.navigate(['vendedor']);
      });
   


    }else  {
      if (this.clienteValido) {
        //cliente encontrado
        console.log("cliente encontrado");
        if (this.descuento!=0) {
          let netoDescuento = this.total_gastado*this.descuento;
          this.descuento=netoDescuento;
          this.total_final=this.total_gastado-netoDescuento;
         }else{
          this.total_final=this.total_gastado;
         }
        
         this.ventaService.enviarFactura(new factura(this.id_generado,this.NIT, this.loginService.empleadoAc.codigo_sucursal, this.loginService.empleadoAc.id_empleado, this.total_gastado, this.descuento, this.total_final)).subscribe((xd:any)=>{
          this.enviarProductos();
          this.popAfirmation();
          this.router.navigate(['vendedor']);
         });
         
   



      }else{
        console.log("cliente invaldo");
        //primero registramos al cliente 
        this.ventaService.registrarCliente(new cliente(this.NIT,this.nombre,this.apellido,this.direccion)).subscribe((gen:any)=>{
          if (this.descuento!=0) {
            let netoDescuento = this.total_gastado*this.descuento;
            this.descuento=netoDescuento;
            this.total_final=this.total_gastado-netoDescuento;
           }
           this.total_final=this.total_gastado;
           
           this.ventaService.enviarFactura(new factura(this.id_generado,this.NIT, this.loginService.empleadoAc.codigo_sucursal, this.loginService.empleadoAc.id_empleado, this.total_gastado, this.descuento, this.total_final)).subscribe((gen:any)=>{
            this.ventaService.enviarProductos(this.loginService.empleadoAc.codigo_sucursal,this.productoAgregado).subscribe();
            this.popAfirmation();
            this.router.navigate(['vendedor']);
          });
           
           


        })

       
   
        
   


      }
    }


    
   }


   enviarProductos(){
    this.ventaService.enviarProductos(this.loginService.empleadoAc.codigo_sucursal,this.productoAgregado).subscribe();
   }




   validarDescuento(nit:string){
      // 1k 2% 5k 5% 10k 10%
      this.ventaService.generarDescuento(nit).subscribe((desc:number)=>{
        if (desc==2) {
          this.descuento=0.2
        }else if (desc==5) {
          this.descuento=0.5
        }else if (desc==10) {
          this.descuento=0.10
        }else{
          this.descuento= desc;
        }

       
      })


   }

   validarCliente(){
    this.ventaService.buscarCliente(this.NIT).subscribe((clienteT:cliente)=>{
      if(clienteT==null|| clienteT == undefined){
        this.popEmpleadoNoexiste();
        this.clienteValido=false;
      }else{
        this.NIT=clienteT.nit;
        this.nombre=clienteT.nombre;
        this.apellido=clienteT.apellido;
        this.direccion=clienteT.direccion;
        this.validarDescuento(this.NIT);
        this.clienteValido=true;
      }
    })
   }


   estadoCliente(){
    if (this.tipoCliente=="CF") {
      this.existe=true;
    }else{
      this.existe=false;
    }
   }




   public popAfirmation(){
    Swal.fire(
      'Venta Realizada',
      'success'
    )
  }


  public popEmpleadoNoexiste(){
    Swal.fire(
      'El cliente no existe',
      'error'
    )
  }

  






}
