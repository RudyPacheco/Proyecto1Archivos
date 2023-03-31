package com.electronichomes.repo;

import com.electronichomes.enty.Empleado;
import com.electronichomes.enty.RegistroBodega;
import com.electronichomes.enty.SolicitudProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InventarioRepo extends JpaRepository<SolicitudProducto,Integer> {



    @Override
    SolicitudProducto save(SolicitudProducto solicitud);

    @Query(
            value = "INSERT INTO ControlSolicitud.Solicitud(codigo_producto,cantidad_producto,codigo_sucursal_origen,codigo_sucursal_destino,estado) VALUES(?,?,?,?,?);",nativeQuery = true
    )
    Void insertarSolicitud(@Param("codigo_producto")String codigo_producto,@Param("cantidad_producto")Integer cantidad_producto,@Param("codigo_sucursal_origen")String codigo_sucursal,@Param("codigo_sucursal_destino")String codigo_sucursal_destino,@Param("estado")String estado);


    @Query(
            value = "SELECT * FROM ControlSolicitud.Solicitud WHERE codigo_sucursal_destino=?;",nativeQuery = true
    )
    List<Object[]> solicitudes(@Param("codigo_sucursal_destino")String codigo_sucursal_destino);

    @Query(
            value = "SELECT * FROM ControlSolicitud.Solicitud WHERE codigo_sucursal_origen=? AND estado='Pendiente';",nativeQuery = true
    )
    List<Object[]> solicitudesR(@Param("codigo_sucursal_origen")String codigo_sucursal_origen);


    @Query(
            value = "UPDATE ControlSolicitud.Solicitud SET estado=? WHERE id_solicitud=?;", nativeQuery = true


    )
    void actualizarEstado(@Param("estado") String estado,@Param("id_solicitud")Integer id_solicitudd);



}



