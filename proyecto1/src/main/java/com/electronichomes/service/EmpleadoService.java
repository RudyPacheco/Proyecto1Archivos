package com.electronichomes.service;

import com.electronichomes.enty.Empleado;
import com.electronichomes.repo.EmpleadoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {
    @Autowired
    private EmpleadoRepo empeladorepo;

    public Empleado insertar(Empleado emp){
        return empeladorepo.save(emp);
    }

    public Empleado actualizar(Empleado emp){

        return empeladorepo.save(emp);
    }

    public List<Empleado> listar(){
        return empeladorepo.findAll();
    }

    public Optional<Empleado> buscar(String id){

        return empeladorepo.findById(id);
    }




}
