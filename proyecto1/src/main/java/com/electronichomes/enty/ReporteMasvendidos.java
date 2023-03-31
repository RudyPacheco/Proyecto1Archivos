package com.electronichomes.enty;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@Table(name="producto_sucursal", schema="controlproducto")
public class ReporteMasvendidos {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String codigo_producto;
    private String nombre_producto;
    private String descripcion;

    private BigDecimal precio;

    private Long total;

    public ReporteMasvendidos() {
    }

    public ReporteMasvendidos(String codigo_producto, String nombre_producto, String descripcion, BigDecimal precio, Long total) {
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

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
