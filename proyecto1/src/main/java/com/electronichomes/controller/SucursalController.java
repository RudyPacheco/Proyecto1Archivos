package com.electronichomes.controller;


import com.electronichomes.enty.*;
import com.electronichomes.repo.*;
import com.electronichomes.service.InventarioService;
import com.electronichomes.service.ProductoBodegaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("Sucursal")
public class SucursalController {

    @Autowired
    private SucursalRepo sucursalRepo;
    @Autowired
    private BodegaRepo bodegaRepo;
    @Autowired
    private InventarioRepo invetarioRepo;
    @Autowired
    private InventarioService inventarioService;

    @Autowired
    private RegistroProductoRepo registroProductoRepo;
    @Autowired
    private ProductoBodegaService productoBodegaService;

    @Autowired
    private ProductoBodegaRepo productoBodegaRepo;

    @GetMapping("/listaProd")
    public List<ProductoSucursal> listarProducto(@RequestParam String codigo_sucursarl){
        String codigoF="'"+codigo_sucursarl+"'";
        System.out.println("listando prod");
        List<ProductoSucursal> producto = new ArrayList<>();
        List<Object[]> prod = sucursalRepo.listar(codigo_sucursarl);
        for (Object[] obj:prod){
            ProductoSucursal productoTmp = new ProductoSucursal((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3],(String) obj[4],(String) obj[5],(BigDecimal) obj[6]);
            producto.add(productoTmp);
        }

        return producto;
    }


    @PostMapping("/solicitud")
    public void registrarSolicitud(@RequestBody SolicitudProducto solicitud){
        System.out.println(solicitud.getCodigo_producto());
        System.out.println(solicitud.getCantidad_producto());
        System.out.println(solicitud.getId_solicitud());
        try {
            invetarioRepo.insertarSolicitud(solicitud.getCodigo_producto(),solicitud.getCantidad_producto(),solicitud.getCodigo_sucursal_origen(),solicitud.getCodigo_sucursal_destino(),solicitud.getEstado());
        }catch (Exception e){

        }
        //   invetarioRepo.save(solicitud);
    }
    @GetMapping("/solicitudesEchas")
    public List<SolicitudProducto> listarSolicitudesE(@RequestParam String codigo_sucursal){
        List<SolicitudProducto> solicitudes = new ArrayList<>();
        if (codigo_sucursal=="bodega"){
            solicitudes=inventarioService.listar();
        }else{
            List<Object[]> prod = invetarioRepo.solicitudes(codigo_sucursal);
            for (Object[] obj:prod){
                SolicitudProducto solicitudTmp = new SolicitudProducto((Integer) obj[0],(String) obj[1],(Integer) obj[2],(String) obj[3],(String) obj[4],(String) obj[5]);
                solicitudes.add(solicitudTmp);
            }

        }


        return solicitudes;

    }

    @GetMapping("/solicitudesRecibidas")
    public List<SolicitudProducto> listarSolicitudesR(@RequestParam String codigo_sucursal){
        if (codigo_sucursal=="bodega01"){
            System.out.println("llego peticion bodega");
        }

        List<SolicitudProducto> solicitudes = new ArrayList<>();

            List<Object[]> prod = invetarioRepo.solicitudesR(codigo_sucursal);
            for (Object[] obj:prod){
                SolicitudProducto solicitudTmp = new SolicitudProducto((Integer) obj[0],(String) obj[1],(Integer) obj[2],(String) obj[3],(String) obj[4],(String) obj[5]);
                solicitudes.add(solicitudTmp);


        }


        return solicitudes;

    }

