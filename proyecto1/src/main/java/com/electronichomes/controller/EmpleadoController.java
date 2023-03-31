package com.electronichomes.controller;

import com.electronichomes.enty.Empleado;
import com.electronichomes.enty.UsuarioLogin;
import com.electronichomes.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("Empleados")
public class EmpleadoController {
    @Autowired
    private EmpleadoService empleadoservice;

    @GetMapping(path ="/lista")
    public List<Empleado> listar(){
        System.out.println("xddx");
        return empleadoservice.listar();
    }

    @GetMapping(path = "/login")
    public Optional<Empleado> buscar(@RequestParam String id,@RequestParam String pass){
        System.out.println("buscando");
        System.out.println(pass);
        return empleadoservice.buscar(id);
    }

    @PostMapping(path = "/usuario")
    public Optional<Empleado> buscar(@RequestParam UsuarioLogin user){
        System.out.println("buscando");
        if (user==null){
            System.out.println("usuario null");
        }else{
            System.out.println(user.getNombre());
            System.out.println(user.getContrsenia());
             return empleadoservice.buscar(user.getNombre());
        }

      return null;

    }

    @RequestMapping("/")
    public String home(){
        return "Hello xd";
    }

    //@RequestMapping("/nuevoEmpleado")



}
