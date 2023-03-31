INSERT INTO ControlProducto.Producto(codigo_producto,nombre,stock) VALUES(15,'producto 1',100);


//Sucursales
INSERT INTO ControlSucursal.Sucursal(codigo_sucursal,nombre_sucursal,direccion) VALUES ('central01','Sucursal Central','Centro de la ciudad');
INSERT INTO ControlSucursal.Sucursal(codigo_sucursal,nombre_sucursal,direccion) VALUES ('norte01','Sucursal Norte','Norte de la ciudad');
INSERT INTO ControlSucursal.Sucursal(codigo_sucursal,nombre_sucursal,direccion) VALUES ('sur01','Sucursal Sur','Sur de la ciudad');
INSERT INTO ControlSucursal.Sucursal(codigo_sucursal,nombre_sucursal,direccion) VALUES ('bodega01','Bodega','A las afueras de la ciudad');


//codigo empleado : 1 = vendedor 2 = inventario 3= bodega 4=administrador
//3 vendedores 
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v001','Jonatan','Leon',3500,1,'central01','usrVentas01');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v002','Jose','Ponce',3000,1,'central01','usrVentas02');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v003','Alfredo','Garcia',2500,1,'central01','usrVentas03');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v004','Hugo','Perez',3200,1,'norte01','usrVentas04');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v005','Elisa','Rios',3500,1,'norte01','usrVentas05');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v006','Joaquin','Ramirez',3000,1,'norte01','usrVentas06');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v007','Wilfredo','Salas',3000,1,'sur01','usrVentas07');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v008','Belen','Campos',3100,1,'sur01','usrVentas08');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('v009','Melisa','Fernandez',3400,1,'sur01','usrVentas09');


//1 encargado de inventario
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('i001','Paula','Perez',4000,2,'central01','usrInvent01');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('i002','Lorena','Lopez',3800,2,'norte01','usrInvent02');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('i003','Fabian','Gomez',3500,2,'sur01','usrInvent03');


//4 encargados de Bodega
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b001','Rodrigo','Gomez',4500,3,'central01','usrBodega01');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b002','Fernanda','Vasquez',3500,3,'central01','usrBodega02');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b003','Pablo','Morales',3800,3,'central01','usrBodega03');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b004','Enrique','Gomez',3700,3,'central01','usrBodega04');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b005','Claudia','Hernandez',3800,3,'norte01','usrBodega05');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b006','Alfonso','Ramirez',4000,3,'norte01','usrBodega06');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b007','Abel','Gonzales',3900,3,'norte01','usrBodega07');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b008','Ruben','Mendez',3200,3,'norte01','usrBodega08');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b009','Nicolas','Cruz',3700,3,'sur01','usrBodega09');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b010','Gerardo','Alvarado',4200,3,'sur01','usrBodega10');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b011','Josue','Herrera',3900,3,'sur01','usrBodega11');
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('b012','Victor','Alvarez',3500,3,'sur01','usrBodega12');




//1 administrador 
INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('a001','Paola','Tumax',6000,4,'central01','usrAdmin01');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('a002','Julio','Estrada',5000,4,'norte01','usrAdmin02');

INSERT INTO ControlEmpleado.Empleado(id_empleado,nombre,apellido,salario,codigo_area,codigo_sucursal,pasword) VALUES('a003','Daniel','Mendoza',5500,4,'sur01','usrAdmin03');


