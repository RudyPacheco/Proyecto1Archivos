package com.electronichomes.enty;

import java.math.BigDecimal;

public class ReporteEmpleadoIngreso {
    private String id_empleado;
    private String nombre;
    private String apellido;
    private String codigo_sucursal;
    private BigDecimal sum;
    private Long total;

    public ReporteEmpleadoIngreso() {
    }

    public ReporteEmpleadoIngreso(String id_empleado, String nombre, String apellido, String codigo_sucursal, BigDecimal sum, Long total) {
        this.id_empleado = id_empleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigo_sucursal = codigo_sucursal;
        this.sum = sum;
        this.total = total;
    }

    public String getId_empleado() {
        return id_empleado;
    }

    public void setId_empleado(String id_empleado) {
        this.id_empleado = id_empleado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCodigo_sucursal() {
        return codigo_sucursal;
    }

    public void setCodigo_sucursal(String codigo_sucursal) {
        this.codigo_sucursal = codigo_sucursal;
    }

    public BigDecimal getSum() {
        return sum;
    }

    public void setSum(BigDecimal sum) {
        this.sum = sum;
    }

    public int getTotal() {
        return Math.toIntExact(total);
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
