package com.electronichomes.service;

import com.electronichomes.enty.SolicitudProducto;
import com.electronichomes.repo.InventarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventarioService {
    @Autowired
    private InventarioRepo inventarioRepo;


    public List<SolicitudProducto> listar(){
        return inventarioRepo.findAll();
    }

    public Optional<SolicitudProducto> buscar(Integer id){
        return inventarioRepo.findById(id);
    }


}
