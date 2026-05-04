/**
 * Controlador de Usuarios
 * Maneja las peticiones HTTP relacionadas con usuarios
 */

const { sendSuccess, sendError } = require("../handlers/responseHandler");
const usuarioService = require("../services/usuarioService");
const {
  createUsuarioSchema,
  updateUsuarioSchema,
} = require("../validations/usuarioValidation");

/**
 * POST /usuarios
 * Crea un nuevo usuario
 */
const crearUsuario = (req, res) => {
  try {
    // Validamos los datos de entrada
    const { error, value } = createUsuarioSchema.validate(req.body);

    if (error) {
      return sendError(
        res,
        "Error en validación de datos",
        400,
        error.details.map((err) => err.message),
      );
    }

    // Llamamos al servicio para crear el usuario
    const usuarioCreado = usuarioService.crearUsuario(value);

    // Respondemos con éxito
    return sendSuccess(res, usuarioCreado, "Usuario creado exitosamente", 201);
  } catch (error) {
    return sendError(res, "Error al crear usuario", 500);
  }
};

/**
 * GET /usuarios
 * Obtiene todos los usuarios
 */
const obtenerTodosLosUsuarios = (req, res) => {
  try {
    const usuarios = usuarioService.obtenerTodosLosUsuarios();

    return sendSuccess(res, usuarios, "Usuarios obtenidos exitosamente");
  } catch (error) {
    return sendError(res, "Error al obtener usuarios", 500);
  }
};

/**
 * GET /usuarios/:id
 * Obtiene un usuario específico por ID
 *
 */
const obtenerUsuarioPorId = (req, res) => {
  try {
    const { id } = req.params;
    const usuario = usuarioService.obtenerUsuarioPorId(id);

    if (!usuario) {
      return sendError(res, "Usuario no encontrado", 404);
    }

    return sendSuccess(res, usuario, "Usuario obtenido exitosamente");
  } catch (error) {
    return sendError(res, "Error al obtener usuario", 500);
  }
};

/**
 * PATCH /usuarios/:id
 * Actualiza un usuario existente
 */
const actualizarUsuario = (req, res) => {
  try {
    const { error, value } = updateUsuarioSchema.validate(req.body);

    if (error) {
      return sendError(
        res,
        "Error en validación de datos",
        400,
        error.details.map((err) => err.message),
      );
    }

    const { id } = req.params;
    const usuarioActualizado = usuarioService.actualizarUsuario(id, value);

    if (!usuarioActualizado) {
      return sendError(res, "Usuario no encontrado", 404);
    }

    return sendSuccess(
      res,
      usuarioActualizado,
      "Usuario actualizado exitosamente",
    );
  } catch (error) {
    return sendError(res, "Error al actualizar usuario", 500);
  }
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
};
