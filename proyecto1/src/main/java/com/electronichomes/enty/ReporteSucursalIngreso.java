package com.electronichomes.enty;

import java.math.BigDecimal;

public class ReporteSucursalIngreso {
    private String codigo_sucursal;
    private BigDecimal sum;
    private Long total;

    public ReporteSucursalIngreso() {
    }

    public ReporteSucursalIngreso(String codigo_sucursal, BigDecimal sum, Long total) {
        this.codigo_sucursal = codigo_sucursal;
        this.sum = sum;
        this.total = total;
    }

    public String getCodigo_sucursal() {
        return codigo_sucursal;
    }

    public void setCodigo_sucursal(String codigo_sucursal) {
        this.codigo_sucursal = codigo_sucursal;
    }

    public BigDecimal getSum() {
        return sum;
    }

    public void setSum(BigDecimal sum) {
        this.sum = sum;
    }

    public int getTotal() {
        return Math.toIntExact(total);
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
