# E-commerce

Este es un proyecto de e-commerce desarrollado con **React** para el frontend y **Java** en el backend. La base de datos está implementada usando **MySql**. Este proyecto muestra las principales funcionalidades de un e-commerce, filtrado, carrito de compras, lista de deseos y más.

---

## Características Principales

### Frontend:
- **React**: Componentes funcionales, hooks (useState, useEffect, useNavigate).
- **React Router**: Implementación de rutas dinámicas y navegación.
- **Redux**: Gestión global del estado de la aplicación.
- **CSS**: Estilos responsivos utilizando Flexbox y Grid.
- **Integración con APIs RESTful** mediante axios.

### Backend:
- **Java con Spring Boot**: Creación de APIs REST para manejar las operaciones del e-commerce.
- **Seguridad**: Implementación de autenticación y autorización mediante tokens JWT.
- **Roles y Permisos**: Uso de roles como ROLE_ADMIN y ROLE_USER para acceso seguro a las funcionalidades.
- **Base de Datos**: Uso de MySQL como sistema de base de datos relacional.
- **Spring Data JPA**: Gestión de entidades y operaciones CRUD con un enfoque basado en repositorios.
- **Validación de datos**: Uso de DTOs y validaciones con anotaciones.
- **Arquitectura MVC**: Separación clara de responsabilidades entre modelos, vistas y controladores.

### Otros:
- Diseño basado en componentes reutilizables y buenas prácticas de programación.
- **Metodología Agile**: Gestión del proyecto dividiéndolo en etapas claras y manejables.

---

## Capturas de Pantalla

| página principal | filtros |
| ---------------- | ------- |
| <img src="./screenshot/pagina-principal.png" style="width: 100%;" alt="Página Principal" /> | <img src="./screenshot/filtros.png" style="width: 100%;" alt="Filtros" /> |

| favoritos | carrito |
| ---------------- | ------- |
| <img src="./screenshot/favoritos.png" style="width: 100%;" alt="Página Principal" /> | <img src="./screenshot/carrito.png" style="width: 100%;" alt="Filtros" /> |

| sesión | administrador |
| ---------------- | ------- |
| <img src="./screenshot/sesion.png" style="width: 100%;" alt="Página Principal" /> | <img src="./screenshot/administrador.png" style="width: 100%;" alt="Filtros" /> |

---

## Tecnologías Usadas

- **Frontend**:
  - React
  - Redux Toolkit
  - React Router
  - CSS

- **Backend**:
  - Java (Spring Boot)
  - Hibernate
  - MySql

---

## Estructura del proyecto

```bash
escolar-plus/
├── client/ # Aplicación React
└── app/ # API REST con Spring Boot
```

---

## Cómo Ejecutar el Proyecto Localmente

### Requisitos Previos

- Node.js (v16 o superior)
- JDK 17
- Visual Studio Code o cualquier editor compatible con Java

### Pasos

#### 1. Clonar el repositorio

```bash
# Clonar este proyecto en tu máquina local
$ git clone https://github.com/migueljarecca/escolar-plus.git

# Navegar al directorio del proyecto
$ cd escolar-plus
```

#### 2. Configuración del Frontend

```bash
# Navegar al directorio del frontend
$ cd client

# Instalar dependencias
$ npm install

#Por favor crea un archivo .env en la raiz del proyecto para definir las variables de entorno requeridas.
$ VITE_API_BASE_URL=http://localhost:8080 

# Ejecutar la aplicación
$ npm start
```

La aplicación estará disponible en: `http://localhost:5173`

#### 3. Crear la base de datos en MySql

```sql
-- Crear la base de datos 
CREATE DATABASE IF NOT EXISTS db_uniform;

-- Insertar roles por defecto
INSERT INTO roles (id, name) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- Crear usuario "admin"
INSERT INTO users (username, password, email)
VALUES ('admin', '$2a$10$kTfYk6O0UZ5fCZT15hD1eOYz7GeiOZq09sbsyhJ3nG9I1jFY0UZIa', 'admin@gmail.com');

-- Asignar roles al usuario "admin"
INSERT INTO users_roles (user_id, role_id) VALUES
(1, 1), -- ROLE_ADMIN
(1, 2); -- ROLE_USER
```

##### Datos de acceso predeterminados 
- **gmail:** `admin@gmail.com`
- **contraseña:** `admin123`

#### 4. Configuración del Backend

1. Abrir el proyecto en tu IDE (Visual Studio Code u otro).
2. Ejecutar la clase principal del proyecto `Application.java`.
3. El backend estará disponible en: `http://localhost:8080`

---

## Créditos

Desarrollado por **Miguel Jarecca** como parte de un proyecto de aprendizaje en React y Java.

---

## Contacto

Para más información o preguntas:
- **LinkedIn**: [Miguel Jarecca - LinkedIn](https://www.linkedin.com/in/migueljarecca/)
- **GitHub**: [Miguel Jarecca - GitHub](https://github.com/migueljarecca)
- **Portafolio**: [Miguel Jarecca - Portafolio](https://migueljarecca.github.io/portafolio-miguel/)

---

¡Gracias por revisar mi proyecto! 😊
