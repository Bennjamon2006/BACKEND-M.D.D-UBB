/**
 * Rutas de Usuarios
 * Aquí definimos los endpoints relacionados con usuarios
 */

const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const validarDatos = require("../middlewares/validarDatos");
const {
  createUsuarioSchema,
  updateUsuarioSchema,
} = require("../validations/usuarioValidation");

// POST /usuarios - Crear un nuevo usuario
router.post(
  "/",
  validarDatos(createUsuarioSchema),
  usuarioController.crearUsuario,
);

// GET /usuarios - Obtener todos los usuarios
router.get("/", usuarioController.obtenerTodosLosUsuarios);

// GET /usuarios/:id - Obtener un usuario específico
router.get("/:id", usuarioController.obtenerUsuarioPorId);

// PATCH /usuarios/:id - Actualizar un usuario
router.patch(
  "/:id",
  validarDatos(updateUsuarioSchema),
  usuarioController.actualizarUsuario,
);

module.exports = router;
