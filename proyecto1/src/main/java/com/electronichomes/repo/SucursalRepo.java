package com.electronichomes.repo;

import com.electronichomes.enty.ProductoSucursal;
import com.electronichomes.enty.RegistroBodega;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface SucursalRepo extends JpaRepository<ProductoSucursal,Integer> {

    @Query(
            value = "SELECT codigo,produgoB.codigo_producto,codigo_sucursal,cantidad_producto,nombre_producto,descripcion,precio FROM ControlSucursal.Producto_sucursal AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto WHERE codigo_sucursal=?;",nativeQuery = true
    )
    List<Object[]>listar(@Param("codigo_producto") String codigo_producto);





}