//Productos 
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0001','Arrocera B&D','Arrocera de 14 tazas','--',279.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0002','Batidora B&D','Batidora con 5 velocidades tubo boost','--',299.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0003','cafetera Hamilton Beach','Cafetera programable 12 tazas','--',650.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0004','Cafetera Oster','Cafetera Oster 12 tazas con filtro permanente','--',399.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0005','Licuadora Hamilton beach','Licuadora 2 velocidades','--',549.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0006','Freidora de aire RCA','capacidad 7.2 Litros','--',1200.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0007','Microondas whirpool','20 Lts','--',549.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0008','Olla de presion oster','5.5 litros','--',799.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0009','Waflera Hamilton beach','Con Placas Antiadherentes','--',199.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0010','Plancha taurus','Plancha con vapor y rocio , suela adherente','--',159.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0011','Procesador de alimentos Oster',' Velocidades , 3 Tazas','--',449.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0012','Lavadora samsung','Capacidad de 48 libras','--',5499.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0013','Tostador de pan B&D','ranura extra grandes, botón para pan bagels','--',299.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0014','Dispensadora de agua fria y caliente ','5 galones','--',1999.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0015','Microondas Panasonic','25 Lts','--',999.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0016','Sandwichera B&D','espacio para 2 sandwiches','--',299.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0017','Refrigeradora Samsung',' 28" Cúbicos Con Tecnología Twin Cooling Plus ','--',13999.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0018','Aire acondicionado LG','24,000 BTU, Inverter Con Smart ThinQ','--',12999.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0019','Secadora de ropa Whirpool','44 libras','--',4300.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0020','Estufa Whirpool','0" 4 quemadores acabado en acero','--',6200.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0021','Refrigeradora LG','14", Con dispensador','--',4999.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0022','Lavadora mabe','48 Libras Con Tecnología Aqua Saver Green,','--',4300.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0023','Estufa Electrica LG','30" Con Wi-Fi, Sistema De Convección, Air Fry','--',8499.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0024','Extractor de jugo Hamilton Beach','cortador/colador acero inoxidable','--',449.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0025','Licuadora Oster ','3 velocidades, vaso vidrio, 6 tazas','--',1099.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0026','Batidora Oster','Batidora de pedestal y mano Oster 6 velocidades','--',799.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0027','Arrocera Hamilton beach','30 tazas,antiadherente','--',499.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0028','Waflera cisinart','Acero Inoxidable , 5 Ajustes','--',749.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0029','Procesador de alimentos hamilton beach','8 tazas, 2 velocidades + pulso','--',549.00);
INSERT INTO ControlProducto.Producto(codigo_producto,nombre_producto,descripcion,imagen,precio) VALUES ('p0030','Freidora de aire Magic Chef','3.2 Lts 1500W apagado automático','--',599.00);
// Sucursal central
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0001',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0002',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0003',3);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0004',7);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0005',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0006',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0007',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0008',15);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0009',13);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0010',9);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0011',7);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0012',12);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0013',20);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0014',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0015',7);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0016',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0017',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0018',4);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0019',7);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0020',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0021',3);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0022',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0023',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0024',15);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0025',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0026',12);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0027',15);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0028',20);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0029',19);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('central01','p0030',10);

//Sucursal norte 
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0001',12);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0002',4);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0003',2);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0004',4);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0005',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0007',11);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0009',12);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0010',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0012',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0013',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0014',7);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0016',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0017',9);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0018',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0019',6);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0020',4);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0021',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0022',3);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0023',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0024',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0026',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0027',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0028',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0029',15);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('norte01','p0030',8);


//Sucursal sur


INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0001',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0003',3);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0005',8);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0006',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0012',12);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0013',20);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0015',7);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0018',4);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0021',3);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0023',5);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0025',10);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0026',12);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0027',15);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0028',20);
INSERT INTO ControlSucursal.Producto_Sucursal(codigo_sucursal,codigo_producto,cantidad_producto) VALUES ('sur01','p0030',10);


//bodega
INSERT INTO ControlBodega.Bodega(codigo_bodega,nombre_bodega) VALUES ('b001','bodega central');


//producto bodega 
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0001',10);

INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0002',15);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0003',8);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0004',7);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0005',6);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0006',10);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0007',10);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0008',7);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0009',15);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0010',19);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0011',6);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0012',3);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0013',15);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0014',9);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0015',7);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0016',8);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0017',12);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0018',13);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0019',14);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0020',11);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0021',10);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0022',12);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0023',13);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0024',16);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0025',17);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0026',20);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0027',12);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0028',15);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0029',14);
INSERT INTO ControlBodega.Producto_bodega(codigo_bodega,codigo_producto,cantidad_producto) VALUES ('b001','p0030',10);


