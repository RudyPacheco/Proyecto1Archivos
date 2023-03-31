package com.electronichomes.service;


import com.electronichomes.enty.ProductoFactura;
import com.electronichomes.repo.ProductoFacturaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoFacturaService {
    @Autowired
    private ProductoFacturaRepo productoFacturaRepo;

    public ProductoFactura guardarProdcuto(ProductoFactura prod){
        return this.productoFacturaRepo.save(prod);
    }




}
