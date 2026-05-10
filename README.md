# RS Connect - Global Business Services

RS Connect es una plataforma digital orientada a la vinculación entre empresas de servicios premium y usuarios potenciales. El sistema integra una arquitectura de software basada en el patrón Modelo-Vista-Controlador (MVC), facilitando una navegación fluida para la exploración de servicios, el registro de usuarios y la gestión de reservaciones corporativas.


## Tecnologías Utilizadas
- **Backend:** Node.js y Express.js.
- **Frontend:** EJS (Embedded JavaScript templates), Bootstrap 5 y CSS3.
- **Base de Datos:** MySQL/PostgreSQL mediante el ORM Sequelize, alojada en el servicio Aiven.
- **Bibliotecas Adicionales:** AOS (Animate On Scroll) para efectos visuales y SweetAlert2 para la gestión de notificaciones.

---

## Instrucciones de Instalación y Configuración Local

Para replicar este entorno de desarrollo en un equipo local, se deben seguir los siguientes procedimientos:

### 1. Clonación del Repositorio
Descargue el código fuente utilizando el protocolo Git:
```bash
git clone [[https://github.com/tu-usuario/tu-repositorio.git](https://github.com/Jaderamos07/rs-connect)]
```
### 2. Instalación de Dependencias

Es requisito indispensable contar con Node.js instalado en el sistema. Ejecute el siguiente comando para descargar los módulos necesarios:

Bash
npm install

### 3. Configuración del Entorno

Debe crear un archivo de configuración de variables de entorno denominado .env en el directorio raíz. Este archivo debe contener las credenciales de conexión suministradas por el administrador de la base de datos:

Fragmento de código
```env
DB_NAME=nombre_de_la_base_de_datos
DB_USER=usuario_de_acceso
DB_PASSWORD=contraseña_de_acceso
DB_HOST=direccion_del_host
DB_PORT=puerto_de_conexion
PORT=3000
```

### 4. Ejecución de la Aplicación

Inicie el servidor local mediante el comando:

```Bash
npm start
```
Posteriormente, acceda a la dirección http://localhost:3000 desde cualquier navegador web.

Estructura del Directorio

**/config**: Archivos de configuración de la conexión a la base de datos.

**/controllers**: Lógica de control que procesa las solicitudes del cliente.

**/models**: Definición de los esquemas y modelos de datos (Sequelize).

**/public**: Recursos estáticos como hojas de estilo, scripts de cliente y archivos multimedia.

**/routes**: Definición de los puntos finales (endpoints) y enrutamiento de la aplicación.

**/views**: Plantillas de la interfaz de usuario en formato EJS.
