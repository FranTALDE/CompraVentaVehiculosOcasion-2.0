--
-- Base de datos: `concesionario`
--

DROP DATABASE IF EXISTS concesionario;
CREATE DATABASE concesionario;
USE concesionario;

--
-- Estructura de tabla para la tabla `CATEGORIA`
--

CREATE TABLE CATEGORIA(
  ID_CATEGORIA NUMERIC(5) NOT NULL,
  NOMBRE VARCHAR(20) DEFAULT NULL,
  DESCRIPCION VARCHAR(40) DEFAULT NULL,
  CONSTRAINT PK_CATEGORIA PRIMARY KEY(ID_CATEGORIA)
);

--
-- Volcado de datos para la tabla `CATEGORIA`
--

INSERT INTO CATEGORIA(ID_CATEGORIA, NOMBRE, DESCRIPCION) VALUES
  ('1','Turismo','Coches de gama turismo'),
  ('2','Deportivo','Coches de gama alta'),
  ('3','4x4','Coches de gama todocaminos');

--
-- Estructura de tabla para la tabla `EXTRA`
--

CREATE TABLE EXTRA(
  ID_EXTRA NUMERIC(5) NOT NULL,
  NOMBRE VARCHAR(30) DEFAULT NULL,
  DESCRIPCION VARCHAR(230) DEFAULT NULL,
  CONSTRAINT PK_EXTRA PRIMARY KEY(ID_EXTRA)
);

--
-- Volcado de datos para la tabla `EXTRA`
--

INSERT INTO EXTRA(ID_EXTRA, NOMBRE, DESCRIPCION) VALUES
  ('1','Sensor de luces y lluvia','Sistema de activacion automatica de los faros y los limpiaparabrisas'),
  ('2','Sensor de parking','Sistema de aviso mediante sensores'),
  ('3','Techo solar','Sistema de abertura fija u operable (que se abre como una ventana o se desliza)'),
  ('4','Traccion total','Sistema de traccion en las cuatro ruedas, doble traccion y traccion total'),
  ('5','Automatico','Sistema de transmision automatica que puede encargarse por si misma de cambiar la relacion de cambio automaticamente a medida que el vehiculo se mueve, liberando asi al conductor de la tarea de cambiar de marcha manualmente'),
  ('6','Suspensiones deportivas','Sistema de comportamiento del vehiculo reduciendo el balanceo del mismo en el paso por curva, permitiendo una conduccion mucho mas rapida y segura'),
  ('7','Asientos deportivos','Asientos de competicion garantizan la maxima comodidad en sesiones de larga duracion en las que un buen asiento y posicion son vitales para evitar dolores de espalda o cervicales'),
  ('8','Llantas','Llantas de 14" 15" 16" 17" 18" 19" 20" 21" 22"');

--
-- Estructura de tabla para la tabla `VEHICULO`
--

CREATE TABLE VEHICULO(
  MATRICULA VARCHAR(8) NOT NULL,
  PRECIO VARCHAR(20) DEFAULT NULL,
  ID_CATEGORIA NUMERIC(5) NOT NULL,
  CONSTRAINT PK_VEHICULO PRIMARY KEY(MATRICULA),
  CONSTRAINT FK_VEHICULO_CATEGORIA FOREIGN KEY(ID_CATEGORIA) REFERENCES CATEGORIA(ID_CATEGORIA)
);

--
-- Volcado de datos para la tabla `VEHICULO`
--

INSERT INTO VEHICULO(MATRICULA, PRECIO, ID_CATEGORIA) VALUES
  ('3198XNY','9.000','1'),
  ('0001ABC','15.000','1'),
  ('0401BXC','18.000','1'),
  ('5801CBX','50.000','2'),
  ('4523FKP','12.000','3');

--
-- Estructura de tabla para la tabla `EXTRAS_VEHICULO`
--

CREATE TABLE EXTRAS_VEHICULO(
  ID_EXTRA NUMERIC(5) NOT NULL,
  MATRICULA VARCHAR(8) NOT NULL,
  CONSTRAINT PK_EXTRAS_VEHICULO PRIMARY KEY(ID_EXTRA, MATRICULA),
  CONSTRAINT FK_EXTRAS_VEHICULO_EXTRA FOREIGN KEY(ID_EXTRA) REFERENCES EXTRA(ID_EXTRA),
  CONSTRAINT FK_EXTRAS_VEHICULO_VEHICULO FOREIGN KEY(MATRICULA) REFERENCES VEHICULO(MATRICULA)
);

--
-- Volcado de datos para la tabla `EXTRAS_VEHICULO`
--

