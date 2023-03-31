package com.electronichomes.controller;

import com.electronichomes.enty.Empleado;
import com.electronichomes.enty.IdGenerado;
import com.electronichomes.repo.AdminRepo;
import com.electronichomes.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("Admin")
public class AdminController {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private EmpleadoService empleadoService;

    @GetMapping(path = "/generarID")
    public IdGenerado generarId(@RequestParam String area){
        String result="";
        int total;
        switch (area){
            case "1":
                List<Object[]> prod = adminRepo.listarIdVentas();
                total = prod.size();
                System.out.println(total);
                if (total==9){
                    result="v0"+(total+1);
                }else if (total<9){
                    result="v00"+(total+1);
                } else if (total>9) {
                    result="v0"+(total+1);
                } else{
                    result="v"+(total+1);
                }

                break;
            case "2":
                List<Object[]> prod1 = adminRepo.listarIdInvnetario();
                 total = prod1.size();
                System.out.println(total);
                if (total==9){
                    result="i0"+(total+1);
                }else if (total<9){
                    result="i00"+(total+1);
                } else if (total>9) {
                    result="i0"+(total+1);
                } else{
                    result="i"+(total+1);
                }
                break;
            case "3":
                List<Object[]> prod2 = adminRepo.listarIdBodega();
                total = prod2.size();
                System.out.println(total);
                if (total==9){
                    result="b0"+(total+1);
                }else if (total<9){
                    result="b00"+(total+1);
                } else if (total>9) {
                    result="b0"+(total+1);
                } else{
                    result="b"+(total+1);
                }
                break;
            case "4":
                List<Object[]> prod3 = adminRepo.listarIdAdmin();
                 total = prod3.size();
                System.out.println(total);
                if (total==9){
                    result="a0"+(total+1);
                }else if (total<9){
                    result="a00"+(total+1);
                } else if (total>9) {
                    result="a0"+(total+1);
                } else{
                    result="a"+(total+1);
                }
                break;
            default:
                break;

        }


        IdGenerado idGen = new IdGenerado(result);
        return idGen;
    }


    @PostMapping("/empleadoNuevo")
    public HttpStatus nuevoEmpleado(@RequestParam String id, @RequestBody Empleado emp){
        Empleado empTmp = new Empleado(id,emp.getNombre(),emp.getApellido(),emp.getSalario(),emp.getCodigo_area(),emp.getCodigo_sucursal(),emp.getPasword());
        System.out.println("---------");
        System.out.println(id);
        emp.setId_empleado(id);
        System.out.println(emp.getId_empleado());
        System.out.println(emp.getCodigo_area());
        System.out.println(emp.getNombre());

       try{
           adminRepo.insertarEmpleaado(id,emp.getNombre(),emp.getApellido(),emp.getSalario(),emp.getCodigo_area(),emp.getCodigo_sucursal(),emp.getPasword());
       }catch (Exception e){

       }

         return HttpStatus.OK;
        //return empleadoService.insertar(empTmp);

    }




}
