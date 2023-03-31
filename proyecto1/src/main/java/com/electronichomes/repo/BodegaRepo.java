package com.electronichomes.repo;

import com.electronichomes.enty.RegistroBodega;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BodegaRepo extends JpaRepository<RegistroBodega,Integer> {

    @Query(
            value = "UPDATE ControlBodega.Producto_bodega SET cantidad_producto=? WHERE id=?;", nativeQuery = true


    )
    void insetarProducto(@Param("cantidad_producto") Integer cantidad_producto,@Param("id")Integer id);

    @Override
    RegistroBodega save(RegistroBodega registro);

    @Query(
            value = "SELECT * FROM ControlBodega.Producto_bodega WHERE codigo_producto=?;",nativeQuery = true
    )
    List<Object[]> buscarProd(@Param("codigo_producto")String codigo_producto);





}
