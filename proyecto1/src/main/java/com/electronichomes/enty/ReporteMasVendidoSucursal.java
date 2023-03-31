package com.electronichomes.enty;

import java.math.BigDecimal;

public class ReporteMasVendidoSucursal {

    private String codigo_producto;
    private String nombre_producto;
    private String descripcion;
    private BigDecimal precio;
    private Long total;

    public ReporteMasVendidoSucursal() {
    }

    public ReporteMasVendidoSucursal(String codigo_producto, String nombre_producto, String descripcion, BigDecimal precio, Long total) {
        this.codigo_producto = codigo_producto;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.precio = precio;
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

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public int getTotal() {
        return Math.toIntExact(total);
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
