package com.electronichomes.enty;

public class ReporteSucursalVentas {
    private String codigo_sucursal;
    private Long total;


    public ReporteSucursalVentas() {
    }

    public ReporteSucursalVentas(String codigo_sucursal, Long total) {
        this.codigo_sucursal = codigo_sucursal;
        this.total = total;
    }

    public String getCodigo_sucursal() {
        return codigo_sucursal;
    }

    public void setCodigo_sucursal(String codigo_sucursal) {
        this.codigo_sucursal = codigo_sucursal;
    }

    public int getTotal() {
        return Math.toIntExact(total);
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
