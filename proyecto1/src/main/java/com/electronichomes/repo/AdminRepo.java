package com.electronichomes.repo;

import com.electronichomes.enty.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface AdminRepo extends JpaRepository<Empleado,String> {
    @Query(

        value = "SELECT * FROM ControlEmpleado.Empleado WHERE id_empleado LIKE 'a%';",nativeQuery = true
    )
    List<Object[]> listarIdAdmin();

    @Query(

            value = "SELECT * FROM ControlEmpleado.Empleado WHERE id_empleado LIKE 'v%';",nativeQuery = true
    )
    List<Object[]> listarIdVentas();


    @Query(

            value = "SELECT * FROM ControlEmpleado.Empleado WHERE id_empleado LIKE 'i%';",nativeQuery = true
    )
    List<Object[]> listarIdInvnetario();


    @Query(

            value = "SELECT * FROM ControlEmpleado.Empleado WHERE id_empleado LIKE 'b%';",nativeQuery = true
    )
    List<Object[]> listarIdBodega();

    @Query(
        value = "INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES(?,?,?,?,?,?,?);",nativeQuery = true
    )
    void insertarEmpleaado(@Param("id_empleado") String id_empleado, @Param("nombre") String nombre, @Param("apellido") String apellido, @Param("salario") Integer salario,@Param("codigo_area") Integer codigo_area,@Param("codigo_sucursal") String codigo_sucursal,@Param("pasword") String paswrod);

}
