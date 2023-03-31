CREATE DATABASE electronic_homes;

CREATE SCHEMA ControlSucursal;
CREATE SCHEMA ControlEmpleado;
CREATE SCHEMA ControlCliente;
CREATE SCHEMA ControlBodega;
CREATE SCHEMA ControlVenta;
CREATE SCHEMA ControlProducto;
CREATE SCHEMA ControlSolicitud;


CREATE TABLE ControlSucursal.Sucursal(
    codigo_sucursal VARCHAR(13) NOT NULL,
    nombre_sucursal VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY(codigo_sucursal)
);

CREATE TABLE ControlProducto.Producto(
    codigo_producto VARCHAR(13) NOT NULL,
    nombre_producto VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    imagen VARCHAR(50) NOT NULL,
    precio DECIMAL(8,2),
    PRIMARY KEY(codigo_producto)
);

//TERMINAR LLAVES FORANEAS

CREATE TABLE ControlSucursal.Producto_Sucursal(
codigo SERIAL PRIMARY KEY,
codigo_sucursal VARCHAR(13) NOT NULL,
codigo_producto VARCHAR(13) NOT NULL,
cantidad_producto INT NOT NULL,
FOREIGN KEY(codigo_producto) REFERENCES ControlProducto.Producto(codigo_producto),
FOREIGN KEY(codigo_sucursal) REFERENCES ControlSucursal.Sucursal(codigo_sucursal)
);

CREATE TABLE ControlEmpleado.Empleado(
    id_empleado VARCHAR (20) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    salario INT NOT NULL,
    codigo_area INT NOT NULL,
    codigo_sucursal VARCHAR(13),
    pasword VARCHAR (50) NOT NULL,
    PRIMARY KEY (id_empleado),
    FOREIGN KEY (codigo_sucursal) REFERENCES ControlSucursal.Sucursal(codigo_sucursal)
);

CREATE TABLE ControlCliente.Cliente(
    nit VARCHAR(13) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY(nit)
);

//definir el numero de venta
CREATE TABLE ControlVenta.Venta(
    codigo_venta VARCHAR(13),
    nit VARCHAR(13) NOT NULL,
    codigo_sucursal VARCHAR(13) NOT NULL,
    id_empleado VARCHAR(20) NOT NULL,
    total_gastado DECIMAL(8,2) NOT NULL,
    descuento DECIMAL(8,2) NOT NULL,
    total_final DECIMAL(8,2) NOT NULL,
    PRIMARY KEY(codigo_venta),
    FOREIGN KEY(nit) REFERENCES ControlCliente.Cliente(nit),
    FOREIGN KEY(id_empleado) REFERENCES ControlEmpleado.Empleado(id_empleado)
);

//arreglar nombre tabla

CREATE TABLE ControlVenta.Produtos_venta(
    codigo SERIAL PRIMARY KEY,
    codigo_venta VARCHAR(13) NOT NULL,
    codigo_producto VARCHAR(13) NOT NULL,
    precio DECIMAL(8,2) NOT NULL,
    FOREIGN KEY(codigo_venta) REFERENCES ControlVenta.Venta(codigo_venta),
    FOREIGN KEY(codigo_producto) REFERENCES ControlProducto.Producto(codigo_producto)
);




CREATE TABLE ControlBodega.Bodega(
    codigo_bodega VARCHAR(13),
    nombre_bodega VARCHAR(50),
    PRIMARY KEY(codigo_bodega)
);

CREATE TABLE ControlBodega.Producto_bodega(
    id SERIAL PRIMARY KEY,
    codigo_bodega VARCHAR(13) NOT NULL,
    codigo_producto VARCHAR(13) NOT NULL,
    cantidad_producto INT NOT NULL,
    FOREIGN KEY(codigo_bodega) REFERENCES ControlBodega.Bodega(codigo_bodega),
    FOREIGN KEY(codigo_producto) REFERENCES ControlProducto.Producto(codigo_producto)
);


CREATE TABLE ControlSolicitud.Solicitud(
    id_solicitud SERIAL PRIMARY KEY,
    codigo_producto VARCHAR(13) NOT NULL,
    cantidad_producto INT NOT NULL,
    codigo_sucursal_origen VARCHAR(13) NOT NULL,
    codigo_sucursal_destino VARCHAR(13) NOT NULL,
    estado VARCHAR(13),
    FOREIGN KEY(codigo_producto) REFERENCES ControlProducto.Producto(codigo_producto),
    FOREIGN KEY(codigo_sucursal_origen) REFERENCES ControlSucursal.Sucursal(codigo_sucursal),
    FOREIGN KEY(codigo_sucursal_destino) REFERENCES ControlSucursal.Sucursal(codigo_sucursal)
);




