package com.electronichomes.enty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name="venta", schema="controlventa")
public class RegistroVenta {
    @Id
    private String codigo_venta;
    private String nit;
    private String codigo_sucursal;
    private String id_empleado;
    private BigDecimal total_gastado;
    private BigDecimal descuento;
    private BigDecimal total_final;

    public RegistroVenta() {
    }

    public RegistroVenta(String codigo_venta, String nit, String codigo_sucursal, String id_empleado, BigDecimal total_gastado, BigDecimal descuento, BigDecimal total_final) {
        this.codigo_venta = codigo_venta;
        this.nit = nit;
        this.codigo_sucursal = codigo_sucursal;
        this.id_empleado = id_empleado;
        this.total_gastado = total_gastado;
        this.descuento = descuento;
        this.total_final = total_final;
    }

    public String getCodigo_venta() {
        return codigo_venta;
    }

    public void setCodigo_venta(String codigo_venta) {
        this.codigo_venta = codigo_venta;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getCodigo_sucursal() {
        return codigo_sucursal;
    }

    public void setCodigo_sucursal(String codigo_sucursal) {
        this.codigo_sucursal = codigo_sucursal;
    }

    public String getId_empleado() {
        return id_empleado;
    }

    public void setId_empleado(String id_empleado) {
        this.id_empleado = id_empleado;
    }

    public BigDecimal getTotal_gastado() {
        return total_gastado;
    }

    public void setTotal_gastado(BigDecimal total_gastado) {
        this.total_gastado = total_gastado;
    }

    public BigDecimal getDescuento() {
        return descuento;
    }

    public void setDescuento(BigDecimal descuento) {
        this.descuento = descuento;
    }

    public BigDecimal getTotal_final() {
        return total_final;
    }

    public void setTotal_final(BigDecimal total_final) {
        this.total_final = total_final;
    }
}