    @GetMapping("aceptacion")
    public void aceptarSolicitud(@RequestParam Integer codigo_solicitud){
        System.out.println("acpetando la solicitud"+codigo_solicitud);

            Optional<SolicitudProducto> solicitudTMP = inventarioService.buscar(codigo_solicitud);
            System.out.println(solicitudTMP.get().getCodigo_sucursal_origen());
                    //quitar de bodega y agrgarlo a la sucursal
            List<RegistroBodega> registroBod = new ArrayList<>();
            List<RegistroProducto> registroProd = new ArrayList<>();
            List<Object[]> registro = bodegaRepo.buscarProd(solicitudTMP.get().getCodigo_producto());
            for (Object[] obj:registro){
                RegistroBodega productoOrigen = new RegistroBodega((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3]);
                registroBod.add(productoOrigen);
            }
            for (Object[] obj:registro){
                RegistroProducto productoOrigen = new RegistroProducto((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3]);
                registroProd.add(productoOrigen);
            }
               // Object[] producto = registroProductoRepo.buscarProd(solicitudTMP.get().getCodigo_producto(),solicitudTMP.get().getCodigo_sucursal_destino());
                  //  RegistroProducto productoTmp = new RegistroProducto((Integer) producto[0],(String) producto[1],(String) producto[2],(Integer) producto[3]);
                  //  RegistroBodega registroTemp = new RegistroBodega((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3]);
                    int cantidadNueva = registroBod.get(0).getCantidad_producto()-solicitudTMP.get().getCantidad_producto();
                    int sumaNueva = registroProd.get(0).getCantidad_producto()+solicitudTMP.get().getCantidad_producto();
                    try {
                        bodegaRepo.insetarProducto(cantidadNueva,registroBod.get(0).getId());
                    }catch (Exception e){

                    }
                    try {
                        registroProductoRepo.ActualizarProducto(sumaNueva,registroProd.get(0).getId());
                    }catch (Exception e ){

                    }




                    System.out.println("llego aqui");
                    //cambiarlo de sucursales
                    System.out.println("esta entrando aqui");



            invetarioRepo.actualizarEstado("Aceptado",codigo_solicitud);



    }






    @GetMapping("aceptacionSucursal")
    public void aceptarSolicitudSucursal(@RequestParam Integer codigo_solicitud){
        System.out.println("probando sucursal");
        //try {
            Optional<SolicitudProducto> solicitudTMP = inventarioService.buscar(codigo_solicitud);
            System.out.println(solicitudTMP.get().getId_solicitud());
            System.out.println(solicitudTMP.get().getCodigo_producto());
          // if (solicitudTMP.isPresent()){
        List<RegistroProducto> solicitudes = new ArrayList<>();
        List<RegistroProducto> solicitudes2 = new ArrayList<>();
        List<Object[]> producto = registroProductoRepo.buscarProd(solicitudTMP.get().getCodigo_producto(),solicitudTMP.get().getCodigo_sucursal_origen());
               List<Object[]> producto1 = registroProductoRepo.buscarProd(solicitudTMP.get().getCodigo_producto(),solicitudTMP.get().getCodigo_sucursal_destino());
        for (Object[] obj:producto){
            RegistroProducto productoOrigen = new RegistroProducto((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3]);
            solicitudes.add(productoOrigen);
        }
        for (Object[] obj:producto1){
            RegistroProducto productoOrigen = new RegistroProducto((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3]);
            solicitudes2.add(productoOrigen);
        }
        for(RegistroProducto xd:solicitudes){
            System.out.println(xd.getCodigo_producto());
            System.out.println(xd.getCodigo_bodega());
        }
        System.out.println("-------");
        System.out.println(solicitudes.get(0).getCodigo_producto());
        System.out.println(solicitudes.get(0).getCodigo_bodega());
               //  System.out.println(" tamanio  " +producto1.length);
        //System.out.println((String) producto1[0]);
             //  if (producto1.length>0){
                   System.out.println("entro aqui");

                  //  RegistroProducto productoOrigen = new RegistroProducto((Integer) producto[0],(String) producto[1],(String) producto[2],(Integer) producto[3]);
                 //  RegistroProducto productoDestino = new RegistroProducto((Integer) producto1[0],(String) producto1[1],(String) producto1[2],(Integer) producto1[3]);
                   int totalOrigen = solicitudes.get(0).getCantidad_producto()-solicitudTMP.get().getCantidad_producto();
                   int totalDestino = solicitudes2.get(0).getCantidad_producto()+solicitudTMP.get().getCantidad_producto();
                    try {
                        registroProductoRepo.ActualizarProducto(totalOrigen,solicitudes.get(0).getId());
                        System.out.println("llego aqui");
                    }catch (Exception e){

                    }

                    try {
                        registroProductoRepo.ActualizarProducto(totalDestino,solicitudes2.get(0).getId());
                        System.out.println("llego aqui x2");
                    }catch (Exception e){

                    }

                    invetarioRepo.actualizarEstado("Aceptado",codigo_solicitud);

           //    }else{
                   //crear el producto de 0


                   System.out.println("El producto no exise");
            //   }
          //
            // }



     //   }catch (Exception e){

       // }

    }



    @GetMapping("rechazo")
    public void rechazoSolicitud(@RequestParam Integer codigo_solicitud){
        System.out.println("acpetando la solicitud"+codigo_solicitud);
        try{
            invetarioRepo.actualizarEstado("Rechazado",codigo_solicitud);

        }catch (Exception e){

        }

    }



}
