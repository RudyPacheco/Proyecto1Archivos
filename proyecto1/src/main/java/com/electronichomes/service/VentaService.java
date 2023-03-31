package com.electronichomes.service;

import com.electronichomes.enty.RegistroVenta;
import com.electronichomes.repo.VentaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VentaService {

    @Autowired
    private VentaRepo ventaRepo;

    public List<RegistroVenta> listar(){
        return this.ventaRepo.findAll();
    }

    public RegistroVenta guardar(RegistroVenta factura){
        return this.ventaRepo.save(factura);
    }

}
