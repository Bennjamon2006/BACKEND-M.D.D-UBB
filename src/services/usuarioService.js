/**
 * Servicio de Usuarios
 * Contiene la lógica de negocio para gestionar usuarios
 *
 * Nota: Actualmente almacenamos en memoria con un array
 * Esta semana lo conectaremos a una base de datos real
 */

// Almacenamiento temporal en memoria (SOLO para desarrollo)
let usuarios = new Map();

let idActual = 1;

const generarId = () => idActual++;

const camposEditables = ["nombre", "apellido", "email", "edad"];

/**
 * Crear un nuevo usuario
 * @param {Object} datosUsuario - { nombre, apellido, email, edad }
 * @returns {Object} El usuario creado
 */
const crearUsuario = (datosUsuario) => {
  const nuevoUsuario = {
    id: generarId(),
  };

  camposEditables.forEach((campo) => {
    nuevoUsuario[campo] = datosUsuario[campo];
  });

  usuarios.set(nuevoUsuario.id, nuevoUsuario);
  return nuevoUsuario;
};

/**
 * Obtener todos los usuarios
 * @returns {Array} Array de todos los usuarios
 */
const obtenerTodosLosUsuarios = () => {
  return Array.from(usuarios.values());
};

/**
 * Obtener un usuario por ID
 * @param {Number} id - ID del usuario
 * @returns {Object|null} El usuario encontrado o null
 */
const obtenerUsuarioPorId = (id) => {
  const usuario = usuarios.get(id);

  if (!usuario) return null;

  return usuario;
};

/**
 * Actualizar un usuario existente
 * @param {Number} id - ID del usuario
 * @param {Object} datosActualizados - Campos a actualizar
 * @returns {Object|null} El usuario actualizado o null si no existe
 */
const actualizarUsuario = (id, datosActualizados) => {
  const usuario = usuarios.get(id);

  if (!usuario) return null;

  const usuarioActualizado = {};

  camposEditables.forEach((campo) => {
    if (campo in datosActualizados) {
      usuarioActualizado[campo] = datosActualizados[campo];
    } else {
      usuarioActualizado[campo] = usuario[campo];
    }
  });

  usuarioActualizado.id = id;

  usuarios.set(usuarioActualizado.id, usuarioActualizado);
  return usuarioActualizado;
};

/**
 * Eliminar un usuario (Bonus - no es requerido)
 * @param {Number} id - ID del usuario
 * @returns {boolean} true si se eliminó, false si no existe
 */
const eliminarUsuario = (id) => {
  if (!usuarios.has(id)) return false;

  usuarios.delete(id);

  return true;
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
