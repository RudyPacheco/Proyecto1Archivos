//insert para consumidor final 
INSERT INTO ControlCliente.Cliente(nit,nombre,apellido,direccion) VALUES ('00000','consumidor','final','--');






SELECT id,codigo_bodega,cantidad_producto,codigo_producto,nombre_producto,descripcion,imagen,precio FROM ControlBodega.Producto_bodega AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto;


SELECT produgob.codigo_producto,nombre_producto,descripcion,produgoB.precio FROM ControlVenta.Produtos_venta AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto;

//reportes

SELECT id,codigo_bodega,produgob.codigo_producto,cantidad_producto,nombre_producto,descripcion,imagen,precio FROM ControlBodega.Producto_bodega AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto;

//top 10 productos mas vendidos funciona
SELECT produgob.codigo_producto,nombre_producto,descripcion,produgoB.precio,COUNT(1) AS total  FROM ControlVenta.Produtos_venta AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto GROUP BY produgob.codigo_producto ,productog.nombre_producto,produgoB.precio,productog.descripcion HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 10;

//top 10 clientes que mas ganancias generan pendiente
SELECT venta.nit,cliente.nombre,cliente.apellido,venta.total_gastado,SUM(venta.total_final),COUNT(1) AS total  FROM ControlVenta.Venta AS venta INNER JOIN ControlCliente.Cliente AS cliente ON venta.nit=cliente.nit GROUP BY venta.nit,cliente.nombre,cliente.apellido,venta.total_gastado HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 10;

//top 3 Sucursal con mas ventas funciona
SELECT codigo_sucursal ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta GROUP BY codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;

//Top 3 sucursales con más ingresos funciona.
SELECT codigo_sucursal,SUM(total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta GROUP BY codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;

//top 3 empleados con mas ventas Funciona
SELECT id_empleado,SUM(total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta GROUP BY id_empleado HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;

SELECT venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal,SUM(venta.total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta INNER JOIN ControlEmpleado.Empleado AS empleado ON venta.id_empleado=empleado.id_empleado GROUP BY venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;


//Top 3 empleados con más ingresos Funciona. 

SELECT id_empleado,SUM(total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta GROUP BY id_empleado HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;

SELECT venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal,SUM(venta.total_gastado) ,COUNT(1) AS total  FROM ControlVenta.Venta AS venta INNER JOIN ControlEmpleado.Empleado AS empleado ON venta.id_empleado=empleado.id_empleado GROUP BY venta.id_empleado,empleado.nombre ,empleado.apellido,empleado.codigo_sucursal HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 3;


//Top 10 productos con más ingresos. Funciona 

SELECT producto.codigo_producto,producto.nombre_producto,producto.descripcion,SUM(itemV.precio) ,COUNT(1) AS total  FROM ControlProducto.Producto AS producto INNER JOIN ControlVenta.Produtos_venta AS itemV ON producto.codigo_producto=itemV.codigo_producto GROUP BY producto.codigo_producto,producto.nombre_producto,producto.descripcion HAVING COUNT(1)>=1 ORDER BY sum DESC LIMIT 10;



//Top 5 productos más vendidos por sucursal. Funciona
SELECT produgob.codigo_producto,nombre_producto,descripcion,produgoB.precio,COUNT(1) AS total  FROM ControlVenta.Produtos_venta AS produgoB INNER JOIN ControlProducto.Producto AS productoG ON produgoB.codigo_producto=productoG.codigo_producto INNER JOIN ControlVenta.Venta AS venta ON produgoB.codigo_venta=venta.codigo_venta WHERE venta.codigo_sucursal='central01' GROUP BY produgob.codigo_producto ,productog.nombre_producto,produgoB.precio,productog.descripcion HAVING COUNT(1)>=1 ORDER BY total DESC LIMIT 5;




//Top 5 productos con más ingresos por sucursal. Funciona

SELECT producto.codigo_producto,producto.nombre_producto,producto.descripcion,SUM(itemV.precio) ,COUNT(1) AS total  FROM ControlProducto.Producto AS producto INNER JOIN ControlVenta.Produtos_venta AS itemV ON producto.codigo_producto=itemV.codigo_producto INNER JOIN ControlVenta.Venta AS venta ON itemV.codigo_venta=venta.codigo_venta WHERE venta.codigo_sucursal='central01' GROUP BY producto.codigo_producto,producto.nombre_producto,producto.descripcion HAVING COUNT(1)>=1 ORDER BY sum DESC LIMIT 5;




//top 10 clientes que mas ganancias generan intento 2  Funciona
SELECT venta.nit,cliente.nombre,cliente.apellido,SUM(total_gastado),COUNT(venta.nit) FROM ControlVenta.Venta AS venta INNER JOIN ControlCliente.Cliente AS cliente ON venta.nit=cliente.nit GROUP BY venta.nit,cliente.nombre,cliente.apellido ORDER BY sum DESC LIMIT 11;


SELECT venta.nit,cliente.nombre,cliente.apellido,SUM(total_gastado),COUNT(venta.nit) FROM ControlVenta.Venta AS venta INNER JOIN ControlCliente.Cliente AS cliente ON venta.nit=cliente.nit WHERE venta.nit NOT IN ('00000') GROUP BY venta.nit,cliente.nombre,cliente.apellido ORDER BY sum DESC LIMIT 10;
