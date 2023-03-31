package com.electronichomes.enty;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name="producto_bodega", schema="controlbodega")
public class ProductoBodega {

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
    @Column
    private String nombre_producto;

    @Column
    private String descripcion;
    @Column
    private String imagen;
    @Column
    private BigDecimal precio;


    public ProductoBodega(Integer id, String codigo_bodega, String codigo_producto, Integer cantidad_producto, String nombre_producto, String descripcion, String imagen, BigDecimal precio) {
        this.id = id;
        this.codigo_bodega = codigo_bodega;
        this.codigo_producto = codigo_producto;
        this.cantidad_producto = cantidad_producto;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
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

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }
}
