/**
 * Controlador de Usuarios
 * Maneja las peticiones HTTP relacionadas con usuarios
 */

const { sendSuccess, sendError } = require("../handlers/responseHandler");
const usuarioService = require("../services/usuarioService");

/**
 * POST /usuarios
 * Crea un nuevo usuario
 */
const crearUsuario = (req, res) => {
  try {
    const usuarioCreado = usuarioService.crearUsuario(req.body);

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
    const { id } = req.params;
    const usuarioActualizado = usuarioService.actualizarUsuario(id, req.body);

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

/**
 * DELETE /usuarios/:id
 * Elimina un usuario existente
 */
const eliminarUsuario = (req, res) => {
  try {
    const { id } = req.params;
    const usuarioEliminado = usuarioService.eliminarUsuario(id);

    if (!usuarioEliminado) {
      return sendError(res, "Usuario no encontrado", 404);
    }

    return sendSuccess(res, null, "Usuario eliminado exitosamente");
  } catch (error) {
    return sendError(res, "Error al eliminar usuario", 500);
  }
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
