package com.electronichomes.controller;


import com.electronichomes.enty.*;
import com.electronichomes.repo.RegistroProductoRepo;
import com.electronichomes.repo.VentaRepo;
import com.electronichomes.service.ClienteService;
import com.electronichomes.service.ProductoFacturaService;
import com.electronichomes.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("Ventas")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private VentaRepo ventaRepo;
    @Autowired
    private ProductoFacturaService productoFacturaService;
    @Autowired
    private RegistroProductoRepo registroProductoRepo;
    @GetMapping("/generarId")
    public IdGenerado generarId(){
        String idGen;
        List<RegistroVenta> ventas = ventaService.listar();
        int total = ventas.size();

        if (total==0){
            idGen="000001";
        }else if (total<9){
            idGen="00000"+(total+1);
        }else{
            idGen="0000"+(total+1);
        }

        IdGenerado idNuevo = new IdGenerado(idGen);

        return idNuevo;
    }

    @GetMapping("/buscarCliente")
    public Optional<Cliente> buscarCliente(@RequestParam String nit){
        Optional<Cliente> tmp = clienteService.buscar(nit);
        return tmp;
    }

    @GetMapping("/validarDescuento")
    public Integer descuento(@RequestParam String nit){
        int descuento = 0;
        List<Object[]> ultimaC =ventaRepo.ultimaCompra(nit);
        List<RegistroVenta> ventasR = new ArrayList<>();
        int registros = ultimaC.size();
         if (registros==0){
             descuento=0;
         }else{
             for (Object[] obj:ultimaC){
                 RegistroVenta registroTmp = new RegistroVenta((String) obj[0],(String) obj[1],(String) obj[2],(String) obj[3],(BigDecimal) obj[4],(BigDecimal) obj[5],(BigDecimal) obj[6]);
                 ventasR.add(registroTmp);
             }
         RegistroVenta ultimaV = ventasR.get(ventasR.size()-1);
         BigDecimal gastado = ultimaV.getTotal_gastado();
        BigDecimal descuento1 = new BigDecimal(1000);
             BigDecimal descuento2 = new BigDecimal(5000);
             BigDecimal descuento3 = new BigDecimal(000);
             if (ultimaV.getTotal_gastado().compareTo(descuento1)<0){
              descuento=0;
             } else if (ultimaV.getTotal_gastado().compareTo(descuento1)==0) {
                 descuento=2;
             }else if (ultimaV.getTotal_gastado().compareTo(descuento1)>0){
                 descuento=2;
             }
             if (ultimaV.getTotal_gastado().compareTo(descuento2)<0){
                 descuento=0;
             } else if (ultimaV.getTotal_gastado().compareTo(descuento2)==0) {
                 descuento=5;
             }else if (ultimaV.getTotal_gastado().compareTo(descuento2)>0){
                 descuento=5;
             }

             if (ultimaV.getTotal_gastado().compareTo(descuento3)<0){
                 descuento=0;
             } else if (ultimaV.getTotal_gastado().compareTo(descuento3)==0) {
                 descuento=10;
             }else if (ultimaV.getTotal_gastado().compareTo(descuento3)>0){
                 descuento=10;
             }


         }

         return descuento;
    }


    @PostMapping("/recibirFactura")
    public void recibirFactura(@RequestBody RegistroVenta factura){
        System.out.println(factura.getCodigo_venta());
        System.out.println(factura.getId_empleado());

        //try {
         //   ventaRepo.guardarFactura(factura.getCodigo_venta(), factura.getNit(), factura.getCodigo_sucursal(), factura.getId_empleado(), factura.getTotal_gastado(),factura.getDescuento(),factura.getTotal_final());
        //}catch (Exception e){

       // }
        ventaService.guardar(factura);


    }
    @PostMapping("/listaProductos")
    public void recibirProdcutos(@RequestParam String codigo_sucursal,@RequestBody List<ProductoFactura> productos){
        try {
            for (ProductoFactura xd : productos) {
                System.out.println(xd.getCodigo_venta());
                System.out.println(xd.getCodigo_producto());
                xd.setCodigo(null);
                try {
                    this.ventaRepo.guardarProductos(xd.getCodigo_venta(), xd.getCodigo_producto(), xd.getPrecio());
                } catch (Exception e) {

                }
                List<RegistroProducto> solicitudes = new ArrayList<>();
                List<Object[]> producto = registroProductoRepo.buscarProd(xd.getCodigo_producto(),codigo_sucursal);
                for (Object[] obj:producto){
                    RegistroProducto productoOrigen = new RegistroProducto((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3]);
                    solicitudes.add(productoOrigen);
                }

                int totalOrigen = solicitudes.get(0).getCantidad_producto()-1;
                try {
                    registroProductoRepo.ActualizarProducto(totalOrigen,solicitudes.get(0).getId());
                    System.out.println("restando producto");
                }catch (Exception e){

                }

                //this.productoFacturaService.guardarProdcuto(xd);
            }
        }catch (Exception E){

        }

    }





    @PostMapping("/registrarCliente")
    public void registrarCliente(@RequestBody Cliente cliente){
        System.out.println(cliente.getNit());
       Cliente gen = this.clienteService.guardarCliente(cliente);
        System.out.println(gen.getNit());

    }


    @GetMapping("/listaClientes")
    public List<Cliente> listado(){
        return clienteService.listar();
    }












}
