package com.electronichomes.controller;

import com.electronichomes.enty.ProductoBodega;

import com.electronichomes.enty.RegistroBodega;
import com.electronichomes.repo.BodegaRepo;
import com.electronichomes.repo.ProductoBodegaRepo;
import com.electronichomes.service.BodegaService;
import com.electronichomes.service.ProductoBodegaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("Bodega")
public class BodegaController {
    @Autowired
    private ProductoBodegaService productoBodega;
    @Autowired
    private ProductoBodegaRepo ProdBodegaRepo;

    @Autowired
    private BodegaRepo bodegaRepo;

    @Autowired
    private BodegaService bodegaService;


    @GetMapping(path ="/lista")
    public List<ProductoBodega> listar(){
        System.out.println("xddx");
       //return productoBodega.listar();
        List<ProductoBodega> producto = new ArrayList<>();
        List<Object[]> prod = ProdBodegaRepo.listar();
        for(Object[] obj:prod){
            ProductoBodega productoTemp = new ProductoBodega((Integer) obj[0],(String) obj[1],(String) obj[2],(Integer) obj[3],(String) obj[4],(String) obj[5],(String) obj[6],(BigDecimal) obj[7]);
            producto.add(productoTemp);
        }


        return producto;
    }


    @GetMapping(path = "/insertar")
    public void insertarProducto(@RequestParam int id,@RequestParam int cantidad){
        Optional<RegistroBodega> registro = bodegaService.buscar(id);
        if (registro.isPresent()){
            System.out.println(registro.get().getCodigo_producto());
            int cantidadProd = registro.get().getCantidad_producto();
            int cantidadTotal = cantidadProd+cantidad;

            System.out.println(cantidadTotal);

            try{
                bodegaRepo.insetarProducto(cantidadTotal,id);
            }catch (Exception e){

            }

        }





    }










}
