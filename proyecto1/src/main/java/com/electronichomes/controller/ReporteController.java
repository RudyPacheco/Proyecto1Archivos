package com.electronichomes.controller;


import com.electronichomes.enty.*;
import com.electronichomes.repo.ReportesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("Reporte")
public class ReporteController {

    @Autowired
    private ReportesRepo reportesRepo;


    @GetMapping("/ProductosMasVendidos")
    public List<ReporteMasvendidos> masVendidos(){
        List<ReporteMasvendidos> reporte = new ArrayList<>();


            List<Object[]> prod = reportesRepo.reporteTopMasVendido();
            for (Object[] obj:prod){
                // ReporteMasvendidos productoTmp = new ReporteMasvendidos((String) obj[0],(String) obj[1],(String) obj[2],(BigDecimal) obj[3],(BigInteger) obj[4]);
                ReporteMasvendidos productoTmp = new ReporteMasvendidos();
                productoTmp.setCodigo_producto((String) obj[0]);
                productoTmp.setNombre_producto((String) obj[1]);
                productoTmp.setDescripcion((String) obj[2]);
                productoTmp.setPrecio((BigDecimal) obj[3]);
                productoTmp.setTotal((Long) obj[4]);

                reporte.add(productoTmp);
            }

            return reporte;


    }

    @GetMapping("/ClienteMasGanancia")
    public List<ReporteClientesGanancias> clienteMasGanancia(){
        List<ReporteClientesGanancias> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteclientesMasGanancias();
        for (Object[] obj:prod){
            ReporteClientesGanancias productoTmp = new ReporteClientesGanancias((String) obj[0],(String) obj[1],(String) obj[2],(BigDecimal) obj[3],(Long) obj[4]);


            reporte.add(productoTmp);
        }

        return reporte;
    }


    @GetMapping("/SucursalMasVentas")
    public List<ReporteSucursalVentas> sucursalMasVentas(){
        List<ReporteSucursalVentas> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteSucursalMasVentas();
        for (Object[] obj:prod){
            ReporteSucursalVentas productoTmp = new ReporteSucursalVentas((String) obj[0],(Long) obj[1]);
            reporte.add(productoTmp);
        }

        return reporte;
    }


    @GetMapping("/SucursalMasIngresos")
    public List<ReporteSucursalIngreso> sucursalMasIngresos(){
        List<ReporteSucursalIngreso> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteSucursalMasIngresos();
        for (Object[] obj:prod){
            ReporteSucursalIngreso productoTmp = new ReporteSucursalIngreso((String) obj[0],(BigDecimal) obj[1],(Long) obj[2]);
            reporte.add(productoTmp);
        }

        return reporte;
    }

    @GetMapping("/EmpleadoMasVentas")
    public List<ReporteEmpleadoIngreso> empleadoMasVentas(){
        List<ReporteEmpleadoIngreso> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteEmpleadoMasVentas();
        for (Object[] obj:prod){
            ReporteEmpleadoIngreso productoTmp = new ReporteEmpleadoIngreso((String) obj[0],(String) obj[1],(String) obj[2],(String) obj[3],(BigDecimal) obj[4],(Long) obj[5]);
            reporte.add(productoTmp);
        }
        return reporte;
    }

    @GetMapping("/EmpleadoMasIngresos")
    public List<ReporteEmpleadoIngreso> empleadoMasIngresos(){
        List<ReporteEmpleadoIngreso> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteEmpleadoMasIngresos();
        for (Object[] obj:prod){
            ReporteEmpleadoIngreso productoTmp = new ReporteEmpleadoIngreso((String) obj[0],(String) obj[1],(String) obj[2],(String) obj[3],(BigDecimal) obj[4],(Long) obj[5]);
            reporte.add(productoTmp);
        }
        return reporte;
    }

    @GetMapping("/ProductoMasIngresos")
    public List<ReporteMasIngreso> productoMasIngresos(){
        List<ReporteMasIngreso> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteProductosMasIngresos();
        for (Object[] obj:prod){
            ReporteMasIngreso productoTmp = new ReporteMasIngreso((String) obj[0],(String) obj[1],(String) obj[2],(BigDecimal) obj[3],(Long) obj[4]);
            reporte.add(productoTmp);
        }
        return reporte;
    }

    @GetMapping("/ProductoMasVendidosS")
    public List<ReporteMasVendidoSucursal> productoMasVendidosS(@RequestParam String codigo_sucursal){
        List<ReporteMasVendidoSucursal> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteProductosMasVendidosS(codigo_sucursal);
        for (Object[] obj:prod){
            ReporteMasVendidoSucursal productoTmp = new ReporteMasVendidoSucursal((String) obj[0],(String) obj[1],(String) obj[2],(BigDecimal) obj[3],(Long) obj[4]);
            reporte.add(productoTmp);
        }
        return reporte;
    }

    @GetMapping("/ProductoMasIngresosS")
    public List<ReporteMasIngresoSucursal> productoMasIngresosS(@RequestParam String codigo_sucursal){
        List<ReporteMasIngresoSucursal> reporte = new ArrayList<>();
        List<Object[]> prod = reportesRepo.ReporteProductosMasIngresosS(codigo_sucursal);
        for (Object[] obj:prod){
            ReporteMasIngresoSucursal productoTmp = new ReporteMasIngresoSucursal((String) obj[0],(String) obj[1],(String) obj[2],(BigDecimal) obj[3],(Long) obj[4]);
            reporte.add(productoTmp);
        }
        return reporte;
    }











}
