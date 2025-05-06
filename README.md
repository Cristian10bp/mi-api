
# Documentación de Funcionalidad del Proyecto

Este proyecto es una API construida con Node.js y Express, organizada con una arquitectura modular que separa controladores, rutas, servicios y modelos. También incluye herramientas para pruebas, linting, y contenedores Docker.

## Estructura del Proyecto

```
mi-api/
├── Dockerfile               # Define cómo construir la imagen Docker de la API
├── docker-compose.yml       # Orquesta los servicios necesarios con Docker
├── package.json             # Dependencias y scripts del proyecto
├── .eslintrc.js             # Configuración de ESLint para el linting de código
├── jest.config.js           # Configuración del framework de pruebas Jest
├── src/                     # Código fuente principal
│   ├── app.js               # Punto de entrada de la aplicación Express
│   ├── controllers/         # Lógica que responde a las peticiones HTTP
│   │   └── userController.js
│   ├── models/              # Definición de modelos de datos (por ejemplo, usuarios)
│   │   └── user.js
│   ├── routes/              # Definición de rutas de la API
│   │   └── userRoutes.js
│   └── services/            # Lógica de negocio (servicios)
│       └── userService.js
└── tests/
    └── user.test.js         # Pruebas unitarias usando Jest
```

## Descripción de Componentes

- **app.js**: Configura la aplicación Express, middleware y rutas.
- **controllers/userController.js**: Gestiona las peticiones HTTP relacionadas con usuarios.
- **services/userService.js**: Contiene la lógica del negocio que soporta los controladores.
- **models/user.js**: Define el modelo de datos del usuario.
- **routes/userRoutes.js**: Define las rutas específicas para operaciones sobre usuarios.
- **tests/user.test.js**: Incluye pruebas automatizadas para verificar el comportamiento de la API.

## Docker y CI

- **Dockerfile** y **docker-compose.yml** permiten ejecutar y orquestar la aplicación fácilmente en contenedores.
- **ESLint** asegura la calidad del código.
- **Jest** permite ejecutar pruebas unitarias.

Este diseño modular facilita el mantenimiento, la escalabilidad y las pruebas automatizadas del proyecto.
