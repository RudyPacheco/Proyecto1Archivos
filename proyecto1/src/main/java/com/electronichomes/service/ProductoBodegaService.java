package com.electronichomes.service;

import com.electronichomes.enty.ProductoBodega;
import com.electronichomes.repo.ProductoBodegaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoBodegaService {

    @Autowired
    private ProductoBodegaRepo BodegaRepo;
    @Query(
            value="SELECT id,codigo_bodega,produgob.codigo_producto,cantidad_producto,nombre_producto,descripcion,imagen,precio FROM ControlBodega.Producto_bodega AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto;",nativeQuery = true
    )
    public List<ProductoBodega> listar(){

        return BodegaRepo.findAll();
    }


    public Optional<ProductoBodega> buscar(int id){
        return BodegaRepo.findById(id);
    }



}
