# Backend de Tezihuatl Holistic Center :hospital:

## Iniciar proyecto :rocket:

---

1.- Primero debes clonar este repositorio en tu entorno local pero antes recuerda tener instalado node para poder ejecutarlo y en caso de no tenerlo lo puedes descargar del siguiente [enlace](https://nodejs.org/es/).

para verificar que lo tienes instalado ejecuta el siguiente comando en tu terminal.

```bash
    node -v
```

con el siguiente comando puedes clonar este respositorio en tu entorno local
(recuerda tener instalado git o de lo contrario te marcará error al hacer el clone).

```bash
    git clone https://github.com/JosafatJimenezB/Tezihuatl_Backend.git
```

o en el boton verde que aparece en la parte superior derecha de la pantalla se seleccion descargar como zip y se descomprime en el explorador de archivos.

Despues de clonar el repositorio debes dirigirte a la carpeta donde esta el proyecto y ejecutar el siguiente comando:

```bash
    cd Tezihuatl_Backend
```

2.- Teniendo el paso anterior hay que instalar las dependencias de node para ejecutar el proyecto de forma local (verifica estar en la carpeta del proyecto):

```bash
    npm install
```

3.- Importa la base de datos a phpMyAdmin

Para ello lo primero es importar la base de datos en tu servidor sql o phpmyadmin.

con esto ya tendremos la base de datos operativa con las siguientes tablas:

**Clients**
En esta tabla es donde se guardaran los datos de los clientes que se registran en el sistema.

```sql
    CREATE TABLE `clients` (
      `id` int(11) NOT NULL,
      `user` varchar(150) NOT NULL,
      `rol` varchar(50) NOT NULL,
      `edad` int(3) NOT NULL,
      `genero` varchar(30) NOT NULL,
      `estadoCivil` varchar(50) NOT NULL,
      `domicilio` varchar(400) NOT NULL,
      `motivo` varchar(1000) NOT NULL
    )
```

**users**
En esta tabla se van guardando los usuarios que acceden al sistema.

```sql
    CREATE TABLE `users` (
      `id` int(11) NOT NULL,
      `user` varchar(50) NOT NULL,
      `name` varchar(100) NOT NULL,
      `pass` varchar(255) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

4.- Ejecuta el siguiente comando en la terminal para ejecutar el servidor

```bash
    npm run app.js
```

o con el siguiente comando de nodemon para autorefrescar el servidor al hacer cambios

```bash
    nodemon start
```

5.- Una vez que el servidor esté corriendo debes ingresar al siguiente enlace para verificar que el servidor esta corriendo:

**http://localhost:5000**

## Funcionamiento del servidor :desktop_computer:

---

### Creación del servidor

En el archivo principal **_app.js_** se importa el framework de express con el siguiente comando:

```js
const express = require("express");
const app = express();
```

y despues se ejecuta el servidor con el siguiente comando:

```js
const server = app.listen(process.env.PORT || port, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
```

con ello ya tendremos nuestro servidor corriendo en el puerto 5000.

pero ademas de ello tambien tenemos que importar a la libreria de cookie-parser para poder usar las cookies en el servidor y poder tener control sobre las sesiones y tambien agregamos dotenv para poder manejar variables de entorno.

### Conexion con la base de datos

Una vez levantado el servidor se crea un controller para poder hacer una conexion con la base de datos, para ello importamos mysql dentro del archivo **_db.js_**.

```js
const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});
```

### Variables de entorno

Se crea un archivo **.env** con las variables de entorno que se van a utilizar en el servidor.

```
    DB_HOST = localhost
    DB_USER = root
    DB_PASS =
    DB_DATABASE = backend-db

    JWT_SECRETO = secret_password

    JWT_TIEMPO_EXPIRA = 7d

    JWT_COOKIE_EXPIRES = 90


```

### Controller para el inicio de session

Para esta seccion se importa jsonwebtoken y bcryptjs para poder manejar la sesion y el login.

Lo que hacemos con jswonwebtoken es dar un token para que se pueda acceder a la sesion el cual contiene una duracion y con bcryptjs se encriptan los datos que se han ingresado para poder iniciar sesion.

### Vistas en el navegador

Para ello se hace el uso de ejs el cual es un motor de plantillas que se renderiza desde el backend para ello en el archivo **_app.js_** se importa la libreria ejs y le decimos que va a ser predeterminado para el renderizado de las paginas.

```js
app.set("view engine", "ejs");

//seteamos la carpeta public para archivos estáticos
app.use(express.static("public"));
```

## Vistas del proyecto :camera:

---

![](vistas-proyecto/login.jpg)

![](vistas-proyecto/dashboard.jpg)

<br>

## License

---

- Puedes usar este proyecto para generar tu propio proyecto, pero debes dejar una referencia de donde lo obtuviste.

- No puedes usar las imagenes y los logos de este proyecto para tu proyecto.

- No olvides dejar una estrellita si te gusto :)

<br>

###### Made with :heart: by Josafat Jimenez :mexico:
