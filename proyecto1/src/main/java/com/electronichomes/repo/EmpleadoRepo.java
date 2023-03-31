package com.electronichomes.repo;

import com.electronichomes.enty.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface EmpleadoRepo extends JpaRepository<Empleado,String> {



    }
