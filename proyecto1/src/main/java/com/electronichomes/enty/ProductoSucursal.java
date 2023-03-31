package com.electronichomes.enty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
@Entity
@Table(name="producto_sucursal", schema="controlsucursal")
public class ProductoSucursal {
    @Id
    private Integer codigo;
    private String codigo_producto;
    private String codigo_sucursal;
    private Integer cantidad_producto;
    private String nombre_producto;
    private String descripcion;
    private BigDecimal precio;


    public ProductoSucursal(Integer codigo, String codigo_producto, String codigo_sucursal, Integer cantidad_producto, String nombre_producto, String descripcion, BigDecimal precio) {
        this.codigo = codigo;
        this.codigo_producto = codigo_producto;
        this.codigo_sucursal = codigo_sucursal;
        this.cantidad_producto = cantidad_producto;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    public ProductoSucursal() {

    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getCodigo_producto() {
        return codigo_producto;
    }

    public void setCodigo_producto(String codigo_producto) {
        this.codigo_producto = codigo_producto;
    }

    public String getCodigo_sucursal() {
        return codigo_sucursal;
    }

    public void setCodigo_sucursal(String codigo_sucursal) {
        this.codigo_sucursal = codigo_sucursal;
    }

    public Integer getCantidad_producto() {
        return cantidad_producto;
    }

    public void setCantidad_producto(Integer cantidad_producto) {
        this.cantidad_producto = cantidad_producto;
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
}
