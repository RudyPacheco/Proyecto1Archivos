package com.electronichomes.repo;

import com.electronichomes.enty.ReporteMasvendidos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReportesRepo extends JpaRepository<ReporteMasvendidos,String> {

    @Query(
            value = "SELECT produgob.codigo_producto,nombre_producto,descripcion,produgoB.precio,COUNT(1) AS total  FROM ControlVenta.Produtos_venta AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto GROUP BY produgob.codigo_producto ,productog.nombre_producto,produgoB.precio,productog.descripcion HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 10;", nativeQuery = true
    )
    List<Object[]> reporteTopMasVendido();

    @Query(
            value = "SELECT venta.nit,cliente.nombre,cliente.apellido,SUM(total_gastado),COUNT(venta.nit) FROM ControlVenta.Venta AS venta INNER JOIN ControlCliente.Cliente AS cliente ON venta.nit=cliente.nit WHERE venta.nit NOT IN ('00000') GROUP BY venta.nit,cliente.nombre,cliente.apellido ORDER BY sum DESC LIMIT 10;", nativeQuery = true
    )
    List<Object[]> ReporteclientesMasGanancias();


    @Query(
            value = "SELECT codigo_sucursal ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta GROUP BY codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;", nativeQuery = true
    )
    List<Object[]> ReporteSucursalMasVentas();

    @Query(
            value = "SELECT codigo_sucursal,SUM(total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta GROUP BY codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;", nativeQuery = true
    )
    List<Object[]> ReporteSucursalMasIngresos();


    @Query(
            value = "SELECT venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal,SUM(venta.total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta INNER JOIN ControlEmpleado.Empleado AS empleado ON venta.id_empleado=empleado.id_empleado GROUP BY venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;", nativeQuery = true
    )
    List<Object[]> ReporteEmpleadoMasVentas();


    @Query(
            value = "SELECT venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal,SUM(venta.total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta INNER JOIN ControlEmpleado.Empleado AS empleado ON venta.id_empleado=empleado.id_empleado GROUP BY venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;", nativeQuery = true
    )
    List<Object[]> ReporteEmpleadoMasIngresos();

    @Query(
            value = "SELECT producto.codigo_producto,producto.nombre_producto,producto.descripcion,SUM(itemV.precio) ,COUNT(1) AS total  FROM ControlProducto.Producto AS producto INNER JOIN ControlVenta.Produtos_venta AS itemV ON producto.codigo_producto=itemV.codigo_producto GROUP BY producto.codigo_producto,producto.nombre_producto,producto.descripcion HAVING COUNT(1)>=1 ORDER BY sum DESC LIMIT 10;", nativeQuery = true
    )
    List<Object[]> ReporteProductosMasIngresos();


    @Query(
            value = "SELECT produgob.codigo_producto,nombre_producto,descripcion,produgoB.precio,COUNT(1) AS total  FROM ControlVenta.Produtos_venta AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto INNER JOIN ControlVenta.Venta AS venta ON produgoB.codigo_venta=venta.codigo_venta WHERE venta.codigo_sucursal=? GROUP BY produgob.codigo_producto ,productog.nombre_producto,produgoB.precio,productog.descripcion HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 5;", nativeQuery = true
    )
    List<Object[]> ReporteProductosMasVendidosS(@Param("venta.codigo_sucursal")String codigo_sucursal);


    @Query(
            value = "SELECT producto.codigo_producto,producto.nombre_producto,producto.descripcion,SUM(itemV.precio) ,COUNT(1) AS total  FROM ControlProducto.Producto AS producto INNER JOIN ControlVenta.Produtos_venta AS itemV ON producto.codigo_producto=itemV.codigo_producto INNER JOIN ControlVenta.Venta AS venta ON itemV.codigo_venta=venta.codigo_venta WHERE venta.codigo_sucursal=? GROUP BY producto.codigo_producto,producto.nombre_producto,producto.descripcion HAVING COUNT(1)>=1 ORDER BY sum DESC LIMIT 5;", nativeQuery = true
    )
    List<Object[]> ReporteProductosMasIngresosS(@Param("venta.codigo_sucursal")String codigo_sucursal);




}
