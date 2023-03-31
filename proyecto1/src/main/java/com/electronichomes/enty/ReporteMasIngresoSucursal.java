package com.electronichomes.enty;

import java.math.BigDecimal;

public class ReporteMasIngresoSucursal {

    private String codigo_producto;
    private String nombre_producto;
    private String descripcion;

    private BigDecimal sum;

    private Long total;

    public ReporteMasIngresoSucursal() {
    }

    public ReporteMasIngresoSucursal(String codigo_producto, String nombre_producto, String descripcion, BigDecimal sum, Long total) {
        this.codigo_producto = codigo_producto;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.sum = sum;
        this.total = total;
    }

    public String getCodigo_producto() {
        return codigo_producto;
    }

    public void setCodigo_producto(String codigo_producto) {
        this.codigo_producto = codigo_producto;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
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
