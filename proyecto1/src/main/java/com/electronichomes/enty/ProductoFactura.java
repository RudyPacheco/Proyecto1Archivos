package com.electronichomes.enty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name="produtos_venta", schema="controlventa")
public class ProductoFactura {
    @Id
    private Integer codigo;

    private String codigo_venta;
    private String codigo_producto;
    private BigDecimal precio;

    public ProductoFactura(Integer codigo, String codigo_venta, String codigo_producto, BigDecimal precio) {
        this.codigo = codigo;
        this.codigo_venta = codigo_venta;
        this.codigo_producto = codigo_producto;
        this.precio = precio;
    }

    public ProductoFactura() {
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getCodigo_venta() {
        return codigo_venta;
    }

    public void setCodigo_venta(String codigo_venta) {
        this.codigo_venta = codigo_venta;
    }

    public String getCodigo_producto() {
        return codigo_producto;
    }

    public void setCodigo_producto(String codigo_producto) {
        this.codigo_producto = codigo_producto;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }
}
