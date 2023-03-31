package com.electronichomes.enty;

import java.math.BigDecimal;

public class ReporteClientesGanancias {
    private String nit;
    private String nombre;
    private String apellido;
    private BigDecimal sum;
    private Long count;

    public ReporteClientesGanancias() {
    }

    public ReporteClientesGanancias(String nit, String nombre, String apellido, BigDecimal sum, Long count) {
        this.nit = nit;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sum = sum;
        this.count = count;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
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

    public BigDecimal getSum() {
        return sum;
    }

    public void setSum(BigDecimal sum) {
        this.sum = sum;
    }

    public int getCount() {
        return Math.toIntExact(count);
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
