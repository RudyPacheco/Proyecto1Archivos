package com.electronichomes.service;

import com.electronichomes.enty.ProductoBodega;
import com.electronichomes.enty.RegistroBodega;
import com.electronichomes.repo.BodegaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BodegaService {


    @Autowired
    private BodegaRepo BodegaRepo;


    public Optional<RegistroBodega> buscar(int id){
        return BodegaRepo.findById(id);
    }




}
