package com.electronichomes.enty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="solicitud", schema="controlsolicitud")
public class SolicitudProducto {
    @Id
    private Integer id_solicitud;
    private String codigo_producto;
    private Integer cantidad_producto;
    private String codigo_sucursal_origen;
    private String codigo_sucursal_destino;

    private String estado;

    public SolicitudProducto() {
    }

    public SolicitudProducto(Integer id_solicitud, String codigo_producto, Integer cantidad_producto, String codigo_sucursal_origen, String codigo_sucursal_destino, String estado) {
        this.id_solicitud = id_solicitud;
        this.codigo_producto = codigo_producto;
        this.cantidad_producto = cantidad_producto;
        this.codigo_sucursal_origen = codigo_sucursal_origen;
        this.codigo_sucursal_destino = codigo_sucursal_destino;
        this.estado = estado;
    }

    public Integer getId_solicitud() {
        return id_solicitud;
    }

    public void setId_solicitud(Integer id_solicitud) {
        this.id_solicitud = id_solicitud;
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

    public String getCodigo_sucursal_origen() {
        return codigo_sucursal_origen;
    }

    public void setCodigo_sucursal_origen(String codigo_sucursal_origen) {
        this.codigo_sucursal_origen = codigo_sucursal_origen;
    }

    public String getCodigo_sucursal_destino() {
        return codigo_sucursal_destino;
    }

    public void setCodigo_sucursal_destino(String codigo_sucursal_destino) {
        this.codigo_sucursal_destino = codigo_sucursal_destino;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
