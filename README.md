# Delicias Naturales

Aplicación web para la gestión y comercialización de yogurts artesanales.

El sistema cuenta con una página pública para visualizar productos y un panel administrativo para gestionar el catálogo de yogurts.

## Características

### Página Principal
- Visualización de productos disponibles.
- Catálogo dinámico cargado desde una API REST.
- Integración con WhatsApp para realizar pedidos.
- Diseño responsive.

### Panel Administrativo
- Inicio de sesión para administradores.
- Listado de productos.
- Creación de nuevos productos.
- Edición de productos existentes.
- Eliminación de productos.
- Gestión de stock.
- Activación y desactivación de productos.
- Estadísticas básicas de inventario.

## Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome

### Backend
- Java
- Spring Boot
- Spring Data JPA
- PostgreSQL
- BCrypt

## Estructura del Proyecto

```
FrontEnd-Yogurt/
│
├── index.html
├── login.html
├── admin.html
│
├── css/
│   ├── style.css
│   ├── login.css
│   └── admin.css
│
├── js/
│   ├── main.js
│   ├── login.js
│   └── admin.js
│
└── assets/
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/FrontEnd-Yogurt.git
```

### 2. Abrir el proyecto

Puedes utilizar:

- Visual Studio Code
- Live Server
- Cualquier servidor web local

### 3. Configurar la API

En los archivos JavaScript se encuentra la URL de la API:

```javascript
https://TU-API/api/yogurt/findAll
```

Reemplázala por la dirección de tu backend.

## Módulos

### Inicio
Muestra los productos disponibles para los clientes.

### Login
Permite acceder al panel administrativo.

### Administración
Permite gestionar:

- Productos
- Precios
- Categorías
- Stock
- Estado de disponibilidad

## Seguridad

Actualmente el acceso al panel se controla mediante:

- Validación de usuario
- Session Storage

Este proyecto se encuentra en proceso de mejora para implementar autenticación más robusta mediante JWT.

## Objetivo del Proyecto

Proyecto desarrollado con fines académicos para fortalecer conocimientos en:

- Desarrollo Frontend
- Consumo de APIs REST
- JavaScript
- Spring Boot
- PostgreSQL
- Arquitectura Cliente-Servidor

## Autor

Juan Cárdenas

Estudiante de Ingeniería de Sistemas.
