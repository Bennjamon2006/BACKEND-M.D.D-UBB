# Backend de Usuarios - Tarea Metodología

Backend sencillo para gestión de usuarios diseñado como material educativo.

## Estructura del Proyecto

```
src/
├── config/          # Configuración de la aplicación
├── controllers/     # Controladores que manejan las peticiones HTTP
├── routes/         # Definición de rutas
├── services/       # Lógica de negocio
├── validations/    # Validaciones con Joi
├── handlers/       # Manejadores de respuestas
└── index.js        # Punto de entrada
```

## Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Copia las variables de entorno:

```bash
cp .env.example .env
```

3. Inicia el servidor:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints

### Crear Usuario (Implementado)

`POST /usuarios`

Body:

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@example.com",
  "edad": 25
}
```

### Obtener Usuarios (Implementado)

`GET /usuarios`

### Obtener Usuario por ID (Implementado)

`GET /usuarios/:id`

### Actualizar Usuario (Implementado)

`PATCH /usuarios/:id`

## Notas Importantes

- Actualmente usamos almacenamiento en memoria (array)
- **Esta semana**: Conectaremos una base de datos real
- Los endpoints GET y PATCH están listos para que los completes
- Revisa los comentarios en los archivos para las ayuditas

## Tarea para Estudiantes

1. **Completa el endpoint GET /usuarios** - Debe retornar todos los usuarios
2. **Completa el endpoint GET /usuarios/:id** - Debe retornar un usuario específico
3. **Completa el endpoint PATCH /usuarios/:id** - Debe actualizar un usuario existente
4. **Agrega validaciones** si lo consideras necesario en `src/validations/`

## Tarea completada

Tarea completada por Benjamín Rivas, estudiante de la carrera de Ingeniería de Ejecución en Computación e Informática en la Universidad del Bío-Bío.

## Funcionalidades extra

- Endpoint DELETE /usuarios/:id para eliminar un usuario por ID
- Optimización de servicio de usuarios usando un Map para acceso por ID O(1)
- Definición de campos de usuario editables en un array para evitar almacenar datos innecesarios.
- Refactorización de servicio de usuarios para devolver copias de objetos en lugar de referencias, evitando modificaciones accidentales desde controladores.
- Creación de middleware `validarDatos` para validar campos de entrada en endpoints POST y PATCH, evitando código repetido en controladores.
