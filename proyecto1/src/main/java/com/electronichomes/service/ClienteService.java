package com.electronichomes.service;

import com.electronichomes.enty.Cliente;
import com.electronichomes.repo.ClienteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepo clienteRepo;


    public Optional<Cliente> buscar(String nit){
        return clienteRepo.findById(nit);
    }


    public List<Cliente> listar(){
        return clienteRepo.findAll();
    }

    public Cliente guardarCliente(Cliente cliente){
        return clienteRepo.save(cliente);

    }






}