INSERT INTO EXTRAS_VEHICULO(ID_EXTRA, MATRICULA) VALUES
  ('1','3198XNY'),
  ('1','0001ABC'),
  ('2','0001ABC'),
  ('1','0401BXC'),
  ('2','0401BXC'),
  ('5','0401BXC'),
  ('6','0401BXC'),
  ('1','5801CBX'),
  ('2','5801CBX'),
  ('3','5801CBX'),
  ('4','5801CBX'),
  ('5','5801CBX'),
  ('6','5801CBX'),
  ('7','5801CBX'),
  ('8','5801CBX'),
  ('1','4523FKP'),
  ('2','4523FKP'),
  ('4','4523FKP'),
  ('8','4523FKP');

--
-- Estructura de tabla para la tabla `PERSONA`
--

CREATE TABLE PERSONA(
  ID_PERSONA VARCHAR(9) NOT NULL,
  NOMBRE VARCHAR(20) DEFAULT NULL,
  APELLIDO VARCHAR(20) DEFAULT NULL,
  MOVIL NUMERIC(9) DEFAULT NULL,
  TIPO_PERSONA VARCHAR(20) NOT NULL,
  TIPO_EMPLEADO VARCHAR(20) DEFAULT NULL,
  NOMBRE_EMPRESA VARCHAR(50) DEFAULT NULL,
  CONSTRAINT PERSONA PRIMARY KEY(ID_PERSONA)
);

--
-- Volcado de datos para la tabla `PERSONA`
--

INSERT INTO PERSONA(ID_PERSONA, NOMBRE, APELLIDO, MOVIL, TIPO_PERSONA, TIPO_EMPLEADO, NOMBRE_EMPRESA) VALUES
  ('47898444Q',NULL,NULL,NULL,'Empleado','Director Compras',NULL),
  ('28487847A',NULL,NULL,NULL,'Empleado','Director Compras',NULL),
  ('30569479M',NULL,NULL,NULL,'Empleado','Director Compras',NULL),
  ('27846544Z',NULL,NULL,NULL,'Empleado','Comercial Ventas',NULL),
  ('29486544X',NULL,NULL,NULL,'Empleado','Comercial Ventas',NULL),
  ('24544345G',NULL,NULL,NULL,'Empleado','Comercial Ventas',NULL),
  ('28898444L','Juan','Fernandez','666789123','Proveedor',NULL,'Viuda de Terry S.L'),
  ('27958424Y','Carlos','Perez','657989213','Proveedor',NULL,'Sevilla Wagen S.A'),
  ('31484594C','Jose Maria','Barrero','696917823','Proveedor',NULL,'Hispalauto'),
  ('29845124H','Antonio','Gimenez','645789231','Proveedor',NULL,'Ferri-Movil S.A'),
  ('47898785Q','Andrea','Martinez','654789123','Cliente',NULL,NULL),
  ('32785456P','Mateo','Villarubia','656917823','Cliente',NULL,NULL),
  ('26978756F','Emilio','Gonzalez','649572384','Cliente',NULL,NULL),
  ('27988741S','Cristian','Gaona','675478924','Cliente',NULL,NULL);

--
-- Estructura de tabla para la tabla `TRANSACCION`
--

CREATE TABLE TRANSACCION(
  ID_TRANSACCION NUMERIC(5) NOT NULL,
  IMPORTE VARCHAR(20) DEFAULT NULL,
  FECHA VARCHAR(10) DEFAULT NULL,
  TIPO_TRANSACCION VARCHAR(10) DEFAULT NULL,
  ID_PERSONA VARCHAR(9) NOT NULL,
  TIPO_EMPLEADO VARCHAR(20) NOT NULL,
  MATRICULA VARCHAR(8) NOT NULL,
  CONSTRAINT PK_TRANSACCION PRIMARY KEY(ID_TRANSACCION),
  CONSTRAINT FK_TRANSACCION_PERSONA FOREIGN KEY(ID_PERSONA) REFERENCES PERSONA(ID_PERSONA),
  CONSTRAINT FK_TRANSACCION_VEHICULO FOREIGN KEY(MATRICULA) REFERENCES VEHICULO(MATRICULA)
);

--
-- Volcado de datos para la tabla `TRANSACCION`
--

INSERT INTO TRANSACCION(ID_TRANSACCION, IMPORTE, FECHA, TIPO_TRANSACCION, ID_PERSONA, TIPO_EMPLEADO, MATRICULA) VALUES
  ('1','50.000','30/01/2017','Compra','30569479M','Director Compras','5801CBX'),
  ('2','12.000','03/02/2017','Venta','29486544X','Comercial Ventas','4523FKP');