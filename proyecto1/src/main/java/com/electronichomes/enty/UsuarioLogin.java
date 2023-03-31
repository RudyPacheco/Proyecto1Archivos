package com.electronichomes.enty;

public class UsuarioLogin {
    private String nombre;
    private String contrsenia;


    public UsuarioLogin(String nombre, String contrsenia) {
        this.nombre = nombre;
        this.contrsenia = contrsenia;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getContrsenia() {
        return contrsenia;
    }

    public void setContrsenia(String contrsenia) {
        this.contrsenia = contrsenia;
    }
}
