package com.electronichomes.enty;


import jakarta.persistence.*;

@Entity
@Table(name="empleado", schema="controlempleado")
public class Empleado {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id_empleado;
    @Column
    private String nombre;
    @Column
    private String apellido;
    @Column
    private Integer salario;
    @Column
    private Integer codigo_area;
    @Column
    private String codigo_sucursal;
    @Column
    private String pasword;

    public Empleado() {
    }

    public Empleado(String id_empleado, String nombre, String apellido, Integer salario, Integer codigo_area, String codigo_sucursal, String pasword) {
        this.id_empleado = id_empleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
        this.codigo_area = codigo_area;
        this.codigo_sucursal = codigo_sucursal;
        this.pasword = pasword;
    }

    public String getId_empleado() {
        return id_empleado;
    }

    public void setId_empleado(String id_empleado) {
        this.id_empleado = id_empleado;
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

    public Integer getSalario() {
        return salario;
    }

    public void setSalario(Integer salario) {
        this.salario = salario;
    }

    public String getCodigo_sucursal() {
        return codigo_sucursal;
    }

    public void setCodigo_sucursal(String codigo_sucursal) {
        this.codigo_sucursal = codigo_sucursal;
    }

    public String getPasword() {
        return pasword;
    }

    public void setPasword(String pasword) {
        this.pasword = pasword;
    }

    public Integer getCodigo_area() {
        return codigo_area;
    }

    public void setCodigo_area(Integer codigo_area) {
        this.codigo_area = codigo_area;
    }
}
