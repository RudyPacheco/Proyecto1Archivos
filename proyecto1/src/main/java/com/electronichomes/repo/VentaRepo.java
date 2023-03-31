package com.electronichomes.repo;

import com.electronichomes.enty.RegistroVenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface VentaRepo extends JpaRepository<RegistroVenta,String> {


    @Query(
            value = "SELECT * FROM ControlVenta.Venta WHERE nit=? ORDER BY codigo_venta;",nativeQuery = true
    )
    List<Object[]> ultimaCompra(@Param("nit")String nit);

    @Query(

         value = "INSERT INTO ControlVenta.Venta(codigo_venta,nit,codigo_sucursal,id_empleado,total_gastado,descuento,total_final) VALUES (?,?,?,?,?,?,?)",nativeQuery = true
    )
    void guardarFactura(@Param("codigo_venta")String codigo_venta, @Param("nit")String nit, @Param("codigo_sucursal")String codigo_sucursal, @Param("id_empleado")String id_empleado, @Param("total_gastado")BigDecimal total_gastado,@Param("descuento")BigDecimal descuento,@Param("total_final")BigDecimal total_final);


    @Query(
            value = "INSERT INTO ControlVenta.Produtos_venta(codigo_venta,codigo_producto,precio) VALUES (?,?,?)",nativeQuery = true
    )
    void guardarProductos(@Param("codigo_venta")String codigo_venta,@Param("codigo_producto")String codigo_producto,@Param("precio")BigDecimal precio);
}
