package com.electronichomes.repo;

import com.electronichomes.enty.RegistroProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RegistroProductoRepo extends JpaRepository<RegistroProducto,Integer> {

    @Query(
            value = "SELECT * FROM ControlSucursal.Producto_sucursal WHERE codigo_producto=? AND codigo_sucursal=?;",nativeQuery = true
    )
    List<Object[]> buscarProd(@Param("codigo_producto")String codigo_producto, @Param("codigo_sucursal") String codigo_sucursal);



    @Query(
            value = "UPDATE ControlSucursal.Producto_sucursal SET cantidad_producto=? WHERE codigo=?;", nativeQuery = true


    )
    void ActualizarProducto(@Param("cantidad_producto") Integer cantidad_producto,@Param("id")Integer id);


}
