package com.electronichomes.repo;

import com.electronichomes.enty.ProductoBodega;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoBodegaRepo extends JpaRepository<ProductoBodega,Integer> {

    @Query(
            value="SELECT id,codigo_bodega,produgob.codigo_producto,cantidad_producto,nombre_producto,descripcion,imagen,precio FROM ControlBodega.Producto_bodega AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto;",nativeQuery = true
    )
    List<Object[]>listar();


    @Query(
            value = "SELECT * FROM ControlBodega.Producto_bodega WHERE codigo_producto=?;",nativeQuery = true
    )
    public Object[] buscarProd(@Param("codigo_producto")String codigo_producto);


}
