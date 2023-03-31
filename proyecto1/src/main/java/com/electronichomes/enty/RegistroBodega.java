package com.electronichomes.enty;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name="producto_bodega", schema="controlbodega")
public class RegistroBodega {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String codigo_bodega;
    @Column
    private String codigo_producto;
    @Column
    private Integer cantidad_producto;

    public RegistroBodega() {
    }

    public RegistroBodega(Integer id, String codigo_bodega, String codigo_producto, Integer cantidad_producto) {
        this.id = id;
        this.codigo_bodega = codigo_bodega;
        this.codigo_producto = codigo_producto;
        this.cantidad_producto = cantidad_producto;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigo_bodega() {
        return codigo_bodega;
    }

    public void setCodigo_bodega(String codigo_bodega) {
        this.codigo_bodega = codigo_bodega;
    }

    public String getCodigo_producto() {
        return codigo_producto;
    }

    public void setCodigo_producto(String codigo_producto) {
        this.codigo_producto = codigo_producto;
    }

    public Integer getCantidad_producto() {
        return cantidad_producto;
    }

    public void setCantidad_producto(Integer cantidad_producto) {
        this.cantidad_producto = cantidad_producto;
    }
}
